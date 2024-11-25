import { nanoid } from '@reduxjs/toolkit';

type OfferInsideItemProps = {
  item: string;
}

type OfferInsideProps = {
  goods: string[];
}

function OfferInsideItem({item}: OfferInsideItemProps) {
  return <li className="offer__inside-item">{item}</li>;
}

export default function OfferInside({goods}: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => <OfferInsideItem key={nanoid()} item={item} />)}
      </ul>
    </div>
  );
}
