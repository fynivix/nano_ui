import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authThunk";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      register(form)
    );

    if (register.fulfilled.match(result)) {
      setMessage("Registration successful");

      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (error) {
      setMessage(
        error.message ||
        error ||
        "Registration failed"
      );
    }
  }, [error]);

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

          {/* Background Glow */}

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

          {/* Details Content */}

          <div className="relative z-10 max-w-xl mx-auto">

            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Join

              <span className="text-green-400">
                {" "}NanoDx
              </span>

              <br />

              Research Innovation
            </h1>


            {/* Description */}

            <p
              className="
                mt-6
                text-gray-400
                text-sm
                md:text-lg
                leading-8
              "
            >
              NanoDx delivers advanced
              reagents, antibodies, and
              nanomaterials designed to
              empower research,
              academia, and industry.
            </p>


            {/* Stats */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                ["2021", "Founded"],
                ["100+", "Products"],
                ["24/7", "Support"],
                ["Global", "Research"],
              ].map(([number, label]) => (

                <div
                  key={label}
                  className="
                    bg-white/5
                    border
                    border-gray-800
                    rounded-2xl
                    p-4
                    backdrop-blur
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
                    {number}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            REGISTER CARD
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

              {/* Logo + Heading */}

              <div className="text-center mb-8">

                <div className="flex justify-center mb-6">

                  <img
                    src="/logo/logo-bg.png"
                    alt="NanoDx Logo"
                    className="h-16 md:h-20 w-auto object-contain"
                  />

                </div>

                <h2
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                  "
                >
                  Create Account
                </h2>

                <p className="text-gray-400 mt-2 text-sm">
                  Register your NanoDx account
                </p>

              </div>


              {/* Register Form */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Full Name */}

                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
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
                    outline-none
                    focus:border-green-500
                    focus:ring-1
                    focus:ring-green-500
                  "
                />


                {/* Email */}

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
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
                    outline-none
                    focus:border-green-500
                    focus:ring-1
                    focus:ring-green-500
                  "
                />


                {/* Mobile Number */}

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
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
                    outline-none
                    focus:border-green-500
                    focus:ring-1
                    focus:ring-green-500
                  "
                />


                {/* Password */}

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
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
                    outline-none
                    focus:border-green-500
                    focus:ring-1
                    focus:ring-green-500
                  "
                />


                {/* Message */}

                {message && (

                  <div
                    className="
                      bg-red-500/10
                      border
                      border-red-500/30
                      rounded-xl
                      p-3
                    "
                  >

                    <p
                      className="
                        text-red-400
                        text-center
                        text-sm
                      "
                    >
                      {message}
                    </p>

                  </div>

                )}


                {/* Create Account Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-green-500
                    hover:bg-green-600
                    disabled:bg-green-500/50
                    disabled:cursor-not-allowed
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  {loading
                    ? "Creating..."
                    : "Create Account"}
                </button>


                {/* Login Link */}

                <p
                  className="
                    text-center
                    text-sm
                    text-gray-400
                  "
                >
                  Already have an account?{" "}

                  <span
                    onClick={() => navigate("/login")}
                    className="
                      text-green-400
                      cursor-pointer
                      hover:text-green-300
                      hover:underline
                    "
                  >
                    Sign In
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
