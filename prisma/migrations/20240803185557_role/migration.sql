-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'EMPLOYEE', 'FINANCIAL', 'SALESPERSON', 'TECHNICIAN', 'SUPERVISOR', 'SUPERADMIN');

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "productCategory" TEXT;
