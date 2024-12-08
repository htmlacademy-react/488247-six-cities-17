import { BlockPrefix } from '../../const';

type MapSectionProps = {
  prefix?: string;
}

export default function MapSection({prefix = BlockPrefix.Cities}: MapSectionProps) {
  return (
    <section className={`${prefix}__map map`} />
  );
}
