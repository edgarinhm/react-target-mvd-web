import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import { TargetCollection } from 'interfaces/target/target-response-interface';
import TargetService from 'services/target-service';
import { addLocationToCollection, setMapLocation } from './place-actions';
import { TargetCollectionResponse } from '../../interfaces/target/target-response-interface';

export const createTarget = createAsyncThunk(
  'target/create',
  async (newTarget: Target, { dispatch }) => {
    try {
      const data = await TargetService.createTarget(newTarget);
      dispatch(
        setMapLocation({
          id: 0,
          lng: 0,
          lat: 0,
          icon: '',
        })
      );

      dispatch(
        addLocationToCollection({
          id: data.target.id,
          name: data.target.title,
          icon: data.target.topicIcon,
          location: {
            lat: data.target.lat,
            lng: data.target.lng,
          },
          topic: data.target.topicTitle,
        })
      );
      return data;
    } catch ({ response: { data } }) {
      throw data;
    }
  }
);

export const createTargetSuccess = createAction<TargetCollectionResponse>('target/createSuccess');
export const setTarget = createAction<Target>('target/setTarget');
export const setTargetCollection = createAction<TargetCollection[]>('target/TargetCollection');
export const removeTarget = createAction<number>('target/removeTarget');
