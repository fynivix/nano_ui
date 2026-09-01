import {
  Atom,
  FlaskConical,
  Microscope,
  TestTube,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Atom size={40} />,
      title: "Gold Nanoparticles",
      desc: "High-quality gold nanoparticles with advanced functionalities designed for diagnostic and research applications.",
    },

    {
      icon: <FlaskConical size={40} />,
      title: "Silica Nanoparticles",
      desc: "Precision-engineered silica nanoparticles tailored for scientific, industrial, and biomedical solutions.",
    },

    {
      icon: <Cpu size={40} />,
      title: "Magnetic Particles",
      desc: "Reliable magnetic particles and functional materials for bioseparation and diagnostic technologies.",
    },

    {
      icon: <TestTube size={40} />,
      title: "Fusion Particles",
      desc: "Innovative fusion particles developed to enhance performance across diagnostic applications.",
    },

    {
      icon: <Microscope size={40} />,
      title: "NanoImmunoassay Development",
      desc: "Comprehensive development services for advanced nano-based immunoassays and diagnostics.",
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Immunochromatographic Assays",
      desc: "Expert assay development for rapid, reliable, and point-of-care diagnostic solutions.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 h-96 w-96 bg-green-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center relative">

          <span className="px-5 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm">
            NanoDx Products & Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">

            Advanced Solutions for
            <span className="text-green-400">
              {" "}Diagnostics & Research
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            NanoDx delivers innovative nanoparticles,
            reagents, and diagnostic solutions that
            empower research institutions, academia,
            and industry partners worldwide.
          </p>

        </div>

      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 hover:-translate-y-3 transition duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-semibold mb-4">

                {feature.title}

              </h3>

              <p className="text-gray-400 leading-7">

                {feature.desc}

              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-600 to-green-500 rounded-[35px] p-12 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">

            Empowering Scientific Innovation

          </h2>

          <p className="mt-6 text-green-100 text-lg max-w-2xl mx-auto">

            Partner with NanoDx to access advanced
            nanomaterials, reagents, and cutting-edge
            diagnostic development services.

          </p>

          <button
            className="mt-10 px-8 py-4 rounded-xl bg-white text-green-600 font-semibold hover:scale-105 transition"
          >
            Explore Solutions
          </button>

        </div>

      </section>

    </div>
  );
}