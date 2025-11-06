"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedMigration1762414395404 = void 0;
class GeneratedMigration1762414395404 {
    constructor() {
        this.name = 'GeneratedMigration1762414395404';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."test-customer_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-customer" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "country" text NOT NULL, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "zipCode" text NOT NULL, "phoneNumber" text, "createdBy" text, "status" "public"."test-customer_status_enum" NOT NULL DEFAULT 'Active', CONSTRAINT "PK_a22cff6f86fb957823c8c121705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."test-facility_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-facility" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "contactName" text, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "zipCode" text NOT NULL, "status" "public"."test-facility_status_enum" NOT NULL DEFAULT 'Active', "weight" text NOT NULL, "customerId" integer, CONSTRAINT "PK_6873adb5994ed222f1e21134b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voter" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "wallet_address" character varying(255) NOT NULL, CONSTRAINT "PK_c1a0d8fd992c199219325d43705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vote_question" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "question_text" text NOT NULL, CONSTRAINT "PK_d377f94e59af78156cd1b451321" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vote_option" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "option_text" text NOT NULL, "vote_question_id" uuid NOT NULL, CONSTRAINT "PK_d17980c91005358383b7ad59ab0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vote" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "vote_option_id" uuid NOT NULL, "voter_id" uuid NOT NULL, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test-facility" ADD CONSTRAINT "FK_019deaff3c8726ce53cf857aebf" FOREIGN KEY ("customerId") REFERENCES "test-customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test-facility" DROP CONSTRAINT "FK_019deaff3c8726ce53cf857aebf"`);
        await queryRunner.query(`DROP TABLE "vote"`);
        await queryRunner.query(`DROP TABLE "vote_option"`);
        await queryRunner.query(`DROP TABLE "vote_question"`);
        await queryRunner.query(`DROP TABLE "voter"`);
        await queryRunner.query(`DROP TABLE "test-facility"`);
        await queryRunner.query(`DROP TYPE "public"."test-facility_status_enum"`);
        await queryRunner.query(`DROP TABLE "test-customer"`);
        await queryRunner.query(`DROP TYPE "public"."test-customer_status_enum"`);
    }
}
exports.GeneratedMigration1762414395404 = GeneratedMigration1762414395404;
//# sourceMappingURL=1762414395404-generated-migration.js.map