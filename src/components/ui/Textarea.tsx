export default function Textarea({
  title,
  dir,
  required = false,
}: {
  title: string;
  dir?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col">
      <span>
        {title}
        {required && <strong className="text-(--secondary-5)">*</strong>}
      </span>
      <textarea
        required={required}
        dir={dir}
        className="outline-0 focus:border-(--primery)! borderStyle transition py-3 px-2 rounded-lg bg-(--background2)"
      ></textarea>
    </label>
  );
}
