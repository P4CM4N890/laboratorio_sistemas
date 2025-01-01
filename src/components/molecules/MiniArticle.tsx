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

export const MiniArticle = ( { published, title, img, children, authors, source, volume, issue, links } : Props ) => {
  return (
    <article className='py-3 flex' >
        <div className='w-28 mr-2' >
            {
                img ? <img src={ img } alt={ title } loading='lazy' className='w-28 object-cover py-1 float-left rounded-md' /> : null
            }
        </div>
        <div className='w-full' >
            {
                <p className='text-sm leading-4 mb-1' >
                    { authors.join('; ') }
                </p>
            }
            {
                title ? <h3 className='text-base font-semibold leading-5' >{ title }</h3> : null
            }
            <p className='text-sm' >
                <span>{ source }, </span>
                {
                    volume ? <span>Vol. { volume }, </span> : null
                }
                {
                    issue ? <span> Issue { issue }, </span> : null
                }
                <span>{ published }</span>
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
        </div>
    </article>
  )
}
