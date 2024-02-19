/*
  Warnings:

  - You are about to drop the column `boardId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Board` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_boardId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "boardId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Board";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
