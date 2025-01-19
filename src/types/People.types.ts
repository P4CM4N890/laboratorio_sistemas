export interface People {
    name: string;
    department?: string;
    email?: string;
    img?: string;
    url?: string;
    page?: string;
}

export interface PeopleList {
    title: string;
    people: People[];
}