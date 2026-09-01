import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-5 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logo/logo-bg.png"
                alt="NanoDx Corp"
                className="h-14 w-auto object-contain"
              />

              {/* Remove if logo already contains text */}

              <div>

                <h2 className="text-xl font-bold text-white">
                  NanoDx Corp
                </h2>

                <p className="text-sm text-gray-400">
                  Diagnostic Solutions
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-5 leading-7">

              NanoDx Corp is dedicated to providing
              high-quality reagents, antibodies,
              nanomaterials and innovative diagnostic
              solutions for research, academia,
              and industry partners.

            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-green-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/productsServices"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Products & Services
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Information
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>
                📧 admin@nanodxcorp.com
              </p>

              <p>
                📞 +91 9413022073
              </p>

              <p>
                📍 Bradenton, FL
              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">

            © 2026 NanoDx Corp.
            All rights reserved.

          </p>

          <div className="flex gap-6">
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-green-400 text-sm transition"
            >
              Cookies
            </Link>
            <Link
              to="/Intellectual"
              className="text-gray-400 hover:text-green-400 text-sm transition"
            >
              Intellectual Property Policy
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-green-400 text-sm transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="text-gray-400 hover:text-green-400 text-sm transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}