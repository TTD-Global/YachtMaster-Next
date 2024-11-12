import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Master",
  description: "Tour Master Happiness around you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="min-w-[1280px] w-full flex-col justify-center items-center inline-flex bg-white">
        <div className="w-[1280px] px-8 justify-between items-center inline-flex">
          <div className="w-full min1216:w-[1216px] my-auto mx-auto px-0 pt-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
