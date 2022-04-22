import { useContext } from 'react';
import { ModalContext } from 'context/ModalContext';
import { useAppDispatch, useAppSelector } from 'hooks';
import { HomeContent } from 'pages/landing/Home/useHome';
import { setHomeContent, setHomeSidebar } from 'state/actions/home-actions';

const useSideBar = () => {
  const { activeSidebar } = useAppSelector(state => state.homeReducer);
  const dispatch = useAppDispatch();
  const { setContactModalIsOpen } = useContext(ModalContext);

  const handleSection = (content: HomeContent) => {
    handleOnClick();
    dispatch(setHomeContent(content));
  };

  const handleOnClick = () => {
    dispatch(setHomeSidebar(!activeSidebar));
  };

  const handleContactModal = () => {
    handleOnClick();
    setContactModalIsOpen(isOpen => !isOpen);
  };
  return { handleSection, activeSidebar, handleOnClick, handleContactModal };
};

export default useSideBar;
