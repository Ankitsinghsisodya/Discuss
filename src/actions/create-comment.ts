"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { Comment } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCommentSchema = z.object({
  content: z.string().min(3),
});

type CreateCommentState = {
  errors: {
    content?: string[];
    formError?: string[];
  };
};
export const createComment = async ({postId, parentId}: {postId:string, parentId?:string},
  prevState: CreateCommentState,
  formData: FormData
): Promise<CreateCommentState> => {
  const result = createCommentSchema.safeParse({
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: {
        formError: ["You must be signed in to create a comment"],
      },
    };
  }
  let comment: Comment;
  try {
    comment = await prisma.comment.create({
      data: {
        content: result.data.content,
        userId: session.user.id,
        postId: postId,
        parentId: parentId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formError: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["An error occurred"],
        },
      };
    }
  }

  const topic = await prisma.topic.findFirst({
    where:{
        posts:{
            some:{
                id:postId
            }
        }
    }
  })

  if(!topic){
        return{
            errors:{
                formError: ["Post not found"]
            }
        }
    }
  revalidatePath(`/topics/${topic?.slug}/posts/${postId}`);

  return {
    errors:{},
  }
};
