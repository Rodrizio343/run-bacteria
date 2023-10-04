import { IPost, IPostsOutput } from '@/@core/domain/entities/post'

export const getPosts = async ({
	postsOutput,
}: {
	postsOutput: IPostsOutput
}): Promise<IPost[]> => {
	try {
		return await postsOutput.getPosts()
	} catch (error: any) {
		throw new Error(error)
	}
}