import { useTranslation } from 'react-i18next';
import { NavButton } from '../atoms';


export const NavBar = () => {

  const { t } = useTranslation();

  return (
    <nav className='w-44 flex flex-col divide-y-[1px] divide-gray-300' >
        <NavButton label={ t('home') } to='laboratorio_sistemas' />
        <NavButton label={ t('papers') } to='papers' />
        <NavButton label={ t('conference_papers') } to='conference_papers' />
        <NavButton label={ t('people') } to='people' />
    </nav>
  )
}
