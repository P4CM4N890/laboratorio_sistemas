
export const useURL = ( ) => {

    const makeURL = ( section: string ) => {
        const url = section.toLowerCase().replace( / /g, '-' );
        return url;
    }

    return { makeURL };
}