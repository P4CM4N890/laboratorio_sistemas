import { CardPeople } from '../molecules';
import { PageTemplate } from './PageTemplate';

export const PeoplePageTemplate = () => {

    return (
        <PageTemplate>
            <div className='p-5' >
                <section className='w-[42rem] grid grid-cols-2 place-items-center' >
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                    <CardPeople/>
                </section>
            </div>
        </PageTemplate>
    );
};