import "../src/scss/style.scss";
import Header from "../src/js/components/Header/Header";
import Footer from "../src/js/components/Footer/Footer";

export const metadata = {
    title: "Webpack React Gaius Amogus",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body>
                <Header />
                <main className="main-content">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
