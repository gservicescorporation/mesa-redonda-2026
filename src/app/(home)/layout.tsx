import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-plus-jakarta-sans bg-linear-to-b from-primary to-accent">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
