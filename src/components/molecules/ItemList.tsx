import { ListProps } from "../../types";

export const ItemList = ( { date, description, activities } : ListProps ) => {

    return (
        <li className={ `mb-2 leading-5 text-pretty ${ date && 'grid' }` } >

            <div className='grid grid-cols-5' >
                { date && <span className='font-medium' >{ date }</span> }

                <p className={ `${ date ? 'col-span-4' : 'col-span-5' }` } >{ description }</p>
            </div>

            {
                activities && 
                <ul className='list-disc list-inside' >
                    {
                        activities && activities.map( activity => (
                            <li className='ml-10 mb-2' key={ activity }>{ activity }</li>
                        ))
                    }
                </ul>
            }
        </li>
    );
};