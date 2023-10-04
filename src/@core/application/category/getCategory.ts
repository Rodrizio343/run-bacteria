import { ICategory, ICategoryOutput } from '@/@core/domain/entities/category'

export const getCategory = async ({
	postsOutput,
	id,
}: {
	postsOutput: ICategoryOutput
	id: string
}): Promise<ICategory> => {
	try {
		return await postsOutput.getCategory({ id })
	} catch (error: any) {
		throw new Error(error)
	}
}