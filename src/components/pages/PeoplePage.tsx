import { PeoplePageTemplate } from '../templates';

import { PeopleData } from '../../data';

export const PeoplePage = () => {

  const peopleData = PeopleData();

  return (
    <PeoplePageTemplate peopleList={ peopleData } />
  )
}
