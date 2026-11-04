import { PortfolioApp } from "@/components/portfolio-app";
export default async function RoutedPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <PortfolioApp route={slug.join("/")} />;
}
