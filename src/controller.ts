import { Request, Response, Error } from "npm:express@^4.17";
import { books, Book } from './books.ts';
import { nanoid } from 'npm:nanoid@3.3.4';

import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

/**
 * Initialize.
 */

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

export class Books {
    async getAllBuku(_req: Request, res: Response) {
        try {
            const data = await prisma.book.findMany()
            return res.status(200).json({con: books.length, data: data});
        } catch (error: Error) {
            return res.status(404).json({ message: error.message });
        }
    }
    getBukuById(req: Request, res: Response): void {
        const id: string = req.params.id;
        try {
            const getBook: Book | undefined = books.find((b: Book): boolean => b.id == id);
            if(!getBook) return res.status(404).json({message: "id not found"})
            return res.status(200).json(getBook);
        } catch (error: Error) {
            return res.status(404).json({ message: error.message });
        }
    }
    createBuku(req: Request, res: Response): void {
        const {
            name,
            year,
            author,
            pageCount,
        } = req.body;

        try {
            const createBook: Book = {
                id: nanoid(30),
                name,
                year: Number(year),
                author,
                pageCount: Number(pageCount),
                insertedAt: String(new Date()),
                updatedAt: String(new Date())
            }

            books.push(createBook);
            return res.status(201).json(createBook);

        } catch (error: Error) {
            return res.status(400).json({ message: error.message });
        }
    }
    updateBuku(req: Request, res: Response): void {
        const idBuku: string = req.params.id;
        const {
            name,
            year,
            author,
            pageCount,
        } = req.body;

        try {
            const findIndex: number = books.map((b: Book): string => b.id).indexOf(idBuku);
            books[findIndex] = {
                ...books[findIndex],
                name,
                year: Number(year),
                author,
                pageCount: Number(pageCount),
                updatedAt: String(new Date)
            }
            return res.status(201).json({ ...books[findIndex] });

        } catch (error: Error) {
            return res.status(400).json({ message: error.message });
        }
    }
    deleteBuku(req: Request, res: Response): void {
        const idBuku: string = req.params.id;
        try {
            const findIndex: number = books.map((b: Book): string => b.id).indexOf(idBuku);
            if (findIndex < 0) return res.status(404).json({message: "id notfound"});
            books.splice(findIndex, 1);
            res.status(200).json({message: "deleted"});
        } catch (error: Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}