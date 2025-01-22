import { CardPeople } from '../molecules';
import { PageTemplate } from './PageTemplate';

import { PeopleList } from '../../types';

interface Props {
    peopleList: PeopleList[],
}

export const PeoplePageTemplate = ( { peopleList } : Props ) => {

    const { } = peopleList;

    return (
        <PageTemplate>
            <div className='p-5' >
                <section className='w-[42rem] grid gap-2' >
                    {
                        peopleList.map( ({ title, people }) => (
                            <section key={ title } >
                                <h2 className='text-lg font-semibold' >{ title }</h2>
                                <div className='grid grid-cols-2'>
                                    {
                                        people.map( ({ name, department, email, img, url, page }) => (
                                            <CardPeople 
                                                name={ name } 
                                                department={ department } 
                                                email={ email }
                                                img={ img }
                                                url={ url }
                                                page={ page }
                                                key={ name } 
                                            />
                                        ) )
                                    }
                                </div>
                            </section>
                        ))
                    }
                </section>
            </div>
        </PageTemplate>
    );
};