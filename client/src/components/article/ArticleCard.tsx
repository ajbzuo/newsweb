import { Article } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "wouter";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact";
}

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="block hover:opacity-80 transition-opacity">
        <Card className="overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader className="space-y-2">
            <CardTitle className={variant === "compact" ? "text-lg" : "text-2xl"}>
              {article.title}
            </CardTitle>
            {variant === "default" && (
              <p className="text-muted-foreground">{article.excerpt}</p>
            )}
            <div className="text-sm text-muted-foreground">
              {format(new Date(article.publishedAt), "MMMM d, yyyy")}
            </div>
          </CardHeader>
        </Card>
      </a>
    </Link>
  );
}