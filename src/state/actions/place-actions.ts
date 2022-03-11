import { createAction } from '@reduxjs/toolkit';

export const setUserLocation = createAction<object | undefined>('location/setUserLocation');
