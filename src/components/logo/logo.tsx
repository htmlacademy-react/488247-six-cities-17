import clsx from 'clsx';

type LogoProps = {
  element: string;
}

export default function Logo({ element }: LogoProps) {
  return (
    <a className={clsx(
      `${element}-link`,
      location.pathname !== '/' && `${element}-link--active`)}
    href='/'
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={element === 'headerLogo' ? 81 : 64}
        height={element === 'headerLogo' ? 41 : 33}
      />
    </a>
  );
}
