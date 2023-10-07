import LoginForm from "../components/LoginForm";
import Slider from "../components/Slider";
import logo from '../assets/Circue Logo-23.png'

function Onboarding() {
  return (
    <div className="lg:block flex flex-col relative">
      <div className="absolute flex w-36 justify-center items-center top-5 left-5 z-30">
        <img src={logo} alt="logo" className="w-full"/>
      </div>
      <Slider className="flex-grow"/>
      <LoginForm className="flex-grow"/>
    </div>
  )
}

export default Onboarding