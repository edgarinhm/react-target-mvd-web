import { useAppDispatch, useAppSelector } from 'hooks';
import { HomeContent } from 'pages/landing/Home/useHome';
import { setHomeContent, setHomeSidebar } from 'state/actions/home-actions';

const useSideBar = () => {
  const { activeSidebar } = useAppSelector(state => state.homeReducer);
  const dispatch = useAppDispatch();
  const handleSection = (content: HomeContent) => {
    dispatch(setHomeContent(content));
  };
  const handleOnClick = () => {
    dispatch(setHomeSidebar(!activeSidebar));
  };
  return { handleSection, activeSidebar, handleOnClick };
};

export default useSideBar;
