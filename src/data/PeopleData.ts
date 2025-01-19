import { PeopleList } from '../types';
import carlos  from '../../public/images/carlos_franco.png';

export const PeopleData: PeopleList[] = [
    {
        title: 'Staff',
        people: [
            {
                name: 'Carlos Alberto López Franco',
                department: 'Departamento de Ciencias Computacionales',
                email: 'carlos.lopez@cucei.udg.mx',
                page: '/carlos_franco',
                img: carlos,
            }
        ]
    },
    {
        title: 'Estudiantes Graduados Miembros del SNI',
        people: [
            { name: 'Javier Enrique Gómez Ávila'},
            { name: 'José de Jesús Hernández Barragán' }
        ]
    },
    {
        title: 'Estudiantes Graduados (Doctorado)',
        people: [
            { name: 'Alberto Alejandro Gallegos Muro' },
            { name: 'Javier Enrique Gómez Ávila' },
            { name: 'José de Jesús Hernández Barragán' },
            { name: 'Erasmo Gabriel Martínez Soltero' }
        ]
    },
    {
        title: 'Estudiantes Graduados (Maestría)',
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
        title: 'Estudiantes Graduados (Licenciatura)',
        people: [
            { name: 'Michel Emanuel López Franco' },
            { name: 'Alan Milke Marquez' },
            { name: 'Marco Antonio De la Cruz González' },
            { name: 'Jessica Lizeth Marin' }
        ]
    }
]