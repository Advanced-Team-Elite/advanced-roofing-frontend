import BlogContainer from "@/features/blog/BlogContainer";
import CategoryContainer from "@/features/blog/CategoryContainer";

// Esto tipa los parámetros que vienen de la URL
interface PageProps {
    params: {
        category: string;
    };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    return <CategoryContainer category={params.category} />;
}