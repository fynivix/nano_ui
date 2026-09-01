export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-6">

      <div className="max-w-7xl mx-auto space-y-24">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 p-12">

          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 blur-[100px]" />

          <div className="relative">

            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              About NanoDx
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mt-8">
              Driving Innovation in Diagnostics
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-400 max-w-4xl">
              Established in 2021 in Bradenton, FL,
              NanoDx is dedicated to providing high-quality
              reagents, antibodies, nanomaterials and
              comprehensive products and services for
              research, academia and industry partners.
            </p>

          </div>

        </section>


        {/* Leadership */}

        <section>

          <h2 className="text-4xl font-bold text-green-400 mb-10">
            Our Leadership
          </h2>

          <div className="space-y-12">

            {/* CEO */}

            <div className="grid lg:grid-cols-[280px_1fr] gap-10 bg-gray-900 rounded-[35px] border border-gray-800 p-10">

              {/* Image */}

              <div>

                <div className="h-[350px] rounded-3xl overflow-hidden border border-gray-700">

                  <img
                    src="/images/priyanka.jpg"
                    alt="Priyanka Dubey"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>


              {/* Content */}

              <div>

                <h3 className="text-3xl text-white font-bold">
                  Priyanka Dubey
                </h3>

                <p className="text-green-400 text-lg mt-2">
                  CEO, NanoDx
                </p>

                <div className="space-y-5 mt-8 leading-8">

                  <p>
                    Priyanka Dubey is a dynamic and
                    multifaceted leader, currently serving
                    as the CEO of NanoDx.
                  </p>

                  <p>
                    With a unique blend of expertise
                    spanning software engineering and
                    human resources, Priyanka brings
                    a holistic and strategic approach
                    to the company's vision and operations.
                  </p>

                  <p>
                    Priyanka's leadership is instrumental
                    in guiding NanoDx's mission to provide
                    high-quality reagents, antibodies,
                    and nanomaterials.
                  </p>

                </div>

              </div>

            </div>



            {/* Advisor */}

            <div className="grid lg:grid-cols-[1fr_280px] gap-10 bg-gray-900 rounded-[35px] border border-gray-800 p-10">

              <div>

                <h3 className="text-3xl text-white font-bold">
                  Chandra Dixit, Ph.D.
                </h3>

                <p className="text-green-400 text-lg mt-2">
                  CSO & Advisor, NanoDx
                </p>

                <div className="space-y-5 mt-8 leading-8">

                  <p>
                    Dr. Chandra Dixit is a highly
                    accomplished and visionary leader
                    in the diagnostics industry.
                  </p>

                  <p>
                    With over two decades of expertise
                    in bioanalytical, diagnostics,
                    materials science and point-of-care
                    technologies, Chandra drives
                    technological and scientific innovation.
                  </p>

                  <p>
                    His expertise ensures NanoDx remains
                    at the forefront of diagnostic
                    innovation and scientific breakthroughs.
                  </p>

                </div>

              </div>

              {/* Image */}

              <div>

                <div className="h-[350px] rounded-3xl overflow-hidden border border-gray-700">

                  <img
                    src="/images/chandra.jpg"
                    alt="Chandra Dixit"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* Products & Services */}

        <section>

          <h2 className="text-4xl font-bold text-green-400 mb-10">
            Products & Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Gold Nanoparticles and Functionalities",
              "Silica Nanoparticles and Functionalities",
              "Magnetic Particles and Functionalities",
              "Fusion Particles and Functionalities",
              "Affinity Nano Reagents",
              "NanoImmunoassay Development",
              "Immunochromatographic Assay Development",
            ].map((item) => (

              <div
                key={item}
                className="
                bg-gray-900
                rounded-3xl
                border
                border-gray-800
                p-8
                hover:border-green-500
                transition
                "
              >
                {item}
              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}