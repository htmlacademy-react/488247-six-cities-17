import dayjs from 'dayjs';

import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsItem from './offer-reviews-item';

import { reviews } from '../../../mocks';
import { Setting } from '../../../const';

const slicedReviews = reviews.toSorted(
  (firstReview, secondReview) => dayjs(secondReview.date).diff(dayjs(firstReview.date))
).slice(0, Setting.MaxReviewsCount);

export default function OfferReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {slicedReviews.map((review) => <OfferReviewsItem key={review.id} {...review} />)}
      </ul>
      {Setting.IsLogged && <OfferReviewsForm />}
    </section>
  );
}
