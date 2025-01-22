import { useTranslation } from 'react-i18next';
import { HomePageTemplate } from '../templates';

import { Link } from 'react-router';

export const HomePage = () => {

  const { t } = useTranslation();

    return (
      <HomePageTemplate>

        <p className='text-justify leading-snug text-sm mb-1 w-[42rem]' >{ t('description_pt1') }<Link to='carlos_franco' className='text-blue-700 underline hover:no-underline' >Prof. Carlos Alberto López Franco</Link>{ t('description_pt2') }</p>
        
      </HomePageTemplate>
    )
}
