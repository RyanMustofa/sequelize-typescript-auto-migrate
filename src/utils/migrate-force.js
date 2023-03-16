const { exec } = require("child_process");
require("dotenv").config({ path: ".env" });
const path = require("path");
const process = require("process");
const fs = require("fs").promises;

(async function () {
  let is_force = process.argv[2];
  if (is_force === "--force") {
    if (
      await fs
        .access("db")
        .then(() => true)
        .catch(() => false)
    ) {
      await fs.rm("db", {
        recursive: true,
        force: true,
      });
    }

    await fs.mkdir("db");
    exec(
      `cd db && mysqldump -u${process.env.USERNAME} -p${process.env.PASSWORD} --no-create-info ${process.env.DATABASE} > ${process.env.DATABASE}.sql`,
      async (err, stdout, stderr) => {
        if (err) {
          console.error(stderr);
          return;
        }
        console.log(
          "==================== Migration Force ===================="
        );
        await new Promise((r) => setTimeout(r, 2000));
        console.log("starting .............");
        console.log("migration reading models .............");
        console.log("migrating ..........");
        require(path.join(
          __dirname,
          "../../dist/src/models/connection.service.js"
        ));
      }
    );
  }
})();
