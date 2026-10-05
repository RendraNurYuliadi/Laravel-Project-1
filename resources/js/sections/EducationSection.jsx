export default function EducationSection() {
    const education = [
        {
            period: 'Current',
            school: 'Universitas Sebelas April',
            detail: 'Informatika · Fakultas Teknologi Informasi · Semester 5',
        },
        {
            period: 'Previous',
            school: 'SMK Negeri 1 Sumedang',
            detail: 'Pendidikan Menengah Kejuruan',
        },
        {
            period: 'Previous',
            school: 'SMP Negeri 3 Sumedang',
            detail: 'Pendidikan Menengah Pertama',
        },
        {
            period: 'Previous',
            school: 'SDN Sukaraja 2',
            detail: 'Pendidikan Dasar',
        },
    ];

    return (
        <section
            id="education"
            className="border-b border-white/10 bg-white/[0.02] px-6 py-32"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                    Education
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                    Academic
                    <span className="text-white/30"> journey.</span>
                </h2>

                <div className="mt-16 border-l border-white/10 pl-8">
                    {education.map((item) => (
                        <div
                            key={item.school}
                            className="relative pb-12 last:pb-0"
                        >
                            <span className="absolute -left-[37px] top-1 size-2 rounded-full bg-white" />

                            <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                                {item.period}
                            </p>

                            <h3 className="mt-3 text-xl font-semibold">
                                {item.school}
                            </h3>

                            <p className="mt-2 text-sm text-white/40">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}