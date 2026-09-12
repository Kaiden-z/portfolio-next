"use client";

type ButtonProps = {
    className?: string
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
};

export default function Button({
    className,
    icon,
    children,
    onClick,
    href,
}: ButtonProps) {

    if (href) {
        return (
            <a
                href={href}
                className={`button button-primary ${className}`}
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
            className={`button button-primary ${className}`}
            onClick={onClick}
        >
            {icon && <span className="icon">{icon}</span>}
            {children}
        </button>
    );
}