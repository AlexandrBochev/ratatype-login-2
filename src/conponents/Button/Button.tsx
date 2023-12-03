interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  changeColor?: boolean
  type?: 'button' | 'submit'
}

const Button = ({ children, onClick, type, changeColor }: ButtonProps) => {
  const color = changeColor ?
  'bg-light_yellow border-yellow shadow-yellow hover:shadow-big_yellow' :
  'bg-white border-brand shadow-brand hover:shadow-big_brand'

  return (
    <button
      className={`
        ${ color } w-full flex items-center justify-center rounded-[0.625rem] border-[2px] py-[0.625rem] font-bold
        hover:-translate-y-[0.125rem] active:translate-y-[0.125rem] active:shadow-none transition-all
      `}
      type={ type }
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

export { Button }