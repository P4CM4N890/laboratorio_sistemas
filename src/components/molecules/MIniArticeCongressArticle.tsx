import { CongressArticle } from '../../types';
import { Link } from '../atoms';

export const MiniCongressArticle = ( { title, img, authors, links, description, pages, year, type, publisher } : CongressArticle ) => {
  return (
    <article className='py-3 flex' >
        <div className='w-28 mr-2' >
            {
                img ? <img src={ img } alt={ title } loading='lazy' className='w-28 object-cover py-1 float-left rounded-md' /> : null
            }
        </div>
        <div className='w-full' >
            
            <h3 className='text-base font-semibold leading-5 mb-1' >{ title }</h3>

            <p className='text-sm leading-4' >
                { authors.join('; ') }
            </p>

            {
                description && <p className='text-sm leading-4 my-1' >{ description }<span>{
                        pages && `. ${ pages }`
                    }</span></p>
            }
            
            <div className='flex divide-x-[1px] divide-stone-600' >
                { year && <p className='text-sm leading-4 px-2' >Year: { year }</p> }
                { type && <p className='text-sm leading-4 px-2' >{ type }</p> }
                { publisher && <p className='text-sm leading-4 px-2' >Publisher: { publisher }</p> }
            </div>

            <p className='text-sm' >
                
                {
                    links &&
                        <ul className='mt-2'>
                            {
                                links.map( ({ url, type }) => <Link key={ url } href={ url } title={ type } /> )
                            }
                        </ul>
            }
            </p>
        </div>
    </article>
  )
}
