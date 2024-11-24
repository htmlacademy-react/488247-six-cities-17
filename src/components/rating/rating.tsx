import { RATING_RATIO } from '../../const';

type RatingProps = {
  element: string;
  rating: number;
}

export default function Rating({ element, rating }: RatingProps) {
  return (
    <div className={`${element}__rating rating`}>
      <div className={`${element}__stars rating__stars`}>
        <span style={{ width: `${rating * RATING_RATIO}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
