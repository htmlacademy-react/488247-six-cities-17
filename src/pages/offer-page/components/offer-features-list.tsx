import { toCapitalize } from '../../../utils';
import type { OfferType } from '../../../types';

type OfferFeaturesListProps = {
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
}

export default function OfferFeaturesList({
  type,
  bedrooms,
  maxAdults
}: OfferFeaturesListProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{toCapitalize(type)}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
      </li>
    </ul>
  );
}
