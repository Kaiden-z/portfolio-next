import "./globals.css";
import "plyr-react/plyr.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html>
            <head>
                <title>Kaiden Zapanta</title>
                <meta
                    name="description"
                    content="I'm Kaiden, a software engineer and gameplay programmer. Welcome to my portfolio!"
                />
            </head>

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