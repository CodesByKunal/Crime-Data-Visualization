import Link from "next/link";
import formSubmitHandler from "@/utils/formSubmitHandler";
export default  function LoginForm() {
 
  return (
    <>
      <div className="h-svh flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen  dark:bg-gray-900 w-screen bg-gray-100">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action={formSubmitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-violet-600"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="name@company.com"
                  required={true}
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 focus:ring-violet-600 bg-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required={true}
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 focus:ring-violet-600 bg-gray-200"
                />
              </div>
              <div>
                <Link
                  href="/login"
                  className="text-sm font-medium  hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-violet-600   focus:ring-4 focus:ring-violet-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-violet-700"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium hover:underline dark:text-white text-gray-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
