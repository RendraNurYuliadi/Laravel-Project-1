export default function SkillSection() {
    const skills = [
        {
            title: 'Frontend',
            items: 'React · Next.js · TypeScript · Tailwind CSS',
        },
        {
            title: 'Backend',
            items: 'Node.js · Laravel · REST API',
        },
        {
            title: 'Database',
            items: 'PostgreSQL · Supabase · MongoDB · MySQL',
        },
        {
            title: 'AI',
            items: 'GenAI · RAG · AI Agent · Computer Vision',
        },
    ];

    return (
        <section id="skill" className="border-b border-white/10 px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    Skills
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    Things I
                    <span className="text-white/30"> work with.</span>
                </h2>

                <div className="mt-16 grid gap-4 sm:grid-cols-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.title}
                            className="rounded-2xl border border-white/10 p-7"
                        >
                            <h3 className="text-lg font-semibold">
                                {skill.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                {skill.items}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}