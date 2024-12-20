import dayjs from 'dayjs';

import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsItem from './offer-reviews-item';

import { reviews } from '../../../mocks';
import { Settings } from '../../../const';

const reviewsSlice = reviews.toSorted(
  (reviewA, reviewB) => dayjs(reviewB.date).diff(dayjs(reviewA.date))
).slice(0, Settings.MaxReviewsCount);

export default function OfferReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsSlice.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsSlice.map((review) => <OfferReviewsItem key={review.id} {...review} />)}
      </ul>
      {Settings.IsLogged && <OfferReviewsForm />}
    </section>
  );
}
