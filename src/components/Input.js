const fixedInputClass =
	"rounded-sm appearance-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
	handleChange,
	value,
	id,
	name,
	type,
	placeholder,
	customClass,
}) {
	return (
		<div className="my-5">
			<input
				onChange={handleChange}
				value={value}
				id={id}
				name={name}
				type={type}
				className={fixedInputClass + customClass}
				placeholder={placeholder}
			/>
		</div>
	);
}
