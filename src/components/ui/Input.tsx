export default function Input({
  className = "",

  disabled,
  title,
  placeholder = "",
  value,
  onChange = () => {},

  type,
  dir,
  required = false,
}: {
  className?: string;

  disabled?: boolean;
  title: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
    | undefined;

  type?: string;
  dir?: string;
  required?: boolean;
}) {
  return (
    <label className={`flex flex-col w-full `}>
      <span>
        {title}
        {required && <strong className="text-(--secondary-5)">*</strong>}
      </span>
      <input
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        dir={dir}
        className={`focus:border-(--primery)! borderStyle transition py-3 px-2 rounded-lg bg-(--background2) ${className}`}
      />
    </label>
  );
}
