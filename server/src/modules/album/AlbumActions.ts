import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import AlbumRepository from "./AlbumRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.title || typeof req.body.title !== "string") {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    // ToDo : Penser à remplacer la valeur 1 par l'ID de l'utilisateur connecté
    const newAlbum = {
      title: req.body.title,
      userId: 1,
    };

    const newAlbumId = AlbumRepository.insert(newAlbum);

    res.status(StatusCodes.CREATED).json({ newAlbumId });
  } catch (err) {
    next(err);
  }
};

export default { add };
