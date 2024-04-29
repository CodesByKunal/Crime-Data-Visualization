import Link from "next/link";
export default function SignupForm() {
  return (
    <>
      <div className="dark h-svh flex flex-col items-center justify-center px-6 py-8 mx-auto   dark:bg-gray-900 w-screen bg-gray-100 sm:h-screen">
        <div className="w-full bg-white rounded-lg dark:border  max-w-md  dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>

                <input
                  type="username"
                  name="username"
                  id="username"
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 bg-gray-200"
                  placeholder="Anand Vyas"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 bg-gray-200"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 bg-gray-200"
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 focus:ring-4 focus:ring-blue-900 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p className=" text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium hover:underline dark:text-white text-gray-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
