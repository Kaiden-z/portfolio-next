import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import DownloadIcon from "@/icons/DownloadIcon";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b">
            <h1>Kaiden Zapanta</h1>
            <Navbar />
            <Button
                icon={<DownloadIcon />}
                href="/cv.pdf"
                variant="secondary"
            >
                Resume / CV
            </Button>
        </header>
    );
}