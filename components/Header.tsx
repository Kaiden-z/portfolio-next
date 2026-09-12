import Link from "next/link";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import DownloadIcon from "@/icons/DownloadIcon";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="site-logo">
                KAIDENZAPANTA<span className="site-logo-ender">.DEV</span>
            </Link>

            <Navbar />

            <Button
                icon={<DownloadIcon />}
                href="/KaidenZapantaResume2026.pdf"
            >
                Resume / CV
            </Button>
        </header>
    );
}