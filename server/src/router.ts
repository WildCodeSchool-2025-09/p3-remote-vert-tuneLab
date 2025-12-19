import express from "express";
import AlbumActions from "./modules/album/AlbumActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.post("/api/albums", AlbumActions.add);
export default router;
