import { CV } from '../../types/CV.types';
import { BtnSection } from '../atoms';
import { InfoSection } from '../molecules';

interface Props {
    data: CV;
}

export const CVSections = ( { data } : Props ) => {

    const { sections } = data;

    return (
        <section>

            <section className='flex flex-wrap p-2 py-5' >
                {
                    sections.map( section => (
                        <BtnSection key={ section.title } section={ section.title } />
                    ))
                }
            </section>

            {
                sections.map( section => (
                    <InfoSection key={ section.title } title={ section.title } list={ section.list } />
                ))
            }

        </section>
    );
};