export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    ...props
}) {
    const base =
        'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition';

    const variants = {
        primary: 'bg-white text-black hover:bg-white/80',
        secondary:
            'border border-white/10 text-white/70 hover:border-white/30 hover:text-white',
        ghost: 'text-white/50 hover:text-white',
    };

    const styles = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
}