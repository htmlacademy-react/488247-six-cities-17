import { ChangeEvent, useState } from 'react';

import RatingStar from './rating-star';

import { RATING_VALUES } from '../../../const';

export default function OfferReviewsForm() {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);

  function handleTextAreaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    return setText(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    return setRating(+(evt.target.value));
  }

  return (
    <form className="reviews__form form" action='/' method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map(
          (value, index) => (
            <RatingStar
              key={value}
              count={index + 1}
              title={value}
              rating={rating}
              handleInputChange={handleInputChange}
            />)
        ).toReversed()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        value={text}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
