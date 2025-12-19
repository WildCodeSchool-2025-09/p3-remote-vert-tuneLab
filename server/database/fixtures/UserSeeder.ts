import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 2; i++) {
      const fakeUser = {
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

export default UserSeeder;
