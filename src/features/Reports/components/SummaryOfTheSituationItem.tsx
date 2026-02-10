export default function SummaryOfTheSituationItem({
  amount,
  title,
}: {
  amount: number;
  title: string;
}) {
  return (
    <div className="flex shadow flex-col items-center gap-2 p-4 bg-gray-100 rounded-md borderStyle hover:border-(--primery)! transition hover:shadow-2xl hover:scale-105">
      <span className="text-3xl text-(--primery) font-bold">{amount.toLocaleString()}</span>
      <span className="text-sm">{title}</span>
    </div>
  );
}
