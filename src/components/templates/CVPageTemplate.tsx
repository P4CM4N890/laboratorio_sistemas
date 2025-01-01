import { CV } from '../../types';
import { Section } from '../molecules';
import { CVSections } from '../organisms';
import { PageTemplate } from './PageTemplate';

interface Props {
    data: CV;
}

export const CVPageTemplate = ( { data } : Props ) => {

    return (
        
        <PageTemplate>
            <div className='p-5'>
                <Section big div >

                    <section>
                        <h1 className='text-2xl text-blue-800 pt-5' >{ data.name }</h1>
                        <h3 className='text-lg font-semibold' >{ data.position }</h3>
                    </section>

                    <CVSections data={ data } />

                </Section>
            </div>

        </PageTemplate>
    );
};