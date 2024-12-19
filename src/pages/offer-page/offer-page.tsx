import Header from '../../components/header/header';
import OfferGallery from './components/offer-gallery';
import PremiumMark from '../../components/premium-mark/premium-mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import OfferFeaturesList from './components/offer-features-list';
import OfferInside from './components/offer-inside';
import OfferHost from './components/offer-host';
import OfferReviewsList from './components/offer-reviews-list';
import NearPlacesList from './components/near-places-list';
import MapSection from '../../components/map-section/map-section';

import { fullOffer } from '../../mocks';
import { getNearPlacesSlice, getPoints } from '../../data/data';
import { BlockPrefix } from '../../const';
import type { FullOffer } from '../../types';

const {
  id,
  images,
  isPremium,
  location: {latitude, longitude},
  title,
  isFavorite,
  rating,
  type,
  bedrooms,
  maxAdults,
  price,
  city,
  goods,
  host,
  description,
} = fullOffer as FullOffer;

export default function OfferPage() {
  const cityLocation = city.location;
  const currentPoint = {id, latitude, longitude};
  const points = [...getPoints(getNearPlacesSlice()), currentPoint];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark prefix={BlockPrefix.Offer} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  isFavorite={isFavorite}
                  prefix={BlockPrefix.Offer}
                  width={31}
                  height={33}
                />
              </div>
              <div className="offer__rating rating">
                <Rating prefix={BlockPrefix.Offer} rating={rating} />
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <OfferFeaturesList
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside
                goods={goods}
              />
              <OfferHost
                host={host}
                description={description}
              />
              <OfferReviewsList />
            </div>
          </div>
          <MapSection
            prefix={BlockPrefix.Offer}
            cityLocation={cityLocation}
            points={points}
            activeOfferId={currentPoint.id}
          />
        </section>
        <div className="container">
          <NearPlacesList />
        </div>
      </main>
    </div>
  );
}
