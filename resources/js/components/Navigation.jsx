'use client';

import { useState } from 'react';

const links = [
    ['Home', 'home'],
    ['Overview', 'overview'],
    ['About', 'about'],
    ['Education', 'education'],
    ['Skill', 'skill'],
    ['Project', 'project'],
    ['Hobby', 'hobby'],
    ['FAQ', 'faq'],
    ['Contact', 'contact'],
];

export default function Navigation() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <a
                        href="/home#home"
                        onClick={handleClick}
                        className="text-sm font-bold tracking-[0.2em]"
                    >
                        RENDRA
                    </a>

                    <div className="hidden items-center gap-6 md:flex">
                        {links.map(([label, id]) => (
                            <a
                                key={id}
                                href={`/home#${id}`}
                                className="text-xs text-white/40 transition hover:text-white"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="text-sm text-white/60 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {open ? 'Close' : 'Menu'}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-white/10 px-6 py-5 md:hidden">
                        <div className="flex flex-col gap-4">
                            {links.map(([label, id]) => (
                                <a
                                    key={id}
                                    href={`/home#${id}`}
                                    onClick={handleClick}
                                    className="text-sm text-white/50 transition hover:text-white"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}