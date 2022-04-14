import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useStatus, useTranslation } from 'hooks';
import Target from 'interfaces/target/target-interface';
import createValidation from 'validation/target/create-validation';
import { createTarget } from 'state/actions/target-actions';
import { setErrors } from 'state/actions/user-actions';
import { useAppDispatch } from 'hooks/useDispatch';
import { PENDING } from 'constants/action-status-constant';
import TopicService from 'services/topic-service';
import { TopicColletion } from 'interfaces/topic/topic-response-interface';
import { DropdownOption } from 'components/common/Dropdown/Dropdown';

export const useTargetForm = () => {
  const { lat, lng } = useAppSelector(state => state.placeReducer);
  const { status, error } = useStatus(createTarget);
  const dispatch = useAppDispatch();

  const initialValues: Target = {
    id: 0,
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

  const [topicOptions, setTopicsOptions] = useState<DropdownOption[]>([]);

  const disabled = () => {
    return isValid ? status === PENDING : !isValid;
  };

  const errorMessage = error ? `record not created` : error;

  useEffect(() => {
    setValue('lat', lat);
    setValue('lng', lng);
    dispatch(setErrors(errorMessage));
  }, [lat, lng, setValue, dispatch, errorMessage]);

  const loadData = async () => {
    const topicsCollection: TopicColletion[] = await TopicService.findAllTopics();
    const topics: DropdownOption[] = topicsCollection.map(option => ({
      value: option.topic.id,
      text: option.topic.label,
      icon: option.topic.icon,
    }));
    setTopicsOptions(topics);
  };

  useEffect(() => {
    loadData();
  }, []);

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
