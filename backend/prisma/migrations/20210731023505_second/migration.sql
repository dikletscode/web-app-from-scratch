/*
  Warnings:

  - A unique constraint covering the columns `[profile]` on the table `forSeller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile` to the `forSeller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `forSeller` ADD COLUMN `profile` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `forSeller.profile_unique` ON `forSeller`(`profile`);

-- AddForeignKey
ALTER TABLE `forSeller` ADD FOREIGN KEY (`profile`) REFERENCES `profile`(`profileId`) ON DELETE CASCADE ON UPDATE CASCADE;
