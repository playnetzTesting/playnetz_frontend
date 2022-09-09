export default function CustomInput({
  className,
  placeholder,
  type,
  name,
  checked,
  onChange,
}) {
  return (
    <input
      className={`${className} px-4 py-[0.65rem] outline-none border-[1px] focus:border-2 text-white border-[#33A4D8] placeholder-gray-500 bg-[#0A1D27E5] bg-blend-color-burn rounded-l-md w-full`}
      placeholder={placeholder}
      type={type}
      autoComplete="false"
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
}
