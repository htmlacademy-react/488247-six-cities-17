import { BlockPrefix } from '../../const';
import Logo from '../logo/logo';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo
        prefix={BlockPrefix.FooterLogo}
        width={64}
        height={33}
      />
    </footer>
  );
}
