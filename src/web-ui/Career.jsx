import { useState } from "react";
import {
  Briefcase,
  Users,
  Microscope,
  X,
} from "lucide-react";

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Research Scientist - Nanotechnology",
      location: "Bradenton, FL",
      type: "Full Time",
      desc:
        "Conduct research and development activities involving nanomaterials, diagnostic platforms, and biomedical technologies.",
    },

    {
      title: "Research Associate - Diagnostics",
      location: "Remote / Hybrid",
      type: "Full Time",
      desc:
        "Support assay development, experimental design, and laboratory testing for advanced diagnostic solutions.",
    },

    {
      title: "Biomedical Research Intern",
      location: "Bradenton, FL",
      type: "Internship",
      desc:
        "Assist research teams in laboratory activities, documentation, and innovation projects.",
    },

    {
      title: "NanoMaterials Engineer",
      location: "Remote",
      type: "Full Time",
      desc:
        "Develop and optimize nanomaterials for healthcare and diagnostic applications.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero */}

      <section className="py-24 px-6 text-center relative">

        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative">

          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            Join NanoDx
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold">

            Careers at
            <span className="text-green-400">
              {" "}NanoDx
            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-8">

            Join a team dedicated to innovation,
            diagnostics, nanotechnology,
            and scientific breakthroughs.

          </p>

        </div>

      </section>


      {/* Why Join */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              icon:<Microscope size={35}/>,
              title:"Innovation",
              desc:"Work on advanced scientific technologies."
            },

            {
              icon:<Users size={35}/>,
              title:"Collaboration",
              desc:"Collaborate with researchers and scientists."
            },

            {
              icon:<Briefcase size={35}/>,
              title:"Growth",
              desc:"Build your career with learning opportunities."
            }

          ].map((item,index)=>(

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >

              <div className="text-green-400 mb-5">

                {item.icon}

              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Job Openings */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center">

          Current Openings

        </h2>

        <div className="space-y-6">

          {jobs.map((job,index)=>(

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >

              <div className="flex flex-col lg:flex-row justify-between gap-6">

                <div>

                  <h3 className="text-2xl font-bold">

                    {job.title}

                  </h3>

                  <div className="flex gap-4 mt-3">

                    <span className="text-green-400">
                      {job.location}
                    </span>

                    <span className="text-gray-500">
                      {job.type}
                    </span>

                  </div>

                  <p className="text-gray-400 mt-5 leading-7">

                    {job.desc}

                  </p>

                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="h-fit px-8 py-3 bg-green-500 rounded-xl hover:bg-green-600"
                >
                  Apply Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Application Modal */}

      {selectedJob && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">

          <div className="bg-gray-900 w-full max-w-2xl rounded-3xl p-8 border border-gray-800 overflow-y-auto max-h-[90vh]">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-3xl font-bold">

                  Apply Now

                </h2>

                <p className="text-green-400 mt-2">

                  {selectedJob.title}

                </p>

              </div>

              <button
                onClick={() => setSelectedJob(null)}
              >
                <X size={30}/>
              </button>

            </div>


            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-green-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-green-500"
              />

              <input
                type="text"
                value={selectedJob.title}
                readOnly
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
              />

              <input
                type="file"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
              />

              <textarea
                rows={4}
                placeholder="Cover Letter"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-green-500"
              />

              <button
                className="w-full bg-green-500 py-4 rounded-xl font-semibold hover:bg-green-600"
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}