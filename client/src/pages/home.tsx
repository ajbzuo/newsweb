import { useQuery } from "@tanstack/react-query";
import { Article } from "@shared/schema";
import { FeaturedArticle } from "@/components/article/FeaturedArticle";
import { ArticleCard } from "@/components/article/ArticleCard";
import { TrendingSidebar } from "@/components/article/TrendingSidebar";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";

export default function Home() {
  const { data: featuredArticles } = useQuery<Article[]>({
    queryKey: ["/api/articles/featured"],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {featuredArticles?.[0] && (
            <FeaturedArticle article={featuredArticles[0]} />
          )}
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {featuredArticles?.slice(1).map((article) => (
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
