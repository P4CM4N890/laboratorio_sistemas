import { NavButton } from '../atoms';


export const NavBar = () => {
  return (
    <nav className='w-44 flex flex-col divide-y-[1px] divide-gray-300' >
        <NavButton label='Home' to='' />
        <NavButton label='Congress Articles' to='congress_articles' />
        <NavButton label='People' to='people' />
    </nav>
  )
}
