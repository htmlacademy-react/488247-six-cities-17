type HeaderUserInfoProps = {
  favoriteCount: number;
  isLogged: boolean;
};

export default function HeaderUserInfo({ favoriteCount, isLogged }: HeaderUserInfoProps) {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {isLogged &&
          <>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">{favoriteCount}</span>
          </>}
        {!isLogged && <span className="header__login">Sign in</span> }
      </a>
    </li>
  );
}
