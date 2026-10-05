export default function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-screen border-b border-white/10 px-6 py-32"
        >
            <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center">
                <div className="max-w-4xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
                        Informatics Student · Web Developer · GenAI Enthusiast
                    </p>

                    <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                        Hello, I&apos;m Rendra.
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
                        Mahasiswa Informatika yang senang mengeksplorasi
                        teknologi, membangun aplikasi web, dan memahami
                        bagaimana Artificial Intelligence dapat digunakan untuk
                        menyelesaikan masalah.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="#project"
                            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
                        >
                            Explore Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}