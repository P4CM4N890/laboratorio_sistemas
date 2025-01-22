import { CVCarlos } from '../../data';
import { CVPageTemplate } from '../templates';

export const CVCarlosFranco = () => {

    const cvCarlos = CVCarlos();

    return (
        <CVPageTemplate  data={ cvCarlos } />
    );
};