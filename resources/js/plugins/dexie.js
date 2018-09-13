import Dexie from 'dexie';

const db = new Dexie('NumerateDB');
db.version(1).stores({
    items: '++id, &title, count, goal, *tags, created_at, updated_at'
});

export default db;
