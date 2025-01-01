import { Record } from '../../types';
import { Section, MiniArticle } from '../molecules';

interface Props {
    data: Record[];
}

export const SectionMiniRecords = ( { data } : Props ) => {
  return (
    <Section big div >
      <h3 className='text-xl font-semibold' >Publications</h3>
        {
            data.map( ({ id, published, title, authors, source, volume, issue, links, img }) => (
                <MiniArticle 
                    key={ id } 
                    title={ title } 
                    authors={ authors } 
                    published={ published } 
                    source={ source } 
                    volume={ volume } 
                    issue={ issue } 
                    links={ links }
                    img={ img }
                >
                    {/* // ADD more information here */}
                </MiniArticle>
            ))
      }
    </Section>
  )
}
