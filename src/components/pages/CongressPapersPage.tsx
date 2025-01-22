import { CongressPageTemplate } from '../templates';
import { CongressArticlesData } from '../../data';

export const CongressPaperPage = () => {

    return (
        <CongressPageTemplate records={ CongressArticlesData } />
    );
};