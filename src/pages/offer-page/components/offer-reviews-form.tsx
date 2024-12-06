import { ChangeEvent, useState } from 'react';

import RatingStar from './rating-star';

import { MIN_COMMENT_LENGTH, RATING_VALUES } from '../../../const';

type Rating = 1 | 2 | 3 | 4 | 5 | null;

type FormData = {
  rating: Rating;
  review: string;
}

const initialFormState: FormData = {
  rating: null,
  review: '',
};

export default function OfferReviewsForm() {
  const [{review, rating}, setFormData] = useState<FormData>(initialFormState);

  function handleTextAreaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    return setFormData((prev) => ({
      ...prev,
      review: evt.target.value
    }));
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    return setFormData((prev) => ({
      ...prev,
      rating: Number(evt.target.value) as Rating
    }));
  }

  function isDisable() {
    return review.length < MIN_COMMENT_LENGTH || !rating;
  }

  function handleFormSubmit(evt: ChangeEvent<HTMLFormElement>) {
    evt.preventDefault();
    // Тут пока ничего не обрабатывается
    setFormData(initialFormState);
  }

  return (
    <form
      className="reviews__form form"
      action='/'
      method="post"
      onSubmit={handleFormSubmit}
    >
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
              onHandleInputChange={handleInputChange}
            />)
        ).toReversed()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisable()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
