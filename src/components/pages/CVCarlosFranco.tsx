import { CVCarlos } from '../../data';
import { CVPageTemplate } from '../templates';
import carlos from '../../utils/images/carlos_franco.png';

import { useTranslation } from 'react-i18next';

export const CVCarlosFranco = () => {

    const { t } = useTranslation();

    const cvCarlos = CVCarlos();

    return (
        <CVPageTemplate  data={ cvCarlos } >
            <section className='min-h-48 p-2'>
                <div className='float-left' >
                    <img src={ carlos } alt='Carlos Alberto López Franco' className='h-44 p-2' />
                </div>
                <p>
                    { t('cvCarlos.biography') }
                </p>
            </section>
        </CVPageTemplate>
    );
};