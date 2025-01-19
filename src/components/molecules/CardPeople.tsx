import { Link } from 'react-router';
import { People } from '../../types';

export const CardPeople = ( { name, department, email, img, url, page } : People ) => {

    return (
        <section className='w-[21rem] h-28 p-2 grid grid-cols-3' >
            <div className='h-24 w-20 bg-stone-100 col-span-1 rounded-md' >
                {
                    img && <img src={ img } alt={ name } className='h-full w-full object-cover rounded-md' />
                }
            </div>
            <div className='col-span-2 text-xs text-pretty leading-3' >
                <h4 className='text-sm font-semibold' >
                    { url && <a href={ url } className='underline decoration-stone-700' >{ name }</a> }
                    { page && <Link to={ page } className='underline decoration-stone-700' >{ name }</Link> }
                    { ( !url && !page ) && name }
                 </h4>
                {
                    department &&
                    <p className='italic text-stone-700 mb-4' >{ department }</p>
                }
                {
                    email &&
                    <p>Email: <a href='mailto:sdsdfsdfsdfsd' >{ email }</a></p>
                }
            </div>
        </section>
    );
};