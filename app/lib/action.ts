"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const FormSchema = z.object({
  id: z
    .string({
      invalid_type_error: "ID must be a number",
    })
    .min(1),
  name: z
    .string({
      // required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(5, { message: "Must be 5 or more characters long" }),
  email: z
    .string({
      invalid_type_error: "Please enter your email.",
    })
    .email({ message: "Invalid email address" }),
  title: z
    .string({
      invalid_type_error: "Please enter title",
    })
    .min(5, { message: "Title be 5 or more characters long" }),
  content: z
    .string({
      invalid_type_error: "Please enter content.",
    })
    .min(5, { message: "Content be 5 or more characters long" }),
  bio: z
    .string({
      invalid_type_error: "Please enter bio.",
    })
    .min(5, { message: "Bio be 5 or more characters long" }),
  createdAt: z.string({
    invalid_type_error: "Please enter content.",
  }),
});

const CreateUser = FormSchema.omit({ id: true, createdAt: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    title?: string[];
    content?: string[];
    bio?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    content: formData.get("content"),
    bio: formData.get("bio"),
  });
  // console.log(validatedFields.data);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { name, email, title, content, bio } = validatedFields.data;

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: {
            title,
            content,
          },
        },
        profile: {
          create: {
            bio,
          },
        },
      },
      include: {
        posts: true,
        profile: true,
      },
    });
    console.log("User created successfully");
  } catch (error) {
    // console.log(Prisma.PrismaClientKnownRequestError);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/user");
  redirect("/user");
}
