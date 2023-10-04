import { IPost, IPostsOutput } from '@/@core/domain/entities/post'

export const getPost = async ({
	postsOutput,
	id,
}: {
	postsOutput: IPostsOutput
	id: string
}): Promise<IPost> => {
	try {
		return await postsOutput.getPost({ id })
	} catch (error: any) {
		throw new Error(error)
	}
}