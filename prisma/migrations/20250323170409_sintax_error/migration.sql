/*
  Warnings:

  - You are about to drop the column `menucategoryId` on the `Products` table. All the data in the column will be lost.
  - Added the required column `menuCategoryId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_menucategoryId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "menucategoryId",
ADD COLUMN     "menuCategoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
