export default function ContactSection() {
    return (
        <section id="contact" className="px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-14">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                        Contact
                    </p>

                    <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-end">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                                Let&apos;s build
                                <span className="text-white/30">
                                    {' '}
                                    something.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg leading-7 text-white/40">
                                Punya project, ide, atau sekadar ingin
                                berdiskusi tentang teknologi? Feel free to
                                reach out.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 md:items-end">
                            <a
                                href="mailto:rendra.education@gmail.com"
                                className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/80"
                            >
                                rendra.education@gmail.com
                            </a>

                            <a
                                href="https://github.com/RendraNurYuliadi"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-white/40 transition hover:text-white"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}