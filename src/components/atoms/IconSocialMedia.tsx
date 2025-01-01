
interface Props {
    name: string,
    url: string,
    icon: string,
}

export const IconSocialMedia = ( { name, url, icon } : Props ) => {
  return (
    <a href={ url } >
        <img src={ icon } alt={ name } />
    </a>    
  )
}
