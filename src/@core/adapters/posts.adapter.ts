import { getImagePath } from '@/utils/getImagePath'
import { getDate } from '@/utils/getDate'
import { getAvatar } from '@/utils/getAvatar'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export const createPostsAdapter = (posts: any) => {
  try {
    const adaptedPosts = posts.map(post => {
      return {
        id: post.id,
        title: post.title,
        brief: post.brief,
        image: post.image?.url ? getImagePath(post.image.url) : '/nature.jpg',
        isActive: post.active,
        date: getDate(post.publishedAt),
        categories: post.categories,
        author: {
          name: post.createdBy ? post.createdBy.firstname + ' ' + post.createdBy.lastname : 'Juli Baciredo',
          avatar: getAvatar(post.createdBy.email)     
        }
      }
    })
    return adaptedPosts
  } catch (error) {
    console.log(error)
  }
}

export const createPostAdapter = async(post: any) => {
  try {
    const processedContent = await remark()
      .use(remarkHtml)
      .process(post.content);
      
    const adaptedPost = {
        id: post.id,
        title: post.title,
        brief: post.brief,
        content: processedContent.toString(),
        image: post.image?.url ? getImagePath(post.image.url) : '/nature.jpg',
        isActive: post.active,
        date: getDate(post.publishedAt),
        categories: post.categories,
        author: {
          name: post.createdBy ? post.createdBy.firstname + ' ' + post.createdBy.lastname : 'Juli Baciredo',
          avatar: getAvatar(post.createdBy.email)     
        }
    }
    return adaptedPost
  } catch (error) {
    console.log(error)
  }
}