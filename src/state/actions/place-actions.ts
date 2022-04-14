import { createAction } from '@reduxjs/toolkit';

export const setCurrentLocation = createAction<object | undefined>('location/setCurrentLocation');
export const setMapLocation = createAction<object | undefined>('location/setMapLocation');
