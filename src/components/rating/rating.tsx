import { Settings } from '../../const';

type RatingProps = {
  prefix: string;
  rating: number;
}

export default function Rating({ prefix, rating }: RatingProps) {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{ width: `${rating * Settings.RatingRatio}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
