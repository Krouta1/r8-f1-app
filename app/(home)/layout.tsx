import HomeHeader from "@/components/home/HomeHeader";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HomeHeader />
      <div className="container mx-auto h-full pt-8">{children}</div>
    </div>
  );
}
