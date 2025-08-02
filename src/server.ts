import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { getNextProducts } from "./db";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req: Request, res: Response) => {
  try {
    if (typeof req.query.id !== "string") {
  return res.status(400).json({ error: "Некорректный параметр id" });
}
    const id = parseInt(req.query.id);

    const product = await getNextProducts(id);
    if (!product) {
      return res.status(404).json({ error: "Товар не найден" });
    }
    res.json([product]);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении товара" });
  }
});
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
