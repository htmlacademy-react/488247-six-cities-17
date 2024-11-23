type LogoProps = {
  headerLogo?: boolean;
}

export default function Logo({ headerLogo }: LogoProps) {
  return (
    <a className="header__logo-link header__logo-link--active">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={headerLogo ? 81 : 64}
        height={headerLogo ? 41 : 33}
      />
    </a>
  );
}
