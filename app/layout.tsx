import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html>
            <body className="site">
                <Header />

                <main className="site-content">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}