import { useCarousel } from '../../hooks';

import { CarouselImages } from '../../data';
import { Image } from '../atoms';

export const Carousel = () => {

  const { currentImage } = useCarousel( { CarouselImagesLength: CarouselImages.length } );

  return (
    <div className='float-right m-5' >
        {
            CarouselImages.map(( { src, alt }, index ) => {
              if (index !== currentImage) return null;
                return (
                    <Image key={ index } src={ src } alt={ alt } />
                )
            })
        } 
    </div>
  )
}
