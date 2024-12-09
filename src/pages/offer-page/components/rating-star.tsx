import { ChangeEvent } from 'react';

type RatingStarProps = {
  count: number;
  title: string;
  rating: number | null;
  onHandleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function RatingStar({
  count,
  title,
  rating,
  onHandleInputChange
}: RatingStarProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={count}
        id={`${count}-stars`}
        type="radio"
        checked={count === rating}
        onChange={onHandleInputChange}
      />
      <label
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
