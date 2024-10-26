interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-neutral-900">{title}</h1>
      {description && (
        <p className="mt-2 text-neutral-600">{description}</p>
      )}
    </div>
  );
}