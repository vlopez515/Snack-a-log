const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "Server Error." });
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "Snack Not Found." });
  }
});

snacks.post("/", async (req, res) => {
  const createdSnack = await createSnack(req.body);
  if (createdSnack.id) {
    res.json(createdSnack);
  } else {
    res.status(422).json({ error: "Could not create snack." });
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.json(deletedSnack);
  } else {
    res.status(404).json({ error: "Snack not found." });
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSnack = await updateSnack(req.body, id);
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(404).json({ error: "Update Unsuccessful." });
  }
});

module.exports = snacks;
