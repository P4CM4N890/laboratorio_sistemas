export interface People {
    name: any;
    department?: any;
    email?: string;
    img?: string;
    url?: string;
    page?: string;
}

export interface PeopleList {
    title: string;
    people: People[];
}