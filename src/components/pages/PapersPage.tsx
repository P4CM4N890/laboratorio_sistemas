import { Records } from '../../data';
import { CongressPageTemplate } from '../templates';


export const PapersPage = () => {

    return (
            <CongressPageTemplate records={ Records } />
        );
};