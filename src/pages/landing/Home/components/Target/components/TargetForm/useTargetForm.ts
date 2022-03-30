import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useStatus, useTranslation } from 'hooks';
import Target from 'interfaces/target/target-interface';
import createValidation from 'validation/target/create-validation';
import { createTarget } from 'state/actions/target-actions';
import { setErrors } from 'state/actions/user-actions';
import { useAppDispatch } from 'hooks/useDispatch';
import { PENDING } from 'constants/action-status-constant';
import topics from 'data/topics.json';

export const useTargetForm = () => {
  const { lat, lng } = useAppSelector(state => state.placeReducer);
  const { status, error } = useStatus(createTarget);
  const dispatch = useAppDispatch();

  const initialValues: Target = {
    title: '',
    topicId: '',
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
  } = useForm<Target>({
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

  console.log('errors', errors);

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
