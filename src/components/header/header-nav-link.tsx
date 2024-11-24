type HeaderNavLinkProps = { isLogged: boolean };

export default function HeaderNavLink({ isLogged }: HeaderNavLinkProps) {
  return (
    <li className="header__nav-item">
      {isLogged &&
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>}
    </li>
  );
}
