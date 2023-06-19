interface InputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className='w-full p-4 text-lg text-white transition bg-black border-2 rounded-md outline-none border-neutral-800 focus:border-sky-500 focus:border-2 disabled:opacity-70 disabled:bg-neutral-900 disabled:cursor-not-allowed'
    />
  )
}

export default Input