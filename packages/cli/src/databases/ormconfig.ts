import {
	getMariaDBConnectionOptions,
	getMysqlConnectionOptions,
	getPostgresConnectionOptions,
	getSqliteConnectionOptions,
	getSqlServerConnectionOptions,
} from './config';


export default [
	getSqliteConnectionOptions(),
	getPostgresConnectionOptions(),
	getMysqlConnectionOptions(),
	getMariaDBConnectionOptions(),
	getSqlServerConnectionOptions(),
];
