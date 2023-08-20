import FormContainer from "./FormContainer";
import FormHeader from "./FormHeader";
import LeftSide from "./LeftSide";

function Login() {
  return (
    <div className="bg-slate-900 relative text-white h-[100vh]">
      <img
        className="w-full h-full object-cover "
        src="/images/loginBg.svg"
        alt=""
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-80">
        <div className="flex items-center justify-between ">
          <LeftSide />
          <div className="w-[417px] flex flex-col items-center rounded-xl gap-3">
            <FormHeader />
            <FormContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
