import { getImagePath } from '@/utils/getImagePath'


export const createSlidesAdapter = (sliders: any) => {
  try {
    const adpatedSlides = sliders.data.map(slide => {
      return {
        title: slide.title,
        brief: slide.brief,
        image: getImagePath(slide.image.url),
        isActive: slide.isActive,        
        category: slide.category.name,
        post: {
          id: slide.post.id
        }
      }
    })
    return adpatedSlides
  } catch (error) {
    console.log(error)
  }
}