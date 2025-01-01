import { useURL } from '../../hooks';

interface Props {
    section: string;
}

export const BtnSection = ( { section } : Props ) => {

    const { makeURL } = useURL();

    return (
        <a href={ `#${ makeURL( section ) }` } className='px-3 py-1 bg-gray-300 hover:bg-transparent mr-2 mb-2 text-nowrap uppercase font-medium text-cyan-900 rounded-sm' >{ section }</a>
    );
};