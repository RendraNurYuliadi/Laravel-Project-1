const links = [
    ['GitHub', 'https://github.com/RendraNurYuliadi'],
    ['Instagram', 'https://instagram.com/rendra_nuryuliadi'],
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold">RENDRA</p>
                    <p className="mt-1 text-xs text-white/30">
                        Web Developer & GenAI Enthusiast
                    </p>
                </div>

                <div className="flex gap-5">
                    {links.map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-white/30 transition hover:text-white"
                        >
                            {label} ↗
                        </a>
                    ))}
                </div>

                <p className="text-xs text-white/20">
                    © {new Date().getFullYear()} Rendra NY
                </p>
            </div>
        </footer>
    );
}