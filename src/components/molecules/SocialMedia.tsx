import { SocialMedias } from '../../data';
import { IconSocialMedia } from '../atoms';

export const SocialMedia = () => {
  return (
    <div className='w-44 grid grid-cols-3 gap-3 pt-3' >
        {
            SocialMedias.map(( { name, url, icon } ) => (
                <IconSocialMedia key={ name } name={ name } url={ url } icon={ icon }  />
            ))
        }
    </div>
  )
}
