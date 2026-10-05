'use client';

import { useState } from 'react';

export default function Carousel({ items = [] }) {
    const [current, setCurrent] = useState(0);

    if (!items.length) return null;

    const next = () => {
        setCurrent((prev) => (prev + 1) % items.length);
    };

    const previous = () => {
        setCurrent((prev) => (prev - 1 + items.length) % items.length);
    };

    const item = items[current];

    return (
        <div className="w-full">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                {item.content ?? item}
            </div>

            {items.length > 1 && (
                <div className="mt-5 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={previous}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
                    >
                        Previous
                    </button>

                    <span className="text-xs text-white/30">
                        {current + 1} / {items.length}
                    </span>

                    <button
                        type="button"
                        onClick={next}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}