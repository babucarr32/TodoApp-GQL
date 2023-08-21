import FormContainer from "./FormContainer";
import FormHeader from "./FormHeader";
import LeftSide from "./LeftSide";

function Login() {
  return (
    <div className="bg-slate-900 relative text-white min-h-[100vh] lg:h-[100vh]">
      <img
        className="w-full h-full object-cover "
        src="/images/loginBg.svg"
        alt=""
      />
      <div className="sm:px-28 absolute top-0 lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]  lg:px-80">
        <div className="flex flex-col gap-3 lg:gap-32 xl:gap-96 lg:flex-row p-3 items-center justify-between   ">
          <LeftSide />
          <div className="w-full lg:w-[417px] flex flex-col items-center rounded-xl gap-3">
            <FormHeader />
            <FormContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
