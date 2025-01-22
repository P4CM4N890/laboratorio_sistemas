import { PeopleList } from '../types';
import carlos  from '../utils/images/carlos_franco.png';
import { useTranslation } from 'react-i18next';

export const PeopleData = (): PeopleList[] => {
    
    const { t } = useTranslation();
    
    return [
    {
        title: t('staff'),
        people: [
            {
                name: 'Carlos Alberto López Franco',
                department: t('departments.computer_science'),
                email: 'carlos.lopez@cucei.udg.mx',
                page: '/carlos_franco',
                img: carlos,
            }
        ]
    },
    {
        title: t('graduates.sniMembers'),
        people: [
            { name: 'Javier Enrique Gómez Ávila'},
            { name: 'José de Jesús Hernández Barragán' }
        ]
    },
    {
        title: t('graduates.doctorate'),
        people: [
            { name: 'Alberto Alejandro Gallegos Muro' },
            { name: 'Javier Enrique Gómez Ávila' },
            { name: 'José de Jesús Hernández Barragán' },
            { name: 'Erasmo Gabriel Martínez Soltero' }
        ]
    },
    {
        title: t('graduates.master'),
        people: [
            { name: 'Geoffrey Kyle Fink' },
            { name: 'Gehová Lopez González' },
            { name: 'Juan Antonio Zepeda Santiago' },
            { name: 'Alberto Alejandro Gallegos Muro' },
            { name: 'Luis Felipe Villavicencio Velázquez' },
            { name: 'Roberto Valencia Murillo' },
            { name: 'Javier Enrique Gómez Ávila' },
            { name: 'Carlos Alberto Villaseñor Padilla' },
            { name: 'José de Jesús Hernández Barragán' },
            { name: 'María Margarita Reynoso López' },
            { name: 'Erasmo Gabriel Martínez Soltero' },
            { name: 'Laura Cecilia Antonio Gopar' },
            { name: 'Darío Alfonso Díaz Chávez' }
        ]
    },
    {
        title: t('graduates.licentiate'),
        people: [
            { name: 'Michel Emanuel López Franco' },
            { name: 'Alan Milke Marquez' },
            { name: 'Marco Antonio De la Cruz González' },
            { name: 'Jessica Lizeth Marin' }
        ]
    }
]
}