import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Google } from "../icons/Google"
import { Starky } from "../icons/Starky"

const checkUser = {
  email: 'test@test.com',
  password: 'Test1234',
}

const LogIn = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasslValid, setIsPassValid] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (!emailRegex.test(user.email)) {
      setIsEmailValid(false)
      return
    }
    setIsEmailValid(true)

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if (!passRegex.test(user.password)) {
      setIsPassValid(false)
      return
    }
    setIsPassValid(true)

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
        <Input type="text" label="Ел. пошта" id='email' handleChange={ handleChange } isValid={ isEmailValid } />
        <Input type="password" label="Пароль" id='password' handleChange={ handleChange } isValid={ isPasslValid } />
        <Button changeColor={true} type="submit">Увійти</Button>
      </form>
      <p className="font-medium my-[0.9375rem] sm:my-[1.25rem]">
        Ще не з нами?
        <span className="font-bold underline inline cursor-pointer" onClick={ () => alert('Please register!') }> Зареєструватися</span>
      </p>
    </section>
  )
}

export { LogIn }