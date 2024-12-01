type PremiumMarkProps = {
  prefix: string;
}

export default function PremiumMark({prefix}: PremiumMarkProps) {
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}
