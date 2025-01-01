import { Links } from './Links.types';

export interface CongressArticle {
    id: number,
    title: string;
    authors: string[];
    description?: string;
    year?: string;
    publisher?: string;
    type?: 'Conference Paper' | null;
    pages?: string;
    links?: Links[];
    img?: string;
}