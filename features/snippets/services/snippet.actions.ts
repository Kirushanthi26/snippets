"use server"; //this needs to be a server action

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createSnippet(formData: FormData) {
  // check the user's input and make sure they're valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  //create a new record in the database
  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });

  console.log(snippet);

  //redirect the user back to the root route
  redirect("/");
}

export async function updateSnippet(code: string, id: number) {
  await prisma.snippet.update({
    where: {
      id: id,
    },
    data: {
      code: code,
    },
  });

  redirect(`/snippets/${id}`);
}
