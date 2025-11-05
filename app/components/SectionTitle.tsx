// ------------ app/components/SectionTitle.tsx ------------
export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">{subtitle}</p>}
        </div>
    );
}