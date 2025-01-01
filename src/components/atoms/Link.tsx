interface Props {
    href: string,
    title: string,
}

export const Link = ( { href, title } : Props ) => {
  return (
    <a href={ href } className='text-blue-700 underline mr-1 hover:no-underline' >{ title }</a>
  )
}
