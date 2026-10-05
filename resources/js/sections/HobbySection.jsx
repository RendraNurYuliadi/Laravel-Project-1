export default function HobbySection() {
    const hobbies = [
        ['Gaming', 'Minecraft · Outlast · Mobile Legends'],
        ['Anime', 'Anime, manga, dan berbagai cerita dengan world-building menarik.'],
        ['Fitness', 'Workout dan menjaga tubuh tetap aktif.'],
        ['Style', 'Gothic, cyberpunk, dan fashion dengan karakter yang kuat.'],
    ];

    return (
        <section id="hobby" className="border-b border-white/10 px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    Hobby
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    Beyond
                    <span className="text-white/30"> the code.</span>
                </h2>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {hobbies.map(([title, description]) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-white/10 p-6"
                        >
                            <h3 className="font-semibold">{title}</h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}