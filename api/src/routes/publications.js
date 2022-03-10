const router = require("express").Router();
const { Publication } = require("../db.js");
const axios = require("axios");

router.get("/publication/:id", async function (req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const searchPublication = await Publication.findOne({
      where: { id: id },
    });
    res.json(searchPublication).status(200);
  } catch (e) {
    console.log(e);
  }
});

router.get("/publication", async function (req, res) {
  const { filter, orderBy, title } = req.query;
  if (title) {
    try {
      const { Op } = require("sequelize");
      const publicationSearch = await Publication.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        },
        attributes: ["title", "description", "public", "id"],
      });
      return res.json(publicationSearch).status(200);
    } catch (e) {
      console.log(e);
    }
  }
  if (filter && orderBy) {
    try {
      const publicationNames = await Publication.findAll({
        order: [[filter, orderBy]],
        attributes: ["title", "description", "public", "id"],
      });

      res.json(publicationNames);
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const publicationNames = await Publication.findAll({
        attributes: ["title", "description", "public", "id"],
      });

      res.json(publicationNames);
    } catch (e) {
      console.log(e);
    }
  }
});

router.post("/publication", async function (req, res) {
  const { title, description } = req.body;
  try {
    const createPublication = await Publication.create({
      title: title,
      description: description,
    });
    res.json(`La publicacion ${title} se ha creado correctamente`).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("/publication", async function (req, res) {
  const { id, title, description, public } = req.body;
  const publicacion = await Publication.findOne({
    where: { id: id },
  });
  try {
    const updatePublication = await Publication.update(
      {
        title: title,
        description: description,
        public: public,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res
      .json(
        `La publicacion ${publicacion.title} se ha actualizado correctamente`
      )
      .sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(`No se pudo encontrar la publicación`).sendStatus(404);
  }
});

router.delete("/publication/", async function (req, res) {
  const { id } = req.body;
  const publicationToDelete = await Publication.findOne({
    where: { id: id },
    attributes: ["title"],
  });
  try {
    const destroyPublication = await Publication.destroy({
      where: {
        id: id,
      },
    });
    res
      .json(`La publicación ${publicationToDelete.title} fue eliminada`)
      .sendStatus(200);
  } catch (e) {
    console.log(e);
    res.json(`No se pudo encontrar la publicación`).sendStatus(404);
  }
});

module.exports = router;
