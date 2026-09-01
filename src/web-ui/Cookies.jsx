export default function Cookies() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-[35px] border border-gray-800 overflow-hidden shadow-2xl">

          {/* Header */}

          <div className="relative p-10 md:p-14 border-b border-gray-800">

            <div className="absolute top-0 right-0 h-80 w-80 bg-green-500/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                NanoDx Legal
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
                NanoDx Cookie Policy
              </h1>

              <p className="mt-4 text-gray-400">
                Last Updated: July 7, 2025
              </p>

            </div>

          </div>

          {/* Content */}

          <div className="p-10 md:p-14 space-y-12 text-gray-300">

            {/* Intro */}

            <section className="bg-gray-800/50 rounded-3xl border border-gray-700 p-8">

              <p className="leading-8">
                This Cookie Policy explains how NanoDx
                ("we," "us," or "our"), established in
                2021 in Bradenton, FL, uses cookies and
                similar technologies when you visit our
                website, [Your Website URL Here].
              </p>

              <p className="leading-8 mt-5">
                This policy aims to provide you with clear
                and comprehensive information about the
                types of cookies we use, the purposes
                for which we use them, and how you can
                manage your cookie preferences.
              </p>

            </section>


            {/* Section 1 */}

            <section>

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                1. What are Cookies?
              </h2>

              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">

                <p className="leading-8">
                  Cookies are small text files that are
                  placed on your computer or mobile device
                  when you visit a website.
                </p>

                <p className="leading-8 mt-5">
                  They are widely used to make websites
                  work more efficiently, as well as to
                  provide reporting information and to
                  personalize your experience.
                </p>

                <p className="leading-8 mt-5">
                  Cookies can be "session cookies"
                  (which are temporary and deleted when
                  you close your browser) or
                  "persistent cookies" (which remain on
                  your device for a set period or until
                  you delete them).
                </p>

              </div>

            </section>


            {/* Section 2 */}

            <section>

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                2. How We Use Cookies
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {[
                  {
                    title:"Website Functionality",
                    desc:"To ensure our website operates correctly and securely."
                  },
                  {
                    title:"Performance and Analytics",
                    desc:"To understand how you interact with our website, helping us improve performance and user experience."
                  },
                  {
                    title:"Personalization",
                    desc:"To remember your preferences and provide a customized browsing experience."
                  },
                  {
                    title:"Marketing and Advertising",
                    desc:"To deliver relevant advertisements and measure campaign effectiveness."
                  }
                ].map((item,index)=>(

                  <div
                    key={index}
                    className="bg-gray-800 rounded-3xl border border-gray-700 p-6"
                  >

                    <h3 className="font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-7">
                      {item.desc}
                    </p>

                  </div>

                ))}

              </div>

            </section>


            {/* Section 3 */}

            <section>

              <h2 className="text-3xl font-bold text-green-400 mb-8">
                3. Types of Cookies We Use
              </h2>

              <p className="leading-8 mb-8">
                Our website uses both first-party cookies
                (set by NanoDx) and third-party cookies
                (set by services or partners we work with).
                The cookies used on our site generally fall
                into the following categories:
              </p>


              <div className="space-y-8">

                {[
                  {
                    title:"Strictly Necessary Cookies",
                    purpose:"These cookies are essential for the operation of our website. They enable core functionalities such as security, network management, and accessibility.",
                    data:"Primarily technical data related to website functionality.",
                    consent:"These cookies do not require your prior consent.",
                    example:"Cookies that remember your consent preferences and session cookies that keep you logged in."
                  },
                  {
                    title:"Performance and Analytics Cookies",
                    purpose:"These cookies collect information about how visitors use our website.",
                    data:"Anonymous or aggregated data such as IP address, browser type, operating system and pages visited.",
                    consent:"We require your consent to use these cookies.",
                    example:"Google Analytics cookies."
                  },
                  {
                    title:"Functionality / Preference Cookies",
                    purpose:"These cookies allow our website to remember choices you make.",
                    data:"May include personal preferences you set.",
                    consent:"We require your consent.",
                    example:"Preferred language or saved login details."
                  },
                  {
                    title:"Marketing / Targeting Cookies",
                    purpose:"Used to deliver advertisements relevant to your interests.",
                    data:"Browsing behavior such as pages visited and links clicked.",
                    consent:"We require your explicit consent.",
                    example:"Google Ads, Facebook Ads, LinkedIn, Twitter."
                  }
                ].map((item,index)=>(

                  <div
                    key={index}
                    className="bg-gray-800 rounded-3xl border border-gray-700 p-8"
                  >

                    <h3 className="text-xl text-white font-bold mb-5">
                      {item.title}
                    </h3>

                    <div className="space-y-4 leading-8">

                      <p>
                        <span className="font-semibold text-green-400">
                          Purpose:
                        </span>{" "}
                        {item.purpose}
                      </p>

                      <p>
                        <span className="font-semibold text-green-400">
                          Data Collected:
                        </span>{" "}
                        {item.data}
                      </p>

                      <p>
                        <span className="font-semibold text-green-400">
                          Consent:
                        </span>{" "}
                        {item.consent}
                      </p>

                      <p>
                        <span className="font-semibold text-green-400">
                          Examples:
                        </span>{" "}
                        {item.example}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>


            {/* Section 4 */}

            <section className="bg-gray-800 rounded-3xl border border-gray-700 p-8">

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                4. Third-Party Cookies
              </h2>

              <p className="leading-8">
                We may also use third-party cookies to
                report website usage statistics and
                deliver advertisements.
              </p>

              <ul className="list-disc pl-6 mt-6 space-y-3">

                <li>
                  Google Analytics:
                  Website analytics and tracking
                </li>

                <li>
                  Social Media Plugins:
                  LinkedIn, Twitter, etc.
                </li>

                <li>
                  Advertising Partners:
                  Targeted advertising campaigns
                </li>

              </ul>

            </section>


            {/* Section 5 */}

            <section>

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                5. Your Choices Regarding Cookies
              </h2>

              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">

                <ul className="space-y-6 list-disc pl-6">

                  <li>
                    Cookie Consent Banner
                  </li>

                  <li>
                    Cookie Settings / Preferences
                  </li>

                  <li>
                    Browser Settings
                  </li>

                </ul>

                <div className="mt-8">

                  <h3 className="text-white font-semibold mb-4">
                    Popular Browsers
                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {[
                      "Google Chrome",
                      "Mozilla Firefox",
                      "Microsoft Edge",
                      "Apple Safari"
                    ].map((item)=>(

                      <div
                        key={item}
                        className="bg-gray-900 px-4 py-3 rounded-xl"
                      >
                        {item}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </section>


            {/* Remaining */}

            {[
              {
                title:"6. Data Retention",
                text:"The duration for which cookies remain on your device varies depending on whether it is a session or persistent cookie."
              },
              {
                title:"7. Changes to Our Cookie Policy",
                text:'We may update this Cookie Policy periodically. The "Last Updated" date indicates when it was revised.'
              }
            ].map((item,index)=>(

              <section
                key={index}
                className="bg-gray-800 rounded-3xl border border-gray-700 p-8"
              >

                <h2 className="text-3xl font-bold text-green-400 mb-6">
                  {item.title}
                </h2>

                <p className="leading-8">
                  {item.text}
                </p>

              </section>

            ))}


            {/* Contact */}

            <section className="bg-gradient-to-r from-green-600/20 to-green-500/5 rounded-3xl border border-green-500/20 p-8">

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                8. Contact Us
              </h2>

              <p className="leading-8">
                If you have any questions about our use
                of cookies or this Cookie Policy,
                please contact us:
              </p>

              <div className="mt-6 space-y-3">

                <p>NanoDx</p>

                <p>admin@nanodxcorp.com</p>

                <p>+91 9413022073</p>

                <p>Bradenton, FL</p>

              </div>

            </section>


            {/* Important */}

            <section className="bg-gray-800 rounded-3xl border border-gray-700 p-8">

              <h2 className="text-3xl font-bold text-green-400 mb-8">
                Important Considerations For Implementation
              </h2>

              <ul className="space-y-5 list-disc pl-6 leading-8">

                <li>
                  Cookie Audit
                </li>

                <li>
                  Cookie Consent Management Platform (CMP)
                </li>

                <li>
                  Prominent Placement
                </li>

                <li>
                  Clarity and Simplicity
                </li>

                <li>
                  Regular Review
                </li>

                <li>
                  Legal Counsel
                </li>

              </ul>

            </section>

          </div>

        </div>

      </div>

    </div>
  );
}