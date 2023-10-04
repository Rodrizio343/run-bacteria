import { ICategory } from "@/@core/domain/entities/category";
import { getCategoryById } from "@/@core/infraestructure/categories.service";
import PostsResultList from "@/components/Common/PostsResultList/PostsResultList.component";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  category: ICategory;
}

const CategoryPage = ({ category }: Props) => {
  const { posts } = category;
  return <PostsResultList query={`${category.name}`} posts={posts}/>
};
export default CategoryPage;

export async function getServerSideProps(context) {
  const { id } = context.params as Params;
  const category = await getCategoryById(id);
  return {
    props: {
      category,
    },
  };
}
