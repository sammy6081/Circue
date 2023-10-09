import LoginForm from "../components/LoginForm";
import Slider from "../components/Slider";
import logo from '../assets/Circue Logo-23.png'

function Onboarding() {
  return (
    <div className="max-h-screen relative">
      <div className="absolute flex w-36 justify-center items-center top-10 md:left-10 left-5 z-30">
        <img src={logo} alt="logo" className="w-full"/>
      </div>
      <Slider className="flext-auto"/>
      <LoginForm className="flex-auto"/>
    </div>
  )
}

export default Onboarding