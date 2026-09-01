import {
  FlaskConical,
  Microscope,
  Atom,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Atom size={32} />,
      title: "Nanoparticles",
      desc: "Advanced gold, silica, magnetic and fusion nanoparticles for scientific applications.",
    },
    {
      icon: <Microscope size={32} />,
      title: "Diagnostic Solutions",
      desc: "Innovative diagnostic technologies for research and healthcare industries.",
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Research Services",
      desc: "NanoImmunoassay and Immunochromatographic assay development services.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Reliable Quality",
      desc: "High-quality products and scientific expertise you can trust.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left">

            {/* <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🔬 Advanced Diagnostic Solutions
            </span> */}

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">

              Driving Innovation in

              <span className="text-green-400">
                {" "}Nano Diagnostics
              </span>

            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-8">

              NanoDx Corp provides high-quality reagents,
              antibodies, nanomaterials, and innovative
              diagnostic solutions for research, academia,
              and industry partners worldwide.

            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Products
              </button>

              <button
                className="border border-gray-700 hover:border-green-500 px-8 py-4 rounded-xl transition"
              >
                Contact Us
              </button>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1200"
              alt="NanoDx Research"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />

          </div>

        </div>

      </section>


      {/* Stats */}

      <section className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            ["2021", "Established"],
            ["4+", "Products"],
            ["3+", "Services"],
            ["100%", "Quality Focus"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-6
              text-center
              hover:border-green-500
              transition
              "
            >

              <h2 className="text-3xl font-bold text-green-400">
                {number}
              </h2>

              <p className="text-gray-400 mt-2">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Features */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Products & Services
          </h2>

          <p className="text-gray-400 mt-4">
            Supporting scientific innovation with advanced technologies.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              p-8
              hover:-translate-y-2
              hover:border-green-500
              transition-all
              "
            >

              <div className="text-green-400 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="max-w-5xl mx-auto px-5 py-20">

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-[35px] p-12 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">

            Empowering Research Through Innovation

          </h2>

          <p className="mt-4 text-green-100 text-lg">

            NanoDx Corp is committed to advancing scientific
            discovery by providing reliable products and
            cutting-edge diagnostic solutions.

          </p>

          <button
            className="
            mt-8
            bg-white
            text-green-600
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition
            "
          >
            Learn More
          </button>

        </div>

      </section>

    </div>
  );
}