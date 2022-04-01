import { useLayoutEffect } from 'react';
import humps from 'humps';
import { useAppDispatch, useTranslation } from 'hooks';
import { getUserLocation } from 'utils';
import { setCurrentLocation } from 'state/actions/place-actions';
import Target from 'interfaces/target/target-interface';
import locationIcon from 'assets/layout/icons/location-icon.svg';
import dataTargets from 'data/targets.json';

export const useEmptyHomeState = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    getUserLocation()
      .then(coords => {
        const position = { lng: coords[0], lat: coords[1], icon: locationIcon };
        dispatch(setCurrentLocation(position));
      })
      .catch(error => alert(error.message));
  }, [dispatch]);

  const targets = humps.camelizeKeys(dataTargets) as Target[];

  return { t, targets };
};
