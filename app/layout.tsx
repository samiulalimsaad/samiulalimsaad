import AOSInit from "../components/AOSInit";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <Navbar />
                <main className="w-full overflow-y-hidden">
                    <AOSInit>{children}</AOSInit>
                </main>
            </body>
        </html>
    );
}
