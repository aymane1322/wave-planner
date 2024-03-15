-- CreateTable
CREATE TABLE `user` (
    `name` VARCHAR(100) NULL,
    `email` VARCHAR(100) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `user_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

