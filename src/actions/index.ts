"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });
    redirect(`/snippet/${id}`);
}

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: { id }
    });
    revalidatePath("/");
    redirect("/");
}

export async function createSnippet(prevState: { message: string }, formData: FormData) {
    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 3) {
            return { message: "Title is required and must be longer" }
        }

        if (typeof code !== "string" || code.length < 5) {
            return { message: "Code is required and must be longer" }
        }

        await prisma.snippet.create({
            data: {
                title,
                code
            }
        });
        revalidatePath("/");
        // throw new Error("Oops something went wrong");
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message }
        }
        else {
            return { message: "Some internal server error" }
        }
    }
    redirect("/");
}