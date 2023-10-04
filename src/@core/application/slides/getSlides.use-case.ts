import { ISlide, ISlidesOutput } from '@/@core/domain/entities/slide'

export const getSlides = async ({
	slidesOutput,
}: {
	slidesOutput: ISlidesOutput
}): Promise<ISlide[]> => {
	try {
		return await slidesOutput.getSlides()
	} catch (error: any) {
		throw new Error(error)
	}
}
