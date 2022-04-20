import { useAppSelector } from 'hooks';

const useHeader = () => {
  const { activeSidebar } = useAppSelector(state => state.homeReducer);
  return { activeSidebar };
};

export default useHeader;
