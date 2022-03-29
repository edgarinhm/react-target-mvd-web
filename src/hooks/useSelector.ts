import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'state/reducers/root-reducer';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
