import { prisma } from "@/lib/prisma";

export async function getSnippets() {
  const listOfSnippets = prisma.snippet.findMany();

  return listOfSnippets;
}

export async function getSnippetById(id: number) {
  await new Promise((r) => setTimeout(r, 2000));

  return prisma.snippet.findUnique({
    where: { id: id },
  });
}
