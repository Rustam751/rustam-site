import SectionTitle from "../components/SectionTitle";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="py-10">
      <SectionTitle title="Experience" />
      <div className="grid gap-6">
        {experience.map((job) => (
          <div
            key={job.role + job.company}
            className="rounded-2xl border p-5 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="opacity-80">· </span>
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300 transition"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-gray-100">{job.company}</span>
                  )}
                </h3>
                <p className="text-sm text-gray-400">{job.location}</p>
              </div>

              <span className="mt-2 md:mt-0 text-sm opacity-70">
                {job.period}
              </span>
            </div>

            <ul className="mt-3 list-disc pl-5 text-sm md:text-base space-y-1">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
