import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  app.get("/api/categories", async (_req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  app.get("/api/articles/featured", async (_req, res) => {
    const articles = await storage.getFeaturedArticles();
    res.json(articles);
  });

  app.get("/api/articles/trending", async (_req, res) => {
    const articles = await storage.getTrendingArticles();
    res.json(articles);
  });

  app.get("/api/categories/:slug/articles", async (req, res) => {
    const category = await storage.getCategoryBySlug(req.params.slug);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const articles = await storage.getArticlesByCategory(category.id);
    res.json(articles);
  });

  app.get("/api/articles/:slug", async (req, res) => {
    const article = await storage.getArticleBySlug(req.params.slug);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  });

  return httpServer;
}