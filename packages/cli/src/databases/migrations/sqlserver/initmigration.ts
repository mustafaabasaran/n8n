import { MigrationInterface, QueryRunner } from 'typeorm';
import config from '@/config';
import { logMigrationEnd, logMigrationStart } from '@db/utils/migrationHelpers';

export class InitMigration implements MigrationInterface {
	name = 'InitialMigration1588102412422';

	async up(queryRunner: QueryRunner): Promise<void> {
		logMigrationStart(this.name);

		logMigrationEnd(this.name);
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		const tablePrefix = config.getEnv('database.tablePrefix');
	}
}
