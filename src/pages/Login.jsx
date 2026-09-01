import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authThunk";
import { clearError } from "../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, accessToken } = useSelector(
    (state) => state.auth
  );

  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    dispatch(clearError());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(login(form));

    if (login.fulfilled.match(result)) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken, navigate]);

  return (
    <div className="min-h-screen bg-black">

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* =====================================================
            LEFT DETAILS
            Hidden on Mobile
            Visible on Tablet/Desktop
        ====================================================== */}

        <div
          className="
            hidden
            md:flex
            relative
            bg-gradient-to-br
            from-green-900
            via-gray-950
            to-black
            px-6
            md:px-10
            py-12
            lg:py-0
            items-center
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              top-0
              right-0
              w-72
              md:w-96
              h-72
              md:h-96
              bg-green-500/10
              rounded-full
              blur-3xl
            "
          />

          <div className="relative z-10 max-w-xl mx-auto">

            <span
              className="
                inline-block
                px-4
                py-2
                rounded-full
                text-xs
                md:text-sm
                bg-green-500/10
                text-green-400
                border
                border-green-500/20
              "
            >
              NanoDx Corporation
            </span>

            <h1
              className="
                mt-6
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Advancing

              <span className="text-green-400">
                {" "}Diagnostics
              </span>

              <br />

              Through Innovation
            </h1>

            <p
              className="
                mt-6
                text-gray-400
                text-sm
                md:text-lg
                leading-7
              "
            >
              NanoDx provides high-quality reagents,
              antibodies, and nanomaterials designed
              to empower research, academia, and
              industry with innovative scientific
              solutions.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              {[
                ["2021", "Established"],
                ["100+", "Research Solutions"],
                ["24/7", "Support"],
                ["Global", "Research Network"],
              ].map(([num, text]) => (

                <div
                  key={text}
                  className="
                    bg-white/5
                    border
                    border-gray-800
                    backdrop-blur
                    rounded-2xl
                    p-4
                  "
                >

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-green-400
                    "
                  >
                    {num}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            LOGIN CARD
            Always Visible
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            px-4
            sm:px-6
            py-8
            sm:py-10
            md:py-12
            bg-black
          "
        >

          <div className="w-full max-w-md">

            <div
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-[30px]
                p-6
                sm:p-7
                md:p-8
                shadow-2xl
              "
            >

              {/* Logo */}

              <div className="text-center mb-8">

                <div className="flex justify-center mb-6">

                  <img
                    src="/logo/logo-bg.png"
                    alt="NanoDx Logo"
                    className="h-16 md:h-20 w-auto object-contain"
                  />

                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Welcome Back
                </h2>

                <p className="text-gray-400 mt-2 text-sm">
                  Sign in to your NanoDx account
                </p>

              </div>


              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Email or Mobile
                  </label>

                  <input
                    type="text"
                    name="login"
                    value={form.login}
                    onChange={handleChange}
                    placeholder="Enter email or mobile"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-800
                      border
                      border-gray-700
                      text-white
                      placeholder-gray-500
                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500
                      outline-none
                    "
                  />

                </div>


                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-800
                      border
                      border-gray-700
                      text-white
                      placeholder-gray-500
                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500
                      outline-none
                    "
                  />

                </div>


                <div className="flex justify-end">

                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-sm text-green-400 hover:underline"
                  >
                    Forgot Password?
                  </button>

                </div>


                {error && (

                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">

                    <p className="text-red-400 text-sm text-center">
                      {error.message || error}
                    </p>

                  </div>

                )}


                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    py-3
                    rounded-xl
                    font-semibold
                    bg-green-500
                    hover:bg-green-600
                    disabled:bg-green-500/50
                    transition
                  "
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>


                <p className="text-center text-sm text-gray-400">

                  Don't have an account?{" "}

                  <span
                    onClick={() => navigate("/register")}
                    className="
                      text-green-400
                      cursor-pointer
                      hover:underline
                    "
                  >
                    Register
                  </span>

                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
