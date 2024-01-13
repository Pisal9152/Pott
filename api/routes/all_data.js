import express from "express";
import mysql from "mysql2";
const router = express.Router();
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mydb",
});

//GET ALL
router.get("/all", (req, res) => {
  const sql =
    "SELECT * FROM mydb.all_data INNER JOIN mydb.list_of_data ON mydb.all_data.id = mydb.list_of_data.user_id;";
  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});
router.get("/", (req, res) => {
  const sql = "SELECT * FROM all_data";
  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

//POST
router.post("/", (req, res) => {
  const q =
    "INSERT INTO all_data (`name`, `desc`, `descs`, `image`, `isFavorite`, `route`)  VALUES (?)";
  const { name, desc, descs, image, isFavorite, route } = req.body;
  const values = [name, desc, descs, image, isFavorite, route];
  db.query(q, [values], (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

//DELETE
router.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const DELETE_CARD_QUERY = `DELETE FROM all_data WHERE id = ?`;
  db.query(DELETE_CARD_QUERY, [id], (err, result) => {
    if (err) throw err;
    return res.status(200).send("Card deleted successfully");
  });
});

//UPDATE
router.put("/add/:id", (req, res) => {
  const { id } = req.params;
  const UPDATE_CARD_QUERY = `UPDATE all_data SET name = ?, \`desc\` = ?, descs = ?, image = ?, isFavorite = ?, route = ? WHERE id = ?`;
  const { name, desc, descs, image, isFavorite, route } = req.body;
  const values = [name, desc, descs, image, isFavorite, route, id];
  db.query(UPDATE_CARD_QUERY, values, (err, result) => {
    if (err) throw err;
    return res.status(200).send("Card updated successfully");
  });
});

export default router;
