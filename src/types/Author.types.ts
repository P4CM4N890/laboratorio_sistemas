export interface Author {
    id: number,
    author: string,
    ORCID: string,

    //| optional fields
    WSRID?: string, // Web Science Researcher ID
}