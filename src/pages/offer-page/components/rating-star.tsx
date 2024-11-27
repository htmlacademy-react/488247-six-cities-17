type RatingStarProps = {
  count: number;
}

export default function RatingStar({ count }: RatingStarProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={count}
        id={`${count}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title="good"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
