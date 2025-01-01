import { NavInfo } from "../organisms"
import { Header } from '../molecules';

interface Props {
  children?: any,
}

export const PageTemplate = ( { children } : Props ) => {
  return (
    <div className='h-full min-w-full w-min bg-gray-200 justify-items-center py-5' >
      <div className='w-min bg-white px-5' >
        <Header />
        <section className='flex flex-row' >
          <NavInfo />
          { children }
        </section>
      </div>
    </div>
  )
}
