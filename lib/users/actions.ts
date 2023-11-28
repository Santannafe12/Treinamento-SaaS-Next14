import { revalidatePath } from "next/cache";
import prisma from "../db";
import { redirect } from "next/navigation";
import { USERS_PER_PAGE } from "../utils";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const contact = formData.get("contact") as string;

  const product = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });

  revalidatePath("/admin/users");
}

export async function fetchFilteredUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * USERS_PER_PAGE;

  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          // Add other fields you want to search here
        ],
      },
      orderBy: { createdAt: "desc" }, // Adjust the ordering based on your needs
      take: USERS_PER_PAGE,
      skip: offset,
    });

    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchUsersPages(query: string) {
  try {
    const count = await prisma.user.count({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
          // Add other fields you want to search here
        ],
      },
    });

    const totalPages = Math.ceil(count / USERS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}

export async function countAllUsers() {
  const count = await prisma.user.count();

  return count;
}
