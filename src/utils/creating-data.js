require("dotenv").config({ path: ".env" });
const Importer = require("mysql-import");

const importer = new Importer({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
importer.onProgress((progress) => {
  let percent =
    Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer
  .import(`db/${process.env.DATABASE}.sql`)
  .then(() => {
    let files_imported = importer.getImported();
    console.log(`${files_imported.length} SQL file(s) imported.`);
    console.log("==================== Migration Success ====================");

    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });
