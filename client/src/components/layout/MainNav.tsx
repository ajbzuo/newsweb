import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@shared/schema";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

export function MainNav() {
  const [location] = useLocation();
  const { data: categories } = useQuery<Category[]>({ 
    queryKey: ["/api/categories"]
  });

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold tracking-tighter">
              {SITE_NAME}
            </a>
          </Link>

          <nav className="flex items-center space-x-6">
            {categories?.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === `/category/${category.slug}`
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {category.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
