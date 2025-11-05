// ------------ app/education/page.tsx ------------
import SectionTitle from "../components/SectionTitle";
import { education } from "@/lib/data";


export default function EducationPage() {
    return (
        <div className="py-10">
            <SectionTitle title="Education" />
            <div className="grid gap-6">
                {education.map((e) => (
                    <div key={e.school} className="rounded-2xl border p-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{e.degree}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{e.school} · {e.location}</p>
                            </div>
                            <span className="mt-2 md:mt-0 text-sm opacity-70">{e.period}</span>
                        </div>
                        <ul className="mt-3 list-disc pl-5 text-sm md:text-base space-y-1">
                            {e.details.map((d) => (
                                <li key={d}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}