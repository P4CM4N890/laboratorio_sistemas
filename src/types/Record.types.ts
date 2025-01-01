import { Conference } from './Conference.types';
import { Author } from './Author.types';
import { Book } from './Book.types';
import { Links } from './Links.types';

export interface Record {
    id: number,
    title: string,
    authors: string[],
    source: string,
    DOI?: string,
    published: string,
    accessionNumber: string,

    //| optional fields
    volume?: string,
    issue?: string,
    articleNumber?: string,
    authorIdentifiers?: Author[], //* by future implementation in DB this will be an array of IDs like [1, 2]
    pubMedID?: string,
    pages?: string,
    eISSN?: string,
    ISSN?: string,
    earlyAccessDate?: string,
    supplement?: string,
    conferenceData?: Conference,
    bookData?: Book[],
    specialIssue?: string, //* maybe this field should be a boolean
    editedBy?: string[]
    img?: string,

    links?: Links[],
}