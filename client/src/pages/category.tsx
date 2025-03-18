import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Article, Category } from "@shared/schema";
import { ArticleCard } from "@/components/article/ArticleCard";
import { TrendingSidebar } from "@/components/article/TrendingSidebar";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";

export default function CategoryPage() {
  const { slug } = useParams();
  
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });
  
  const category = categories?.find(c => c.slug === slug);
  
  const { data: articles } = useQuery<Article[]>({
    queryKey: [`/api/categories/${slug}/articles`],
    enabled: !!slug,
  });

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {articles?.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          <TrendingSidebar />
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
