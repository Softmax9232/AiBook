import * as duckdb from "@duckdb/duckdb-wasm";
import { AsyncDuckDB, DuckDBConfig } from "@duckdb/duckdb-wasm";
import { logElapsedTime } from "@holdenmatt/ts-utils";

export let DEBUG: boolean | undefined;

let DB: Promise<AsyncDuckDB> | undefined;

/**
 * Initialize DuckDB, ensuring we only initialize it once.
 *
 * @param debug If true, log DuckDB logs and elapsed times to the console.
 * @param config An optional DuckDBConfig object.
 */
export default async function initializeDuckDb(options?: {
  debug?: boolean;
  config?: DuckDBConfig;
}): Promise<AsyncDuckDB> {
  const { debug = true, config } = options || {};
  DEBUG = debug;
  console.log("config1 is", config);

  if (DB === undefined) {
    DB = _initializeDuckDb(config);
  }
  return DB;
}

/**
 * Initialize DuckDB with a browser-specific Wasm bundle.
 */
const _initializeDuckDb = async (config?: DuckDBConfig): Promise<AsyncDuckDB> => {
  const config1: DuckDBConfig = {
    query: {
        castBigIntToDouble: true,
    },
  }
  const start = performance.now();

  // Select a bundle based on browser checks
  const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
  const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);

  const worker_url = URL.createObjectURL(
    new Blob([`importScripts("${bundle.mainWorker!}");`], {
      type: "text/javascript",
    })
  );
  // Instantiate the async version of DuckDB-wasm
  const worker = new Worker(worker_url);
  const logger = DEBUG ? new duckdb.ConsoleLogger() : new duckdb.VoidLogger();
  const db = new AsyncDuckDB(logger, worker);
  await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
  URL.revokeObjectURL(worker_url);

  if (config1) {
    if (config1.path) {
      const res = await fetch(config1.path);
      const buffer = await res.arrayBuffer();
      console.log("config data is =", config1.path.match(/[^/]*$/))
      const fileNameMatch = config1.path.match(/[^/]*$/);
      if (fileNameMatch) {
        config1.path = fileNameMatch[0];
        
      }
      await db.registerFileBuffer(config1.path, new Uint8Array(buffer));
    } else { 
      console.log("Not Registerd")
    }
    await db.open(config1);
  }

  if (DEBUG) {
    logElapsedTime("DuckDB initialized", start);
    if (config1) {
      console.log(`DuckDbConfig: ${JSON.stringify(config1, null, 2)}`);
    }
  }
  return db;
};

/**
 * Get the instance of DuckDB, initializing it if needed.
 *
 * Typically `useDuckDB` is used in React components instead, but this
 * method provides access outside of React contexts.
 */
export const getDuckDB = async (): Promise<AsyncDuckDB> => {
  if (DB) {
    console.log("inital db is", DB)
    return DB;
  } else {
    return await initializeDuckDb();
  }
};
