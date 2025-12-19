import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Album } from "../../../../shared/types/Album";

class AlbumRepository {
  async insert(album: Omit<Album, "id" | "createdAt">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO album (title, user_id) VALUES (?, ?)",
      [album.title, album.userId],
    );

    return result.insertId;
  }
}

export default new AlbumRepository();
