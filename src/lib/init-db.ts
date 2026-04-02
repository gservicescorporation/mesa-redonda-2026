import dataSource from "./typeorm";

export async function initDB() {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
}