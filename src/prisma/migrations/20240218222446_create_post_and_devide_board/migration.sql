/*
  Warnings:

  - You are about to drop the column `authorId` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `boardId` on the `coment` table. All the data in the column will be lost.
  - You are about to drop the `LikedBoard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `postId` to the `coment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_authorId_fkey";

-- DropForeignKey
ALTER TABLE "LikedBoard" DROP CONSTRAINT "LikedBoard_boardId_fkey";

-- DropForeignKey
ALTER TABLE "LikedBoard" DROP CONSTRAINT "LikedBoard_userId_fkey";

-- DropForeignKey
ALTER TABLE "coment" DROP CONSTRAINT "coment_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "created_at",
DROP COLUMN "title",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "coment" DROP COLUMN "boardId",
ADD COLUMN     "postId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "LikedBoard";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikedPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedPost" ADD CONSTRAINT "LikedPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedPost" ADD CONSTRAINT "LikedPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coment" ADD CONSTRAINT "coment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
