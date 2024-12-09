import { BlockPrefix } from '../../const';
import type { BlockPrefixType } from '../../types';

type MapSectionProps = {
  prefix?: BlockPrefixType;
}

export default function MapSection({prefix = BlockPrefix.Cities}: MapSectionProps) {
  return (
    <section className={`${prefix}__map map`} />
  );
}
