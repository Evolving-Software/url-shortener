import { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import TextInput from '../../elements/input/TextInput';


interface URLInputProps {
  value: string;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string;
}





const URLInput = ({ placeholder, className, label, name, onBlur, onFocus, ...props }: URLInputProps) => {
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
    <TextInput
      name={name}

      // On input change check if the value is a valid URL with the isValidURL function clear the error on the input
      onChange={(e) => {
        setValue(e.target.value);
        isValidURL(value);
      }}
      value={value}
      className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      placeholder={placeholder}
    >

      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        {error && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {error}
      </p>
    </TextInput>
  )
}

export default URLInput;