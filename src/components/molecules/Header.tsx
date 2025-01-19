import logo from '../../utils/images/udg.webp';

export const Header = () => {
  return (
    <header className='w-full border-b-2 border-sky-700' >
      <div className="w-2/5 py-2" >
        <img src={ logo } alt="Logotipo de la Universidad de Guadalajara" />
      </div>
    </header>
  )
}
