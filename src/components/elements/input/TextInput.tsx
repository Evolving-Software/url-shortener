import { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  onSubmit?: (value: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string;
}





const Input: React.FC<InputProps> = ({ placeholder, className, label, name, onBlur, onFocus, onChange, ...props }) => {
  const [value, setValue] = useState<string | null>(null);;

  return (
    <div className="border border-gray-300 relative rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor={name} className="block text-xs font-medium text-gray-900">
        {label}
      </label>
      <input
        type="url"
        name={name}
        id={name}
        // On input change check if the value is a valid URL with the isValidURL function clear the error on the input
        onChange={onChange}
        value={value}
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder={placeholder}
      />
      {props.children}
    </div>
  )
}

export default Input;