import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

export default router;
