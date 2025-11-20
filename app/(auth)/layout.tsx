import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="auth-layout max-w-[1560px] mx-auto">
        <section className="auth-left-section scrollbar-hide-default">
          <Link href="/" className="auth-logo">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="pb-6 lg:pb-8 flex-1">{children}</div>
        </section>
        <section className="auth-right-section">
          <div className="z-10 relative lg:mt-4 lg:mb-16">
            <blockquote className="auth-blockquote">
              Signalist turned my watchlist into a winning list. The alerts are
              spot-on, and I feel more confident making moves in the market.
            </blockquote>
            <div className="flex item-center justify-between">
              <div>
                <cite className="auth-quote-author">— Jamie L.</cite>
                <p className="max-md:text-xs text-gray-500">Day Trader</p>
              </div>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    src="/icons/star.svg"
                    alt="star"
                    width={20}
                    height={20}
                    key={star}
                    className="inline-block max-md:w-4 max-md:h-4 w-5 h-5"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/images/dashboard.png"
              alt="dashboard preview"
              className="auth-dashboard-preview absolute top-0"
              width={1440}
              height={1150}
            />
          </div>
        </section>
      </main>
    </>
  );
}
