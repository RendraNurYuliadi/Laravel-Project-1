export default function OverviewSection() {
    const items = [
        {
            number: '01',
            title: 'Web Development',
            description:
                'Membangun dan mengeksplorasi aplikasi web menggunakan teknologi modern.',
        },
        {
            number: '02',
            title: 'Artificial Intelligence',
            description:
                'Mengeksplorasi GenAI, RAG, AI Agent, Computer Vision, dan multimodal AI.',
        },
        {
            number: '03',
            title: 'Continuous Learning',
            description:
                'Terus belajar melalui project, eksperimen, organisasi, dan pengalaman langsung.',
        },
    ];

    return (
        <section
            id="overview"
            className="border-b border-white/10 bg-white/[0.02] px-6 py-32"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    Overview
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    What I&apos;m
                    <span className="text-white/30"> into.</span>
                </h2>

                <div className="mt-16 grid gap-4 md:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.number}
                            className="rounded-2xl border border-white/10 p-7"
                        >
                            <span className="text-sm text-white/20">
                                {item.number}
                            </span>

                            <h3 className="mt-10 text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}