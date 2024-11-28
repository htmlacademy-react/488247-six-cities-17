import { RATING_RATIO } from '../../const';

type RatingProps = {
  prefix: string;
  rating: number;
}

export default function Rating({ prefix, rating }: RatingProps) {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{ width: `${rating * RATING_RATIO}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
