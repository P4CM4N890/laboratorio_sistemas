import { Book } from "../types";

export const Books: Book[] = [
    {
        id: 1,
        authors: [ 'Alanis, Alma Y.', 'Arana Daniel, Nancy', 'Lopez Franco, Carlos' ],
        ISBN: [ '978-0-12-813789-5', '978-0-12-813788-8' ],
    },
    {
        id: 2,
        series: 'Studies in Systems Decisions and Control',
        ISBN: [ '978-3-319-14636-2', '978-3-319-14635-5' ],
        DOI: '10.1007/978-3-319-14636-2',
    },
    {
        id: 3,
        authors: [ 'Zhang, M.' ],
        ISBN: [ '978-1-4666-2176-3', '978-1-4666-2175-6' ],
        DOI: '10.4018/978-1-4666-2175-6',
    },
    {
        id: 4,
        series: 'Adaptation Learning and Optimization',
        ISBN: [ '978-3-642-12775-5' ],
        DOI: '10.1007/978-3-642-12775-5',
    }
]