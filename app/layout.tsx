import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
