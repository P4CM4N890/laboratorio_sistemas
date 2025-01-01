import { CongressPageTemplate } from '../templates';
import { CongressArticlesData } from '../../data';

export const CongressArticlePage = () => {

    return (
        <CongressPageTemplate records={ CongressArticlesData } />
    );
};