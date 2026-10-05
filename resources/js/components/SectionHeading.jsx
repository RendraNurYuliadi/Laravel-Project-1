export default function SectionHeading({
    eyebrow,
    title,
    highlight,
    description,
    align = 'left',
}) {
    const alignment =
        align === 'center'
            ? 'mx-auto text-center'
            : 'text-left';

    return (
        <div className={`max-w-3xl ${alignment}`}>
            {eyebrow && (
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    {eyebrow}
                </p>
            )}

            {title && (
                <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                    {title}{' '}
                    {highlight && (
                        <span className="text-white/30">{highlight}</span>
                    )}
                </h2>
            )}

            {description && (
                <p className="mt-6 text-base leading-7 text-white/40">
                    {description}
                </p>
            )}
        </div>
    );
}