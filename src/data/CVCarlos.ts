import { useTranslation } from 'react-i18next';
import { CV } from '../types';

export const CVCarlos = () : CV => {

    const { t } = useTranslation();

    return ({
        name: 'Carlos Alberto López Franco',
        position: t('cvCarlos.position'),
        sections: [
            {
                title: t('cvCarlos.sections.academicFormation.title'),
                list: [
                    {
                        date: '2003-2007',
                        description: t('cvCarlos.sections.academicFormation.list.0.description')
                    },
                    {
                        date: '2001-2003',
                        description: t('cvCarlos.sections.academicFormation.list.1.description')
                    },
                    {
                        date: '1996-2000',
                        description: t('cvCarlos.sections.academicFormation.list.2.description')
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.teaching.title'),
                list: [
                    {
                        date: '2001',
                        description: t('cvCarlos.sections.teaching.list.0.description')
                    },
                    {
                        date: '2008',
                        description: t('cvCarlos.sections.teaching.list.1.description')
                    },
                    {
                        date: '2013',
                        description: t('cvCarlos.sections.teaching.list.2.description')
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.awards.title'),
                list: [
                    {
                        description: t('cvCarlos.sections.awards.list.0.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.1.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.2.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.3.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.4.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.5.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.6.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.7.description')
                    },
                    {
                        description: t('cvCarlos.sections.awards.list.8.description')
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.institution_activities.title'),
                list: [
                    {
                        date: '2016-2019',
                        description: t('cvCarlos.sections.institution_activities.list.0.description'),
                    },
                    {
                        date: '2013-2016',
                        description: t('cvCarlos.sections.institution_activities.list.1.description'),
                        activities: [
                            t('cvCarlos.sections.institution_activities.list.1.activities.0.description'),
                            t('cvCarlos.sections.institution_activities.list.1.activities.1.description'),
                            t('cvCarlos.sections.institution_activities.list.1.activities.2.description')
                        ]
                    },
                    {
                        date: '2012-2015',
                        description: t('cvCarlos.sections.institution_activities.list.2.description'),
                        activities: [
                            t('cvCarlos.sections.institution_activities.list.2.activities.0.description'),
                            t('cvCarlos.sections.institution_activities.list.2.activities.1.description'),
                            t('cvCarlos.sections.institution_activities.list.2.activities.2.description')
                        ]
                    },
                    {
                        date: '2008',
                        description: t('cvCarlos.sections.institution_activities.list.3.description'),
                    },
                    {
                        date: '2001-2008',
                        description: t('cvCarlos.sections.institution_activities.list.4.description'),
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.research_projects.title'),
                list: [
                    {
                        description: t('cvCarlos.sections.research_projects.list.0.description')
                    },
                    {
                        description: t('cvCarlos.sections.research_projects.list.1.description')
                    },
                    {
                        description: t('cvCarlos.sections.research_projects.list.2.description')
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.project_manager.title'),
                list: [
                    {
                        description: t('cvCarlos.sections.project_manager.list.0.description')
                    }
                ]
            },
            {
                title: t('cvCarlos.sections.memberOfOCIC.title'),
                list: [
                    {
                        description: t('cvCarlos.sections.memberOfOCIC.list.0.description')
                    },
                    {
                        description: t('cvCarlos.sections.memberOfOCIC.list.1.description')
                    }
                ]
            }
        ]
    })
}