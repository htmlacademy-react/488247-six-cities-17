import { Prefix } from '../../const';
import Logo from '../logo/logo';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo
        prefix={Prefix.FooterLogo}
        width={64}
        height={33}
      />
    </footer>
  );
}
