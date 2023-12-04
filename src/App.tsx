import { LogIn } from "./conponents/LogIn/LogIn"
import { RatatypeLogo } from "./conponents/icons/RatatypeLogo"

const  App = () => {
  return (
    <div className="w-full flex flex-col items-center px-5">
      <header className="py-[0.62rem] sm:py-[1.25rem]">
        <a href="/ratatype-login-2"><RatatypeLogo /></a>
      </header>
      <main className="w-full">
        <LogIn />
      </main>
    </div>
  )
}

export { App }
