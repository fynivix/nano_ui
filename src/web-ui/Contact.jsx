import {
  Mail,
  Phone,
  MapPin,
  Microscope,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute top-0 right-0 h-96 w-96 bg-green-500/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto">

          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            NanoDx Support
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold">

            Get In
            <span className="text-green-400">
              {" "}Touch
            </span>

          </h1>

          <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-8">

            Connect with NanoDx for inquiries related
            to products, research collaborations,
            nanomaterials, and diagnostic solutions.

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}

          <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-10 rounded-[35px] border border-gray-800">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-green-500 outline-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 font-semibold transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>


          {/* Contact Information */}

          <div className="space-y-8">

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 flex gap-5">

              <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Mail className="text-green-400"/>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Email
                </h3>

                <p className="text-gray-400 mt-2">
                  admin@nanodxcorp.com
                </p>
              </div>

            </div>


            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 flex gap-5">

              <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="text-green-400"/>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Phone
                </h3>

                <p className="text-gray-400 mt-2">
                  +91 9413022073
                </p>
              </div>

            </div>


            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 flex gap-5">

              <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <MapPin className="text-green-400"/>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Location
                </h3>

                <p className="text-gray-400 mt-2">
                  Bradenton, FL
                </p>
              </div>

            </div>


            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8">

              <Microscope size={40}/>

              <h3 className="text-2xl font-bold mt-5">
                Research Collaboration
              </h3>

              <p className="mt-4 text-green-100 leading-7">

                NanoDx actively supports collaborations
                with research institutions, academia,
                and industry partners to accelerate
                scientific innovation.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}