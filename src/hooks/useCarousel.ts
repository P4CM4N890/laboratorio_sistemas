import { useEffect, useState } from 'react';

interface Props {
    CarouselImagesLength: number,
}

export const useCarousel = ( { CarouselImagesLength } : Props ) => {
    const [ currentImage, setCurrentImage ] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage( ( currentImage + 1 ) % CarouselImagesLength );
      }, 5000);
      return () => clearInterval( interval );
    }, [ currentImage ] );

    return { currentImage, setCurrentImage };
}
