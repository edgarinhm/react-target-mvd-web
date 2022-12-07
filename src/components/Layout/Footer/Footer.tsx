import { ReactFragment } from 'react';

interface FooterProps {
  children: ReactFragment | JSX.Element | JSX.Element[];
}

const Footer = ({ children }: FooterProps) => {
  return <div className="footer">{children}</div>;
};

export default Footer;
