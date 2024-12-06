type MapSectionProps = {
  prefix?: string;
}

export default function MapSection({prefix = 'cities'}: MapSectionProps) {
  return (
    <section className={`${prefix}__map map`} />
  );
}
