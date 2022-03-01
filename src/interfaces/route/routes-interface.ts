import { ReactNode } from 'react';

export interface Routes {
  path: string;
  element: ReactNode;
  authenticated?: boolean;
  exact?: boolean;
  private?: boolean;
}
