import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {FormItems} from './interfaces';
const tableName = 'problem3';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'problem3-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists

  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    email, isJoke, publisherType, description TEXT NOT NULL
      );`;
  await db.executeSql(query);
};

export const saveFormItems = async (
  db: SQLiteDatabase,
  formItems: FormItems,
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(email, isJoke, publisherType, description  ) values` +
    [formItems]
      .map(
        i =>
          `('${i.email}', '${i.isJoke}', '${i.publisherType}', '${i.description}' )`,
      )
      .join(',');
  createTable(db);
  return db.executeSql(insertQuery);
};
