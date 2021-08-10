/*
  Warnings:

  - Added the required column `images` to the `productSeller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productSeller` ADD COLUMN `images` VARCHAR(300) NOT NULL;
