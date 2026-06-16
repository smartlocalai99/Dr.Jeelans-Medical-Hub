import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <footer className="jeelan-footer w-full overflow-hidden bg-[linear-gradient(135deg,#072f5f,#0a4d8c)] text-white">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* MAIN */}
          <div className="grid items-start gap-12 pt-20 lg:grid-cols-[0.75fr_1.4fr] lg:gap-24">
            {/* LEFT LOGO ONLY */}
            <motion.div
              initial={{ opacity: 0, x: -45, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <img
                src="/Logo.png"
                alt="Dr. Jeelan's Medical Hub"
                className="jeelan-footer-logo rounded-[34px] bg-white object-contain shadow-2xl"
              />
            </motion.div>

            {/* RIGHT LINKS */}
            <motion.div
              initial={{ opacity: 0, x: 55, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-3"
            >
              <div>
                <h4 className="mb-6 text-xl font-extrabold text-white md:text-2xl">
                  Services
                </h4>

                <div className="flex flex-col gap-4">
                  {[
                    "General Consultation",
                    "Cardiology",
                    "Dermatology",
                    "Neurology",
                  ].map((item) => (
                    <a
                      key={item}
                      className="cursor-pointer text-base font-medium text-blue-100 transition hover:translate-x-1 hover:text-[#f4c430] md:text-xl"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-6 text-xl font-extrabold text-white md:text-2xl">
                  Explore
                </h4>

                <div className="flex flex-col gap-4">
                  {["Home", "About Us", "Doctors", "FAQs"].map((item) => (
                    <a
                      key={item}
                      className="cursor-pointer text-base font-medium text-blue-100 transition hover:translate-x-1 hover:text-[#f4c430] md:text-xl"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-6 text-xl font-extrabold text-white md:text-2xl">
                  Support
                </h4>

                <div className="flex flex-col gap-4">
                  {[
                    "Contact",
                    "Appointments",
                    "Privacy Policy",
                    "Terms & Conditions",
                  ].map((item) => (
                    <a
                      key={item}
                      className="cursor-pointer text-base font-medium text-blue-100 transition hover:translate-x-1 hover:text-[#f4c430] md:text-xl"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* WATERMARK */}
          <motion.h1
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="select-none text-center text-[clamp(42px,7vw,110px)] font-black  margin-bottom:20rem text-[#52a9ff45]"
          >
            Dr.Jeelan&apos;s Medical Hub
          </motion.h1>
        </div>
      </footer>

      <style jsx>{`
        .jeelan-footer {
          padding-top: 90px !important;
          padding-bottom: 45px !important;
          padding-left: clamp(24px, 5vw, 96px) !important;
          padding-right: clamp(24px, 5vw, 96px) !important;
        }

        .jeelan-footer-logo {
          height: 180px !important;
          width: auto !important;
          padding: 18px !important;
        }

        .jeelan-watermark {
          margin-top: 120px !important;
          color: #ffffff !important;
          opacity: 1 !important;
          text-shadow: 0 10px 35px rgba(0, 0, 0, 0.18) !important;
        }

        @media (max-width: 768px) {
          .jeelan-footer {
            padding-top: 60px !important;
            padding-bottom: 35px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .jeelan-footer-logo {
            height: 130px !important;
            padding: 14px !important;
          }

          .jeelan-watermark {
            margin-top: 95px !important;
          }
        }
      `}</style>
    </>
  );
}