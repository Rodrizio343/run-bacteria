import { IPost } from "@/@core/domain/entities/post"
import { getMorePosts } from "@/@core/infraestructure/posts.service"
import { useState } from "react"
import PostsListView from "./PostsList.view"

export const PostsList = ({posts, pagination}) => {
  
  const totalPosts = pagination?.total
  const [showedPosts, setShowedPosts] = useState<IPost[]>(posts)
  const [offset, setOffset] = useState(posts.length)
  const [loading, setLoading] = useState(false)

  const handleLoadMorePosts = async(offset) => {
    setLoading(true)
    const posts = await getMorePosts(offset)
    setShowedPosts([...showedPosts, ...posts])
    setOffset(offset + posts.length)
    setLoading(false)
  }

  return (
    <PostsListView 
      showedPosts={showedPosts}
      handleLoadMorePosts={handleLoadMorePosts}
      offset={offset}
      loading={loading}
      disableLoadMoreButton={totalPosts == offset ? true : false}
    />
  )
}
export default PostsList