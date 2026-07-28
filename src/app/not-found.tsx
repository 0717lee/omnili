import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="meta-label text-accent-ink">Page Not Found</p>
        <h1 className="mt-6 font-serif text-7xl font-semibold leading-none tracking-tight text-foreground md:text-9xl">
          404
        </h1>
        <p className="mt-8 max-w-md font-serif text-lg text-muted-foreground">
          页面走丢了——它或许从未存在，或许已被撤下刊面。
        </p>
        <div className="mt-12">
          <Link href="/" className="link-ink meta-label text-foreground">
            回到首页 →
          </Link>
        </div>
      </div>
    </section>
  );
}
