export default function Input({
  title,
  placeholder = "",

  type,
  dir,
  required = false,
}: {
  title: string;
  placeholder?: string;

  type?: string;
  dir?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col w-full">
      <span>
        {title}
        {required && <strong className="text-(--secondary-5)">*</strong>}
      </span>
      <input
        placeholder={placeholder}
        required={required}
        type={type}
        dir={dir}
        className="focus:border-(--primery)! borderStyle transition py-3 px-2 rounded-lg bg-(--background2)"
      />
    </label>
  );
}
