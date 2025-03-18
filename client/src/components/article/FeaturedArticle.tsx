import { Article } from "@shared/schema";
import { format } from "date-fns";

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="aspect-[4/3] relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
        <p className="text-xl text-muted-foreground">{article.excerpt}</p>
        <div className="text-sm text-muted-foreground">
          {format(new Date(article.publishedAt), "MMMM d, yyyy")}
        </div>
      </div>
    </div>
  );
}
