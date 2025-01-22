import { PageTemplate } from './PageTemplate';

import { Carousel } from '../molecules/Carousel';
import { useTranslation } from 'react-i18next';

interface Props {
    // records: Record[],
    children?: any,
}


export const HomePageTemplate = ( { children } : Props ) => {

    const { t } = useTranslation();
    
    return (
        <PageTemplate>
            <div className='flex flex-col w-full p-5 min-w-min h-screen' >
                <section className='pb-5' >
        
                    <h2 className='text-sky-700 font-semibold text-2xl pb-2' >{ t('title') }</h2>


                    <section>

                        <Carousel />

                        { children }

        
                    </section>


                </section>
                <hr />
            </div>
        </PageTemplate>
    )
}
