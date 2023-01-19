import { Router } from "npm:express@^4.17";
import { Books } from './controller.ts'
const router: Router = Router();
const controllerBooks = new Books();

router.get("/books", controllerBooks.getAllBuku);
router.get("/books/:id", controllerBooks.getBukuById);
router.post("/books", controllerBooks.createBuku)

export default router;