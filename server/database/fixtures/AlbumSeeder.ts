import AbstractSeeder from "./AbstractSeeder";

import UserSeeder from "./UserSeeder";

class AlbumSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "album", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    for (let i = 0; i < 2; i++) {
      const user = this.getRef(`user_${i}`);

      for (let i = 0; i < 5; i++) {
        const fakeAlbum = {
          title: this.faker.music.album(),
          user_id: user.insertId,
        };

        this.insert(fakeAlbum);
      }
    }
  }
}

export default AlbumSeeder;
