interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  changeColor?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({ children, onClick, type, changeColor, disabled }: ButtonProps) => {
  return (
    <button
      className={`
        w-full flex items-center justify-center rounded-[0.625rem] border-[0.125rem] py-[0.625rem] font-bold
        ${ changeColor ?
          'bg-light_yellow border-yellow shadow-yellow hover:shadow-big_yellow' :
          'bg-white border-brand shadow-brand hover:shadow-big_brand'
        }
        ${ disabled ?
          'opacity-50 cursor-not-allowed shadow-disabled hover:shadow-disabled transition-all' :
          'hover:-translate-y-[0.125rem] active:translate-y-[0.125rem] active:shadow-none transition-all'
        }
      `}
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { children }
    </button>
  )
}

export { Button }