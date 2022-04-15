import { ReactFragment } from 'react';

interface FotterProps {
  children: ReactFragment | JSX.Element[];
}

const Footer = ({ children }: FotterProps) => {
  return <div className="footer">{children}</div>;
};

export default Footer;
