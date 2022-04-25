import { Button, FormStatus, InputText } from 'components/common';
import BackNavigation from 'components/Layout/BackNavigation';
import Header from 'components/Layout/Header';
import Profile from 'components/Layout/Profile';
import { profileI18n } from 'constants/i18n-constant';
import routesPaths from 'constants/routes-paths-constant';
import testIds from 'constants/test-ids-constant';
import { Link } from 'react-router-dom';

import { capitalizeFirstLetter } from 'utils';
import styles from './profile-edit.module.scss';
import useProfileEdit from './useProfileEdit';

const ProfileEdit = () => {
  const { register, errors, t, handleSubmit, onSubmit, disabled, handleBack, handleDelete } =
    useProfileEdit();
  return (
    <>
      <Header variant="header--back" title={t(profileI18n.PAGE_TITLE)}>
        <BackNavigation to={routesPaths.index} onClick={handleBack} />
      </Header>
      <Profile isVisibleLink={false} />
      <FormStatus />
      <form data-testid="form" className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          {...register('email')}
          className={styles.form__label}
          type="email"
          label={t(profileI18n.FORM_EMAIL)}
          error={errors.email?.message}
          required
          name="email"
        />
        <InputText
          {...register('currentPassword')}
          className={styles.form__label}
          type="password"
          label={t(profileI18n.FORM_CURRENT_PASSWORD)}
          placeholder={capitalizeFirstLetter(t(profileI18n.FORM_PASSWORD_PLACEHOLDER))}
          error={errors.currentPassword?.message}
          name="currentPassword"
        />
        <InputText
          {...register('password')}
          className={styles.form__label}
          type="password"
          label={t(profileI18n.FORM_NEW_PASSWORD)}
          placeholder={capitalizeFirstLetter(t(profileI18n.FORM_PASSWORD_PLACEHOLDER))}
          error={errors.password?.message}
          name="password"
        />
        <InputText
          {...register('passwordConfirm')}
          className={styles.form__label}
          type="password"
          label={t(profileI18n.FORM_CONFIRM_PASSWORD)}
          error={errors.passwordConfirm?.message}
          name="passwordConfirm"
        />
        <div className="submit">
          <Button type="submit" label={t(profileI18n.FORM_SUBMIT)} disabled={disabled} />
        </div>
        <div className={styles.link}>
          <Link
            onClick={handleDelete}
            data-testid={testIds.PROFILE_LINK}
            to={routesPaths.index}
            className="link capital-case"
          >
            {t(profileI18n.LINK_DELETE)}
          </Link>
        </div>
      </form>
    </>
  );
};

export default ProfileEdit;
