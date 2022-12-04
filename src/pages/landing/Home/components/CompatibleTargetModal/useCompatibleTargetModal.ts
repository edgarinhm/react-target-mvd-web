import { FormEvent, useContext } from 'react';
import { ModalContext } from 'context/ModalContext';
import { useAppDispatch, useAppSelector, useTranslation } from 'hooks';
import { ModalConfig } from 'components/common/Modal/Modal';
import modalConfig from 'config/modal';
import { setHomeContent } from 'state/actions/home-actions';
import { HomeContent } from '../../useHome';

const useCompatibleTargetModal = () => {
  const { compatibleTargetModalIsOpen, setCompatibleTargetModalIsOpen } = useContext(ModalContext);
  const { matchedUser, matchConversation } = useAppSelector(state => state.targetReducer);

  const matchedUserArray = Object.values(matchedUser);
  const matchConversationArray = Object.values(matchConversation || []);

  const handleOpenModal = () => {
    setCompatibleTargetModalIsOpen(isOpen => !isOpen);
  };

  const styleConfig: ModalConfig = {
    content: { ...modalConfig.content, width: '22rem' },
    overlay: { ...modalConfig.overlay, right: '70%' },
  };

  const t = useTranslation();
  const dispatch = useAppDispatch();

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setHomeContent(HomeContent.ChatView));
    handleOpenModal();
  };

  return {
    compatibleTargetModalIsOpen,
    handleOpenModal,
    styleConfig,
    t,
    matchedUserArray,
    matchConversationArray,
    handleOnSubmit,
  };
};

export default useCompatibleTargetModal;
