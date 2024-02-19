-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "coment" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;
