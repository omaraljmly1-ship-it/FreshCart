import SignupForm from "../../auth/components/signup/signupForm";
import SignupHero from "../../auth/components/signup/signupHero";
export default function SignupScreen() {
    return <>
        <div className="container grid grid-cols-1 md:grid-cols-2  py-3">
      {/* {signup page content} */}
       <SignupHero/>

      {/* {signup page form} */}
       <SignupForm/>

    </div>
    </>;
}