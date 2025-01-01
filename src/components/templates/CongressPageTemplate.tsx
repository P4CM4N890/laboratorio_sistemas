import { CongressArticle } from '../../types';
import { Section } from '../molecules';
import { MiniCongressArticle } from '../molecules/MIniArticeCongressArticle';
import { PageTemplate } from './PageTemplate';

interface Props {
    records: CongressArticle[],
}

export const CongressPageTemplate = ( { records } : Props ) => {

    return (
        <PageTemplate>
            <section className='grid grid-cols-1 w-max gap-10 p-5' >
                <Section big div >
                    {
                        records.map( ({ id, title, authors, description, pages, year, type, publisher, links }) => (
                            <MiniCongressArticle 
                                id={ id }
                                key={ id } 
                                title={ title } 
                                authors={ authors } 
                                description={ description }
                                pages={ pages }
                                year={ year }
                                type={ type }
                                publisher={ publisher }
                                links={ links }
                            />
                        ) )
                    }
                </Section>
            </section>
        </PageTemplate>
    );
};