export const createCategoryAdapter = async(category: any) => {
  const { data } = category
  try {
    const adaptedCategory = {
        id: data.id,
        name: data.name,
        posts: data.posts
    }
    return adaptedCategory
  } catch (error) {
    console.log(error)
  }
}