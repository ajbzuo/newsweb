import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Article } from "@shared/schema";
import { format } from "date-fns";
import { TrendingSidebar } from "@/components/article/TrendingSidebar";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";

export default function ArticlePage() {
  const { slug } = useParams();
  
  const { data: article } = useQuery<Article>({
    queryKey: [`/api/articles/${slug}`],
    enabled: !!slug,
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* <!-- ZEPHR_FEATURE article --> */}
        <article className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-sm text-muted-foreground mb-6">
            {format(new Date(article.publishedAt), "MMMM d, yyyy")}
          </div>
          
          <div className="aspect-video relative mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
        {/* <!-- ZEPHR_FEATURE_END article --> */}
        
        <div className="space-y-8">
          <TrendingSidebar />
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
