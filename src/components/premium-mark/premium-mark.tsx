import type { PrefixType } from '../../types';

type PremiumMarkProps = {
  prefix: PrefixType;
}

export default function PremiumMark({prefix}: PremiumMarkProps) {
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}
