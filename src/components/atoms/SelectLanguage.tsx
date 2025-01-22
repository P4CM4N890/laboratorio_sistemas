import { useTranslation } from 'react-i18next';
import { LanguageInterface } from '../../constants/Languages';

interface Props {
    languages: LanguageInterface[]
}

export const SelectLanguage = ( { languages } : Props ) => {

    const { i18n } = useTranslation();

    const onChangeLang = ( e: React.ChangeEvent<HTMLSelectElement> ) => {
        const lang = e.target.value;
        i18n.changeLanguage( lang );
    }

    return (
        <select defaultValue={ i18n.language } onChange={ onChangeLang } >
            {
                languages.map( ( language, index ) => (
                    <option key={ index } value={ language.code } >{ language.label }</option>
                ))
            }
        </select>
    );
};