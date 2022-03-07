import {useState} from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onCancel: () => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string;
}





const Input = ({ placeholder, className, label, name, onBlur, onFocus, ...props }: InputProps) => {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);;
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      let errorMessage = e as Error;
      setError(errorMessage.message);
      // clear the error message after 2 seconds
      setTimeout(() => setError(null), 2000);
      // clear error if the user starts typing again
      setValue(null);
      return false;
    }
  };


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
          onChange={(e) => {
            setValue(e.target.value);
            isValidURL(value);
          }}
          value={value}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {error && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
        </div>
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      </div>
    )
  }

  export default Input;