type OfferFeachersListProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export default function OfferFeachersList({
  type,
  bedrooms,
  maxAdults
}: OfferFeachersListProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{type}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
      </li>
    </ul>
  );
}
