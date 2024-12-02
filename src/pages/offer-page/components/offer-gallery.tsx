import { nanoid } from '@reduxjs/toolkit';

import { GALLERY_IMAGE_COUNT } from '../../../const';

type OfferiImageProps = {
  image: string;
}

type OfferGalleryProps = {
  images: string[];
}

function OfferImage({image}: OfferiImageProps) {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}

export default function OfferGallery({images}: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, GALLERY_IMAGE_COUNT)
          .map((image) => <OfferImage key={nanoid()} image={image} />)}
      </div>
    </div>
  );
}
