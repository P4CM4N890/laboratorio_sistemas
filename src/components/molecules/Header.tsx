import { Languages } from '../../constants';
import logo from '../../utils/images/udg.webp';
import { SelectLanguage } from '../atoms';

export const Header = () => {
  return (
    <header className='w-full border-b-2 border-sky-700 flex' >
      <div className="w-11/12 h-28 py-2" >
        <img src={ logo } alt="Logotipo de la Universidad de Guadalajara" className='h-24' />
      </div>
      <div className='self-end mb-4 w-1/12' >
        <SelectLanguage languages={ Languages } />
      </div>
    </header>
  )
}
