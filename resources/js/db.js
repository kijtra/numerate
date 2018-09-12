import Dexie from 'dexie';

const db = new Dexie('NumerateDB');
db.version(1).stores({
    items: '++id, &title, count, *tags'
});

export default db;
