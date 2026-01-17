import { prisma } from "@/lib/prisma";

export async function getSnippets() {
  const listOfSnippets = prisma.snippet.findMany();

  return listOfSnippets;
}
