export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-emerald-50">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
