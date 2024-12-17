import OfferReviewsForm from './offer-reviews-form';
import OfferReviewsItem from './offer-reviews-item';

import { reviews } from '../../../mocks';
import { Settings } from '../../../const';

export default function OfferReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <OfferReviewsItem key={review.id} {...review} />)}
      </ul>
      {Settings.IsLogged && <OfferReviewsForm />}
    </section>
  );
}
