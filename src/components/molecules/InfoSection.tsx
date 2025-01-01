import { Section } from './Section';
import { ListProps } from '../../types';
import { useURL } from '../../hooks';
import { ItemList } from './ItemList';

interface Props {
    title: string,
    list: ListProps[],
}

export const InfoSection = ( { title, list } : Props ) => {

    const { makeURL } = useURL();

    return (
        <Section id={ makeURL( title ) } big >
            <h4 className='text-xl font-medium mt-5' >{ title }</h4>
            <hr/>

            <ul className='list-disc list-outside mt-2' >
                {
                    list.map( item => (
                        <ItemList key={ item.description } description={ item.description } date={ item.date } activities={ item.activities } />
                    ))
                }
            </ul>

        </Section>
    );
};