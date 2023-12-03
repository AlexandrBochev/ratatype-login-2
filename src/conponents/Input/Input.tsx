interface InputProps {
  type: string
  label: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  isValid?: boolean
}

const Input = ({ type, label, handleChange, id, isValid }: InputProps) => {
  return (
    <div className="relative mb-[0.937rem] sm:mb-[1.25] font-medium text-darck_gray">
      <input
        id={ id }
        className={`
          w-full h-[3.75rem] sm:h-[4.375rem] border-[0.125rem] border-gray bg-ligth_gray rounded-[0.625rem]
          text-black py-[1.125rem] sm:py-[1.25rem] px-[0.9375rem]
          focus:outline-none focus:border-brand focus:pb-0 valid:pb-0 peer ${!isValid && 'border-red'}
        `}
        type={ type }
        required
        onChange={ (e) => handleChange(e) }
      />

      <label
        className="
          absolute top-[1.125rem] sm:top-[1.25rem] left-[0.937rem]
          peer-focus:top-[0.25rem] peer-focus:text-[0.875rem] sm:peer-focus:text-[1rem]
          peer-valid:top-[0.25rem] peer-valid:text-[0.875rem] sm:peer-valid:text-[1rem]
          pointer-events-none transition-all
        "
      >
        { label }
      </label>

      {id === 'email' && !isValid && <p className="text-[0.875rem] sm:text-[1rem] text-red">Вкажіть вашу ел. пошту</p>}
      {id === 'password' && !isValid && <p className="text-[0.875rem] sm:text-[1rem] text-red">Мінімум 8 символів: цифри, великі та малі літери (a-z).</p>}
      {id === 'password' &&
        <p
          className="underline inline cursor-pointer text-[0.875rem] sm:text-[1rem]"
          onClick={ () => alert('Forgot password?') }
        >
          Не пам'ятаєш пароль?
        </p>
      }
    </div>
  )
}

export { Input }