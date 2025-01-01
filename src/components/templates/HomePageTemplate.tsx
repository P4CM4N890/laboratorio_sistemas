import { PageTemplate } from './PageTemplate';
import { Record } from '../../types';
import { SectionMiniRecords } from '../organisms';

import { Carousel } from '../molecules/Carousel';

interface Props {
    records: Record[],
    children?: any,
}


export const HomePageTemplate = ( { records, children } : Props ) => {
  return (
    <PageTemplate>
        <div className='flex flex-col w-full p-5 min-w-min' >
            <section className='pb-5' >
    
                <h2 className='text-sky-700 font-semibold text-2xl pb-2' >Intelligent Systems Laboratory</h2>


                <section>

                    <Carousel />

                    { children }

    
                </section>

            </section>
            <section className='grid grid-cols-1 w-max gap-10' >

                <SectionMiniRecords data={ records } />

            </section>
        </div>
    </PageTemplate>
  )
}
