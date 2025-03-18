import { useQuery } from "@tanstack/react-query";
import { Article } from "@shared/schema";
import { ArticleCard } from "./ArticleCard";

export function TrendingSidebar() {
  const { data: trendingArticles } = useQuery<Article[]>({
    queryKey: ["/api/articles/trending"],
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Trending</h2>
      <div className="space-y-4">
        {trendingArticles?.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant="compact"
          />
        ))}
      </div>
    </div>
  );
}
