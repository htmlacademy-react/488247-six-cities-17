import type { OfferCardProps } from '../../types';
import PremiumMark from '../premium-mark/premium-mark';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';

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
          <BookmarkButton
            element='place-card'
            isFavorite={isFavorite}
          />
        </div>
        <Rating element='place-card' rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
