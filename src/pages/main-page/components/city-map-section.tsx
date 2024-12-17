import MapSection from '../../../components/map-section/map-section';

type CityMapSectionProps = {
  offersCount: number;
}

export default function CityMapSection({offersCount}: CityMapSectionProps) {
  return (
    <div className="cities__right-section">
      {offersCount && <MapSection />}
    </div>
  );
}
