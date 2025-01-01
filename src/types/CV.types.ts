export interface CV {
    name: string,
    position: string,
    sections: Sections[],
}

interface Sections {
    title: string,
    list: ListProps[],
}

export interface ListProps {
    date?: string,
    description: string,
    activities?: string[],
}