// Storage factory to choose between SQLite (dev) and PostgreSQL (production)
import * as storageSqlite from './storage';
import * as storagePg from './storage-pg';

const isProduction = process.env.NODE_ENV === 'production';

// Export the appropriate storage implementation
export const storage = isProduction ? storagePg.storage : storageSqlite.storage;
export const db = isProduction ? storagePg.db : storageSqlite.db;

// Re-export types
export type { Storage } from './storage';