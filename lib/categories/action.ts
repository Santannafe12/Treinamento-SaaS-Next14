"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";
import { redirect } from "next/navigation";

export async function createCategorie(formData: FormData) {
  const name = formData.get("name") as string;

  await prisma.category.create({
    data: {
      name,
    },
  });

  redirect("/admin/products");
}

export async function getCategories() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return categories;
}

export async function getCategorieById(id: string) {
  const categorie = await prisma.category.findUnique({
    where: { id },
  });

  return categorie;
}

export async function updateCategorie(
  id: string | undefined,
  formData: FormData
) {
  const name = formData.get("name") as string;

  await prisma.category.update({
    where: { id },
    data: {
      name,
    },
  });

  redirect("/admin/categories");
}

export async function deleteCategorie(id: string | undefined) {
  await prisma.category.delete({ where: { id } });

  revalidatePath("/admin/products");
}

export async function countAllCategories() {
  const count = await prisma.category.count();

  return count;
}
