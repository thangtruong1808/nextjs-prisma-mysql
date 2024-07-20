import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: "asc" },
      include: { posts: true, profile: true },
    });

    return users;
    //   return NextResponse.json(users);
  } catch (error) {
    // Handle any potential errors (e.g., log them)
    console.error("Error fetching users:", error);
    // You might want to return an error response here
    throw new Error("Failed to fetch users");
  }
}

export async function getPosts() {
  const posts = await prisma.post.findMany({ orderBy: { id: "asc" } });

  // find fields in User and Profile Model
  // prisma.user.findMany({
  //   include:{
  //     profile: true
  //   }
  // })
  // return {id, name, email, profile:{id, bio}}
  return posts;
  //   return NextResponse.json(users);
}
