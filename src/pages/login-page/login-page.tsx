import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';

import { CITIES } from '../../const';


type LoginPageProps = {
  activeCityIndex: number;
  handleClick: (i: number) => void;
}

export default function LoginPage({
  activeCityIndex,
  handleClick,
}: LoginPageProps) {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action='/' method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <LocationItem
              city={CITIES[activeCityIndex]}
              handleClick={handleClick}
              index={activeCityIndex}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
