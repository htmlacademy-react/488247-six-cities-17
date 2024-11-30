import Rating from '../../../components/rating/rating';
import { Response } from '../../../types';

const monthes: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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
        <Rating prefix='reviews' rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {`${monthes[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`}
        </time>
      </div>
    </li>
  );
}
