import { Setting } from '../../const';
import { PrefixType } from '../../types';

type RatingProps = {
  prefix: PrefixType;
  rating: number;
}

export default function Rating({ prefix, rating }: RatingProps) {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * Setting.RatingRatio}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
