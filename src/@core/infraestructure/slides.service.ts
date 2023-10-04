import strapi from '@/lib/strapi';
import { ISlide } from '../domain/entities/slide';
import { createSlidesAdapter } from '../adapters/slides.adapter';
import { createPostAdapter } from '../adapters/posts.adapter';

export const getSlides = async(): Promise<ISlide[]> => {
  try {
    const slides = await strapi.find("slides", {populate: ['image', 'category', 'post']})
    const adpatedSlides = await createSlidesAdapter(slides)
    return adpatedSlides
  } catch (error) {
    throw (error)
  }
} 