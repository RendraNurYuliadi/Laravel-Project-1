export default function FaqSection() {
    const faq = [
        {
            question: 'Siapa Rendra?',
            answer:
                'Rendra adalah mahasiswa Informatika yang tertarik pada web development, Artificial Intelligence, dan teknologi baru.',
        },
        {
            question: 'Apa yang sedang dipelajari?',
            answer:
                'Saat ini fokus mengeksplorasi Next.js, TypeScript, Node.js, database, GenAI, RAG, AI Agent, dan Computer Vision.',
        },
        {
            question: 'Apa tujuan dari portfolio ini?',
            answer:
                'Sebagai ruang untuk memperkenalkan diri, mendokumentasikan project, dan menunjukkan perjalanan belajar di bidang teknologi.',
        },
        {
            question: 'Apakah terbuka untuk kolaborasi?',
            answer:
                'Ya. Terbuka untuk berdiskusi mengenai project, kolaborasi, maupun kesempatan belajar bersama.',
        },
    ];

    return (
        <section
            id="faq"
            className="border-b border-white/10 bg-white/[0.02] px-6 py-32"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    FAQ
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    Frequently
                    <span className="text-white/30"> asked.</span>
                </h2>

                <div className="mt-16 max-w-3xl space-y-3">
                    {faq.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-2xl border border-white/10 p-6"
                        >
                            <summary className="cursor-pointer list-none font-medium">
                                <div className="flex items-center justify-between gap-5">
                                    <span>{item.question}</span>

                                    <span className="text-white/30 transition group-open:rotate-45">
                                        +
                                    </span>
                                </div>
                            </summary>

                            <p className="mt-5 text-sm leading-7 text-white/40">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}