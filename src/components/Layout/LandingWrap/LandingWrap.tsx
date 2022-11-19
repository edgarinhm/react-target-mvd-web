import { ReactNode } from 'react';
import Mobile from '../Mobile/Mobile';
import testIds from 'constants/test-ids-constant';

interface LandingWrapProps {
  children: ReactNode;
}

const LandingWrap = ({ children }: LandingWrapProps) => {
  return (
    <article className="two-column-layout-wrap" data-testid={testIds.LOGIN_PAGE}>
      <div className="left">{children}</div>
      <div className="right">
        <Mobile />
      </div>
    </article>
  );
};

export default LandingWrap;
