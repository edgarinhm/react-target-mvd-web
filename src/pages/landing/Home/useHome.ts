import useAppSelector, { useAppDispatch } from 'hooks';

import { setHomeContent } from 'state/actions/home-actions';

export enum HomeContent {
  Empty,
  NewTarget,
  ViewChat,
}

interface HomeContentElement {
  content: JSX.Element;
}
export type homeContentDictionary = Record<HomeContent, HomeContentElement>;

export const useHome = () => {
  const { activeContent } = useAppSelector(state => state.homeReducer);
  const dispatch = useAppDispatch();

  const handleMapClick = (content: HomeContent) => {
    dispatch(setHomeContent(content));
  };

  return {
    activeContent,
    handleMapClick,
  };
};
