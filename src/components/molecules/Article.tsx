import { Links } from '../../types';
import { Link } from '../atoms';

interface Props {
    published: string,
    title?: string,
    img?: string,
    children?: any,
    authors: string[],
    source: string,
    volume?: string,
    issue?: string,
    links?: Links[],
}

export const Article = ( { published, title, img, children, authors, source, volume, issue, links } : Props ) => {
  return (
    <article className='py-3' >
        {
            published ? <p className='text-xs text-gray-600' >{ published }</p> : null
        }
        {
            title ? <h3 className='text-lg font-semibold leading-5' >{ title }</h3> : null
        }
        {
            img ? <img src={ img } alt={ title } loading='lazy' className='w-full object-cover py-1' /> : null
        }
        <p className='text-sm leading-4' >
            { authors.join('; ') }
        </p>
        <p className='text-sm' >
            <span className='font-medium' >{ source }, </span>
            {
                volume ? <span>Vol. { volume }, </span> : null
            }
            {
                issue ? <span> Issue { issue }</span> : null
            }
            {

            }
            {
                links ? 
                    <ul>
                        {
                            links.map( ({ url, type }) => <Link key={ url } href={ url } title={ type } /> )
                        }
                    </ul>
                : null
            }
        </p>
        {
            children ? <p className='text-justify' >{ children }</p> : null
        }
    </article>
  )
}
