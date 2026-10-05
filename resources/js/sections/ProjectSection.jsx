export default function ProjectSection() {
    const projects = [
        {
            number: '01',
            title: 'AI Agent',
            description:
                'Eksplorasi multimodal AI menggunakan voice, computer vision, face recognition, dan motion recognition.',
            stack: 'Python · OpenCV · MediaPipe · AI',
        },
        {
            number: '02',
            title: 'AI Chatbot',
            description:
                'Platform chatbot GenAI dengan routing, Knowledge Base, RAG, dan multi-user management.',
            stack: 'Next.js · MongoDB · GenAI · RAG',
        },
        {
            number: '03',
            title: 'Personal Portfolio',
            description:
                'Website personal untuk memperkenalkan diri, pengalaman, project, dan perjalanan belajar.',
            stack: 'React · Laravel · Tailwind CSS',
        },
    ];

    return (
        <section
            id="project"
            className="border-b border-white/10 bg-white/[0.02] px-6 py-32"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    Projects
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    Things I&apos;ve
                    <span className="text-white/30"> built.</span>
                </h2>

                <div className="mt-16 space-y-4">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="rounded-2xl border border-white/10 p-7 transition hover:border-white/20"
                        >
                            <div className="flex gap-6">
                                <span className="text-sm text-white/20">
                                    {project.number}
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
                                        {project.description}
                                    </p>

                                    <p className="mt-5 text-xs text-white/20">
                                        {project.stack}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}