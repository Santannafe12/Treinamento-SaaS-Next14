"use server";

import { z } from "zod";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ITEMS_PER_PAGE } from "../utils";

export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image") as string;
  const featured = formData.get("isFeatured") === "Sim";
  const categoryIds = formData.getAll("categories") as string[];

  await prisma.product.create({
    data: {
      title,
      content,
      price,
      image,
      featured,
      categories: {
        connect: categoryIds.map((id) => ({ id })),
      },
    },
  });

  // revalidatePath("/admin/products/create");
  redirect("/admin/products/create");
}

export async function GET() {
  const products = await prisma.product.findMany({});

  return products;
}

export async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      categories: true,
    },
  });

  return product;
}

export async function updateProduct(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image") as string;
  const featured = formData.get("isFeatured") === "Sim";
  const categoryIds = formData.getAll("categories") as string[];

  await prisma.product.update({
    where: { id },
    data: {
      title,
      content,
      price,
      image,
      featured,
      categories: {
        set: categoryIds.map((id) => ({ id })),
      },
    },
  });

  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });

  revalidatePath("/admin/products");
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

    const count = await prisma.product.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          // Add other fields you want to search here
        ],
      },
    });

    return { products, count };
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
