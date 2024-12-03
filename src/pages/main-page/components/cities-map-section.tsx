import { OFFERS_COUNT } from '../../../const';

export default function CitiesMapSection() {
  return (
    <div className="cities__right-section">
      {OFFERS_COUNT > 0 && <section className="cities__map map" />}
    </div>
  );
}
