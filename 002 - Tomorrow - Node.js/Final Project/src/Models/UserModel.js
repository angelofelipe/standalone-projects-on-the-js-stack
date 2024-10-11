import db from '../Config/db.js';

export function getAll(callback) {
  db.query('SELECT * FROM usuarios', (err, results) => {
    callback(err, results);
  });
}
