import { Settings } from '../../const';
import { BlockPrefixType } from '../../types';

type RatingProps = {
  prefix: BlockPrefixType;
  rating: number;
}

export default function Rating({ prefix, rating }: RatingProps) {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * Settings.RatingRatio}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
