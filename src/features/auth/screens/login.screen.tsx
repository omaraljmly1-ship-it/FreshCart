import LoginForm from "../components/login/loginForm";
import LoginHero from "../components/login/loginHero";

export default function LoginScreen() {
    return <>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
            <div className="">
                <LoginHero/>
            </div>
            <div className="">
                <LoginForm/>
            </div>
        </div>
    </div>
    </>
}