import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { AppRoute } from '../../const';

export default function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 Page not found</b>
                <p className={`${styles.description} cities__status-description`}>
                  Sorry, We couldn&apos;t find anything for your request.
                </p>
                <Link className={styles.link} to={AppRoute.Main}>Back to the main page</Link>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}
