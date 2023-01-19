export type Book = 
    {
        id: string,
        name: string,
        year: number,
        author: string,
        pageCount: number,
        insertedAt: string,
        updatedAt: string
    }

export const books: Array<Book> = []