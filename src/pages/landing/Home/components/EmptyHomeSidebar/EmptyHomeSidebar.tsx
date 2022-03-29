import TargetList from '../TargetList';
import { useTranslation } from 'hooks';
import { homeI18n, sidebarI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter, getUserLocation } from 'utils';
import './empty-home-sidebar.scss';
import targets from 'data/targets.json';
import { useAppDispatch } from 'hooks/useDispatch';
import { useLayoutEffect } from 'react';
import { setMapLocation } from 'state/actions/place-actions';
import locationIcon from 'assets/layout/icons/location-icon.svg';
import { MenuItem } from 'components/common';
import Profile from 'components/Layout/Profile';

const EmptyHomeSidebar = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    getUserLocation()
      .then(coords => {
        const position = { lng: coords[0], lat: coords[1], icon: locationIcon };
        dispatch(setMapLocation(position));
      })
      .catch(error => alert(error.message));
  }, [dispatch]);

  return (
    <>
      <div className="header">
        <div className="header__item">
          <MenuItem />
        </div>
        <h1 className="header__title letter-spacing">{t(homeI18n.PAGE_TITLE)}</h1>
      </div>
      <Profile />
      <div className=" empty-sidebar empty-sidebar-h2">
        {capitalizeFirstLetter(t(sidebarI18n.PAGE_TITLE))}
      </div>
      <div className=" empty-sidebar empty-sidebar-h3">
        {capitalizeFirstLetter(t(sidebarI18n.PAGE_SUBTITLE))}
      </div>
      <TargetList targets={targets} />
    </>
  );
};

export default EmptyHomeSidebar;
