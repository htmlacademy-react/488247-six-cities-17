import dayjs from 'dayjs';

import Rating from '../../../components/rating/rating';

import { BlockPrefix } from '../../../const';
import type { Response } from '../../../types';

export default function OfferReviewsItem({
  user: {name, avatarUrl},
  date,
  comment,
  rating}: Response) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating prefix={BlockPrefix.Reviews} rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${dayjs(date).format('YYYY-MM-DD')}`}>
          {`${dayjs(date).format('MMMM YYYY')}`}
        </time>
      </div>
    </li>
  );
}
