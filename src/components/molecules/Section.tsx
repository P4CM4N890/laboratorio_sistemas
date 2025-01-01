interface Props {
  children?: any,
  big?: boolean,
  div?: boolean,
  id?: string,
}

export const Section = ( { children, big, div, id } : Props ) => {
  return (
    <section id={ id } className={`${ big ? 'w-[42rem]' : 'w-96' } ${ div && 'divide-y-[1px] divide-gray-300' }`} >
      {
        children
      }
    </section>
  )
}