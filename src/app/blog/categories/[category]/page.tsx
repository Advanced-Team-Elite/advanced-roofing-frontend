import BlogContainer from "@/features/blog/BlogContainer";
import CategoryContainer from "@/features/blog/CategoryContainer";

export default function CategoryPage({ params }: { params: { category: string } }) {
    return <CategoryContainer category={params.category} />;
}