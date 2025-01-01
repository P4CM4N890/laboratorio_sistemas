import { Record } from '../../types';
import { Section, Article } from '../molecules';

interface Props {
    data: Record[];
}

export const SectionRecords = ( { data } : Props ) => {
  return (
    <Section>
      <h3 className='text-xl font-semibold' >Publications</h3>
        {
            data.map( ({ id, published, title, authors, source, volume, issue, links }) => (
              <Article 
                  key={ id } 
                  title={ title } 
                  authors={ authors } 
                  published={ published } 
                  source={ source } 
                  volume={ volume } 
                  issue={ issue } 
                  links={ links }
                  img='https://rpg.ifi.uzh.ch/img/news/unitree_G1_pic2.jpg'
              >
                  {/* // ADD more information here */}
              </Article>
          ))
      }
    </Section>
  )
}
