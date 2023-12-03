import { useEffect, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Google } from "../icons/Google"
import { Starky } from "../icons/Starky"

const checkUser = {
  email: 'test@test.com',
  password: 'Test1234',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const LogIn = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPassValid, setIsPassValid] = useState(true)

  useEffect(() => {
    if (user.email && user.password && isEmailValid && isPassValid) {
      setIsBtnDisabled(false)
    } else {
      setIsBtnDisabled(true)
    }
  }, [user, isEmailValid, isPassValid])

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!emailRegex.test(e.target.value)) {
      setIsEmailValid(false)
    } else {
      setIsEmailValid(true)
      setUser({ ...user, email: e.target.value })
    }
  }

  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!passRegex.test(e.target.value)) {
      setIsPassValid(false)
    } else {
      setIsPassValid(true)
      setUser({ ...user, password: e.target.value })
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (user.email !== checkUser.email || user.password !== checkUser.password) {
      alert('Wrong email or password')
      return
    }
    alert(`You are log in with email: ${ user.email }`)
    window.location.reload()
  }

  return (
    <section className="flex flex-col items-center w-full max-w-[34.375rem] text-primary text-[1.0625rem] sm:text-[1.25rem] leading-[150%] mx-auto py-[1.25rem] sm:py-[1.875rem]">
      <Starky />
      <h1 className="text-primary text-[3rem] sm:text-[4rem] font-extrabold leading-[3rem] sm:leading-[4rem] my-[0.9375rem] sm:my-[1.25rem]">
        Увійти
      </h1>
      <Button onClick={ () => alert('Log in whith Google') }><Google />Google</Button>
      <p className="font-medium my-[0.9375rem] sm:my-[1.25rem]">або</p>
      <form onSubmit={ handleSubmit } className="w-full">
        <Input type="text" label="Ел. пошта" id='email' handleChange={ handleChangeEmail } isValid={ isEmailValid } />
        <Input type="password" label="Пароль" id='password' handleChange={ handleChangePass } isValid={ isPassValid } />
        <Button changeColor={true} disabled={ isBtnDisabled } type="submit">Увійти</Button>
      </form>
      <p className="font-medium my-[0.9375rem] sm:my-[1.25rem]">
        Ще не з нами?
        <span className="font-bold underline inline cursor-pointer" onClick={ () => alert('Please register!') }> Зареєструватися</span>
      </p>
    </section>
  )
}

export { LogIn }