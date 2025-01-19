import { PeoplePageTemplate } from '../templates';

import { PeopleData } from '../../data';

export const PeoplePage = () => {
  return (
    <PeoplePageTemplate peopleList={ PeopleData } />
  )
}
