import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useSession, useTranslation } from 'hooks';
import profileValidation from 'validation/user/profile-validation';
import { ProfileEdit } from 'interfaces/profile/profile-edit-interface';
import UserService from 'services/user-service';
import { UserUpdate } from 'interfaces/profile/profile-update-request-interface';
import { OK, UNPROCESSABLE_ENTITY } from 'constants/api-constants';
import { setErrors } from 'state/actions/user-actions';
import { setHomeContent } from 'state/actions/home-actions';
import { HomeContent } from '../../useHome';

const useProfileEdit = () => {
  const { user } = useSession();
  const initialValues: ProfileEdit = {
    email: user.email,
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isValid },
  } = useForm<ProfileEdit>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(profileValidation),
  });

  const t = useTranslation();
  const disabled = !Object.keys(dirtyFields).length || !isValid;
  const dispatch = useAppDispatch();

  const onSubmit = (formData: ProfileEdit) => {
    const id = user?.id || '';
    const userUpdate: UserUpdate = {
      username: user.username,
      email: formData.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      gender: user.gender,
      avatar: user.avatar,
      pushToken: user.pushToken || '',
    };
    UserService.updateProfile(id, userUpdate)
      .then(response => {
        if (response === OK) {
          const changePassword = {
            currentPassword: formData.currentPassword,
            password: formData.password,
            passwordConfirmation: formData.passwordConfirm,
          };
          UserService.changePassword(changePassword).catch(error => {
            if (error.message !== UNPROCESSABLE_ENTITY) {
              dispatch(setErrors(error.message));
            }
          });
        }
      })
      .catch(error => dispatch(setErrors(error.message)));
  };
  const handleBack = () => dispatch(setHomeContent(HomeContent.Empty));
  const handleDelete = () => {};
  return { handleSubmit, register, errors, t, disabled, onSubmit, handleBack, handleDelete };
};

export default useProfileEdit;
