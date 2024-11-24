import clsx from 'clsx';
import type { OfferCardProps } from '../../types/types';
import PremiumMark from '../premium-mark/premium-mark';

export default function OfferCard({
  previewImage,
  title,
  type,
  price,
  rating,
  isPremium,
  isFavorite,
}: OfferCardProps) {
  return (
    <article
      className="cities__card place-card"
    >
      {isPremium && <PremiumMark element='place-card' />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={clsx(
              'place-card__bookmark-button',
              isFavorite && 'place-card__bookmark-button--active',
              'button')}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
