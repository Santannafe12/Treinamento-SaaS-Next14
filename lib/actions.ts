"use server";

import { z } from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const InvoiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  //   price: z.number(),
});

const CreateProduct = InvoiceSchema.omit({ id: true });

export async function createProduct(formData: FormData) {
  const { title, content } = CreateProduct.parse({
    title: formData.get("title"),
    content: formData.get("content"),
    // price: formData.get("price"),
  });

  await prisma.product.create({
    data: {
      title,
      content,
      //   price
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function updateProduct(id: string, formData: FormData) {
  const { title, content } = CreateProduct.parse({
    title: formData.get("title"),
    content: formData.get("content"),
    // price: formData.get("price"),
  });

  await prisma.product.update({
    where: { id },
    data: {
      title,
      content,
      //   price
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}

export async function getFeaturedProducts() {
  const product = await prisma.product.findMany({
    where: { featured: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return product;
}

export async function getGeneralProducts() {
    const product = await prisma.product.findMany({
      where: { featured: false },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
  
    return product;
  }
