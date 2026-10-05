export default function AboutSection() {
    return (
        <section id="about" className="border-b border-white/10 px-6 py-32">
            <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                        About
                    </p>

                    <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                        A little
                        <span className="text-white/30"> about me.</span>
                    </h2>
                </div>

                <div className="text-white/50">
                    <p className="text-lg leading-8">
                        Saya Rendra Nur Yuliadi, mahasiswa Informatika Fakultas
                        Teknologi Informasi Universitas Sebelas April.
                    </p>

                    <p className="mt-6 leading-8">
                        Saya cenderung tenang dan lebih suka mengamati keadaan
                        sebelum bertindak. Rasa penasaran terhadap teknologi
                        membuat saya terus mencoba memahami bagaimana sebuah
                        ide dapat berubah menjadi sesuatu yang benar-benar
                        dapat digunakan.
                    </p>

                    <p className="mt-6 leading-8">
                        Saat ini saya banyak mengeksplorasi web development,
                        Artificial Intelligence, RAG, Computer Vision, dan
                        teknologi multimodal.
                    </p>
                </div>
            </div>
        </section>
    );
}