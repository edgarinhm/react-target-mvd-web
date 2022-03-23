import TargetList from '../TargetList';
import { useTranslation } from 'hooks';
import { sidebarI18n } from 'constants/i18n-constant';
import { capitalizeFirstLetter, getUserLocation } from 'utils';
import './empty-home-sidebar.scss';
import dataTargets from 'data/targets.json';
import { useAppDispatch } from 'hooks/useDispatch';
import { useEffect } from 'react';
import { setMapLocation } from 'state/actions/place-actions';
import locationIcon from 'assets/layout/icons/location-icon.svg';
import humps from 'humps';
import Target from 'interfaces/target/target-interface';

const EmptyHomeSidebar = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    getUserLocation()
      .then(coords => {
        const position = { lng: coords[0], lat: coords[1], icon: locationIcon };
        dispatch(setMapLocation(position));
      })
      .catch(error => alert(error.message));
  }, [dispatch]);

  const targets = humps.camelizeKeys(dataTargets) as Target[];

  return (
    <>
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
