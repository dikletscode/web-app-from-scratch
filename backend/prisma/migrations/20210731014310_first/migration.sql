-- CreateTable
CREATE TABLE `role` (
    `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `role.roleName_unique`(`roleName`),
    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `userId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `user.username_unique`(`username`),
    UNIQUE INDEX `user.email_unique`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `profileId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191),
    `address` VARCHAR(191),
    `images` VARCHAR(300),
    `noTelp` VARCHAR(191),
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `profile_userId_unique`(`userId`),
    PRIMARY KEY (`profileId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `storeAddress` (
    `addressId` INTEGER NOT NULL AUTO_INCREMENT,
    `province` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `detailId` INTEGER NOT NULL,

    UNIQUE INDEX `storeAddress_detailId_unique`(`detailId`),
    PRIMARY KEY (`addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forSeller` (
    `detailId` INTEGER NOT NULL AUTO_INCREMENT,
    `noKtp` CHAR(16) NOT NULL,

    PRIMARY KEY (`detailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etalaseSeller` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,
    `total` INTEGER NOT NULL DEFAULT 0,
    `star` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD FOREIGN KEY (`roleId`) REFERENCES `role`(`roleId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storeAddress` ADD FOREIGN KEY (`detailId`) REFERENCES `forSeller`(`detailId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `etalaseSeller` ADD FOREIGN KEY (`addressId`) REFERENCES `storeAddress`(`addressId`) ON DELETE CASCADE ON UPDATE CASCADE;
