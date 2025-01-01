export interface Book {
    id: number,
    authors?: string[],
    ISBN: string[],
    DOI?: string,
    series?: string,
}