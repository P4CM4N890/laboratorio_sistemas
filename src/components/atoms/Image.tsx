// TODO: create a base to use in carousel
// TODO: create a carousel using useState to change the image

interface Props {
    src: string,
    alt: string,
}

export const Image = ( { src, alt } : Props ) => {
  return (
    <img src={ src } alt={ alt } className='w-96 h-52 object-cover rounded-md' />
  )
}
