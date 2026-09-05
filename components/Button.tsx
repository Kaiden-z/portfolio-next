"use client";

type ButtonProps = {
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: "primary" | "secondary";
};

export default function Button({
    icon,
    children,
    onClick,
    href,
    variant = "primary",
}: ButtonProps) {
    const className = `button button-${variant}`;

    if (href) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon && <span className="icon">{icon}</span>}
                <span>{children}</span>
            </a>
        );
    }
    
    return (
        <button
            className={`button button-${variant}`}
            onClick={onClick}
        >
            {icon && <span className="icon">{icon}</span>}
            {children}
        </button>
    );
}