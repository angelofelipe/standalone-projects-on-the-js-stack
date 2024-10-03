import { openDB } from "../configDB.js";

export async function createTablePerson() {
    openDB().then(async db => {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS person (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                age INTEGER
            )
        `)
    });
}

export async function insertPerson(person) {
    openDB().then(async db => {
        await db.run(`
            INSERT INTO person (name, age) VALUES (?, ?)
        `, person.name, person.age)
    });
}

export async function updatePerson(person) {
    openDB().then(async db => {
        await db.run(`
            UPDATE person SET name = ?, age = ? WHERE id = ?
        `, person.name, person.age, person.id)
    });
}

export async function selectAllPerson() {
    return openDB().then(async db => {
        return await db.all(`SELECT * FROM person`)
        .then(res => res);
    })
}

export async function selectPerson(person) {
    return openDB().then(async db => {
        return await db.get(`SELECT * FROM person WHERE id = ?`, [person.id])
        .then(res => res);
    })
}

export async function deletePerson(person) {
    return openDB().then(async db => {
        return await db.get(`DELETE FROM person WHERE id = ?`, [person.id])
        .then(res => res);
    })
}