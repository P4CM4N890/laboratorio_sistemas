import { NavLink } from "react-router"

interface Props {
    label: string,
    to?: string,
    onClick?: () => void,
}

export const NavButton = ( { label, to = '', onClick } : Props ) => {
  return (
    <NavLink to={ `/${ to }` } onClick={ onClick } className={ ({ isActive }) => `${ isActive ? 'font-semibold' : '' } bg-white px-3 text-sm hover:brightness-95` } >
        { label }
    </NavLink>
  )
}
