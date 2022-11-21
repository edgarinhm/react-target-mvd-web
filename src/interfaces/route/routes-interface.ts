import { ReactElement, ReactNode } from 'react';

export interface Routes {
  path: string;
  element?: ReactNode;
  Component: ReactElement;
  authenticated?: boolean;
  exact?: boolean;
  private?: boolean;
}

export interface Route {
  [role: string]: Routes[];
}

type JSXComponent = () => JSX.Element;
