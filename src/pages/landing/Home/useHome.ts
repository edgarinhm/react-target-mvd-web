import { useState } from 'react';

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
  const [activeContent, setActiveContent] = useState(HomeContent.Empty);

  const handleMapClick = (content: number) => {
    setActiveContent(content);
  };

  return {
    activeContent,
    setActiveContent,
    handleMapClick,
  };
};
