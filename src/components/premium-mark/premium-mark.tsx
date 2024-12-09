import type { BlockPrefixType } from '../../types';

type PremiumMarkProps = {
  prefix: BlockPrefixType;
}

export default function PremiumMark({prefix}: PremiumMarkProps) {
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}
