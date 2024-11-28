type LogoProps = {
  prefix: string;
}

export default function Logo({ prefix }: LogoProps) {
  return (
    <a className={`${prefix}-link`}
      href='/'
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={prefix === 'headerLogo' ? 81 : 64}
        height={prefix === 'headerLogo' ? 41 : 33}
      />
    </a>
  );
}
