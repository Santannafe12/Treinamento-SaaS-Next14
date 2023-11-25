"use server";

import { z } from "zod";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ITEMS_PER_PAGE } from "../utils";

const InvoiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  //   price: z.number(),
});

const CreateProduct = InvoiceSchema.omit({ id: true });

// export async function createProduct(formData: FormData) {
//   const title = formData.get("title") as string;
//   const content = formData.get("content") as string;
//   const price = formData.get("price") as string;

//   const product = await prisma.product.create({
//     data: {
//       title,
//       content,
//       price: 0, // Add a placeholder value for the price property
//     },
//   });

//   revalidatePath("/admin/products");
//   redirect("/admin/products");
// }

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

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  return product;
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });

  revalidatePath("/admin/products");
}

export async function GetProducts() {
  const products = await prisma.product.findMany({
  });

  return products;
}

export async function GET() {
  const product = await prisma.product.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return product;
}

export async function filterProductQuery(query: string) {
  const product = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return product;
}

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          // Add other fields you want to search here
        ],
      },
      orderBy: { createdAt: "desc" }, // Adjust the ordering based on your needs
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductPages(query: string) {
  try {
    const count = await prisma.product.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          // Add other fields you want to search here
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of products.");
  }
}

export async function countAllProducts() {
  const count = await prisma.product.count();

  return count;
}
