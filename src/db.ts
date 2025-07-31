import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "julianMak",
  database: "my_db_lockshop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Получить limit товаров начиная с offset
export async function getNextProducts(offset: number, limit: number = 1) {
  const [rows]: any[] = await pool.query("SELECT id, title, price, image FROM products LIMIT ? OFFSET ?", [limit, offset]);
  const products = rows[0];
  return {
    ...products,
  };
}

// Получить один товар по id
export async function getProductById(id: number) {
  // Получаем сам товар без description и in_stock
  const [productRows]: any[] = await pool.query("SELECT id, title, price, image FROM products WHERE id = ?", [id]);
  const product = productRows[0];
  if (!product) return null;
  // Получаем характеристики
  // const [characteristics]: any[] = await pool.query("SELECT * FROM product_characteristics WHERE product_id = ?", [id]);
  // Получаем комментарии
  // const [comments]: any[] = await pool.query("SELECT * FROM product_comments WHERE product_id = ?", [id]);
  // Собираем всё в один объект
  return {
    ...product,
  };
}
