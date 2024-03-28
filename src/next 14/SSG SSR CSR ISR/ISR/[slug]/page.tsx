//static params + server sides dinamic
export async function generateStaticParams() {
  const posts = await fetch(
    "https://api.github.com/users/JhonItalo/repos"
  ).then((res) => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}
export default async function IncrementalSiteGeneration({ params }: PageProps) {
  const teste = await fetch("https://api.github.com/users/JhonItalo/repos");
  return (
    <div>
      Isg{params.slug}
      {JSON.stringify(teste)}
    </div>
  );
}
