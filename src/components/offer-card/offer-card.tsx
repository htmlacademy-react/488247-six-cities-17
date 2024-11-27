import PremiumMark from '../premium-mark/premium-mark';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import type { Offer } from '../../types';

type OfferCardProps = Offer & {
  element: string;
}

export default function OfferCard({
  previewImage,
  title,
  type,
  price,
  rating,
  isPremium,
  isFavorite,
  element,
}: OfferCardProps) {
  return (
    <article
      className={`${element}__card place-card`}
    >
      {isPremium && <PremiumMark element='place-card' />}
      <div className={`${element}__image-wrapper place-card__image-wrapper`}>
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
