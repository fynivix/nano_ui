import {
  Atom,
  FlaskConical,
  Cpu,
  Sparkles,
  Microscope,
  TestTube2,
  ArrowRight,
} from "lucide-react";

export default function ProductsServices() {
  const products = [
    {
      icon: <Atom size={35} />,
      title: "Gold Nanoparticles and Functionalities",
      desc:
        "NanoDx develops high-quality gold nanoparticles with customizable functionalities designed for advanced diagnostic and biomedical applications. These nanoparticles provide enhanced sensitivity, stability, and rapid detection capabilities across various scientific disciplines.",
    },

    {
      icon: <FlaskConical size={35} />,
      title: "Silica Nanoparticles and Functionalities",
      desc:
        "Our silica nanoparticles are precision-engineered to support research, industrial, and healthcare applications. They deliver superior stability and can be customized according to specific laboratory and scientific requirements.",
    },

    {
      icon: <Cpu size={35} />,
      title: "Magnetic Particles and Functionalities",
      desc:
        "NanoDx offers advanced magnetic particles for bioseparation, molecular diagnostics, and laboratory research applications. These materials enable efficient purification, extraction, and analytical workflows.",
    },

    {
      icon: <Sparkles size={35} />,
      title: "Fusion Particles and Functionalities",
      desc:
        "Fusion particles integrate multiple material properties to improve diagnostic efficiency and performance. These innovative solutions support modern research and point-of-care diagnostic technologies.",
    },
  ];

  const services = [
    {
      icon: <Microscope size={35} />,
      title: "Affinity Nano Reagents",
      desc:
        "NanoDx provides specialized affinity nano reagents designed to enhance molecular interactions and diagnostic accuracy in biomedical and life science applications.",
    },

    {
      icon: <TestTube2 size={35} />,
      title: "NanoImmunoassay Development",
      desc:
        "We offer complete NanoImmunoassay development services, from concept design and validation to optimization and implementation for diagnostic solutions.",
    },

    {
      icon: <Microscope size={35} />,
      title: "Immunochromatographic Assay Development",
      desc:
        "NanoDx develops rapid immunochromatographic assays for point-of-care diagnostic systems, ensuring high sensitivity, reliability, and efficient performance.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero */}

      <section className="relative py-24 px-6 overflow-hidden">

        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center relative">

          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            NanoDx Corp Solutions
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold">

            Products &
            <span className="text-green-400">
              {" "}Services
            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">

            NanoDx delivers advanced nanomaterials,
            reagents, and diagnostic development
            services designed to support innovation
            in research, academia, and industry.

          </p>

        </div>

      </section>


      {/* Products Section */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-14">

          <h2 className="text-4xl font-bold text-green-400">
            Product Offerings
          </h2>

          <p className="text-gray-400 mt-4">
            We specialize in the manufacture and supply of advanced nanomaterials.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {products.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 hover:-translate-y-2 transition duration-500"
            >

              <div className="flex items-center gap-5 mb-6">

                <div className="h-16 w-16 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

              </div>

              <p className="text-gray-400 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Services Section */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-14">

          <h2 className="text-4xl font-bold text-green-400">
            Service Offerings
          </h2>

          <p className="text-gray-400 mt-4">
            Innovative development services designed for scientific breakthroughs.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 hover:-translate-y-2 transition duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mb-5">

                {item.title}

              </h3>

              <p className="text-gray-400 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Bottom CTA */}

      <section className="px-6 py-20">

        <div className="max-w-6xl mx-auto rounded-[35px] p-12 bg-gradient-to-r from-green-600 to-green-500 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">

            Advancing Scientific Innovation

          </h2>

          <p className="mt-6 text-green-100 max-w-3xl mx-auto leading-8">

            NanoDx is committed to providing
            cutting-edge nanotechnology solutions,
            high-quality reagents, and diagnostic
            expertise to empower scientific discoveries.

          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto hover:scale-105 transition">

            Learn More
            <ArrowRight size={20} />

          </button>

        </div>

      </section>

    </div>
  );
}