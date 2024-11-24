type PremiumMarkProps = {
  element: string;
}

export default function PremiumMark({element}: PremiumMarkProps) {
  return (
    <div className={`${element}__mark`}>
      <span>Premium</span>
    </div>
  );
}
