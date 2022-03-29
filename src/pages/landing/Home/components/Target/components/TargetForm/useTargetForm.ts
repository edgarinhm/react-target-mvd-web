import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useStatus, useTranslation } from 'hooks';
import TargetFormData from 'interfaces/target/target-form-data-interface';
import createValidation from 'validation/target/create-validation';
import topics from 'data/topics.json';
import { createTarget } from 'state/actions/target-actions';
import { PENDING } from 'constants/action-status-constant';
import { setErrors } from 'state/actions/user-actions';
import { useAppDispatch } from 'hooks/useDispatch';

export const useTargetForm = () => {
  const { lat, lng } = useAppSelector(state => state.placeReducer);
  const { status, error } = useStatus(createTarget);
  const dispatch = useAppDispatch();

  const initialValues: TargetFormData = {
    title: '',
    topic: '',
    lat,
    lng,
    radius: 200,
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<TargetFormData>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(createValidation),
  });

  const t = useTranslation();

  const topicOptions = topics.map(topic => ({
    value: topic.id,
    text: topic.label,
    icon: topic.icon,
  }));

  const disabled = () => {
    return isValid ? status === PENDING : !isValid;
  };

  useEffect(() => {
    setValue('lat', lat);
    setValue('lng', lng);
    dispatch(setErrors(error ? `record not created` : error));
  }, [lat, lng, setValue, dispatch, error]);

  return {
    handleSubmit,
    register,
    control,
    errors,
    isValid,
    setValue,
    t,
    topicOptions,
    disabled,
    status,
  };
};
