import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen text-gray-400">
        <div className="">{children}</div>
      </main>
    </>
  );
}
