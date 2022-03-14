import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'state/reducers/root-reducer';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
