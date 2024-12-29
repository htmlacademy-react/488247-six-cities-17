import { generatePath, Link } from 'react-router-dom';

import PremiumMark from '../premium-mark/premium-mark';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';

import { AppRoute, Prefix } from '../../const';
import { toCapitalize } from '../../utils';
import type { PrefixType, Offer } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { setActiveOfferId } from '../../features/maps/mapsSlice';

type OfferCardProps = Offer & {
  prefix?: PrefixType;
  width?: number;
  height?: number;
  activePoint?: boolean;
}

export default function OfferCard({
  id,
  previewImage,
  title,
  type,
  price,
  rating,
  isPremium,
  isFavorite,
  prefix = Prefix.Cities,
  width = 260,
  height = 200,
  activePoint,
}: OfferCardProps) {
  const dispatch = useAppDispatch();

  function handleMouseEnter() {
    dispatch(setActiveOfferId(id));
  }

  function handleMouseLeave() {
    dispatch(setActiveOfferId(null));
  }

  return (
    <article
      className={`${prefix}__card place-card`}
      onMouseEnter={() => activePoint && handleMouseEnter()}
      onMouseLeave={() => activePoint && handleMouseLeave()}
    >
      {isPremium && <PremiumMark prefix={Prefix.PlaceCard} />}
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${prefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            prefix={Prefix.PlaceCard}
            isFavorite={isFavorite}
          />
        </div>
        <Rating prefix={Prefix.PlaceCard} rating={rating} />
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{toCapitalize(type)}</p>
      </div>
    </article>
  );
}
