import { useEffect, useState } from "react";
import PRS from "../assets/PRS-new.png";
import SMB from "../assets/SMB-new2.png";

import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const images = [SMB, PRS];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full 
        flex flex-col lg:flex-row
        bg-gradient-to-b from-[#122E5C] via-[#0F2854] to-[#050E1F]
        lg:min-h-screen
        pb-48 lg:pb-0
      "
    >
      {/* KIRI — IMAGE */}
      <div className="relative w-full lg:w-[40%] flex justify-center items-center py-8 lg:py-0">
        <div className="relative mr-1 lg:ml-12 w-[85%] sm:w-[75%] lg:w-full aspect-square max-h-[420px] lg:max-h-[520px] overflow-hidden rounded-xl">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* KANAN — TEXT */}
      <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-20 mt-10 lg:mt-0">
        <div className="text-center lg:text-left text-white w-full">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight lg:whitespace-nowrap">
            Pramuka{" "}
            <span className="text-orange-500">Universitas Sriwijaya</span>
          </h1>

          <p className="mt-5 text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pramuka Universitas Sriwijaya berkomitmen membangun karakter,
            kepemimpinan, dan kolaborasi melalui kegiatan kepramukaan yang
            terstruktur dan profesional.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="mt-6 flex justify-center lg:justify-start gap-5">
            <a
              href="https://instagram.com/pramuka.unsri"
              target="_blank"
              className="text-white/70 hover:text-orange-500 transition text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@pramuka.universitas.sriwijaya"
              target="_blank"
              className="text-white/70 hover:text-orange-500 transition text-xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="mailto:pramuka.universitas.sriwijaya@gmail.com"
              className="text-white/70 hover:text-orange-500 transition text-xl"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://tiktok.com/@pramuka_unsri"
              target="_blank"
              className="text-white/70 hover:text-orange-500 transition text-xl"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            {/* <a
              href="https://facebook.com"
              target="_blank"
              className="text-white/70 hover:text-orange-500 transition text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a> */}
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative">
            {/* MoU */}
            <a
              href="#mou"
              className="px-8 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
            >
              MoU & Kerja Sama
            </a>

            {/* Contact */}
            <div className="relative">
              <button
                onClick={() => setOpenContact(!openContact)}
                className="
                  px-8 py-3
                  border border-white
                  text-white rounded-md font-semibold
                  hover:bg-white hover:text-[#0F2854]
                  transition
                  w-full sm:w-auto
                "
              >
                Contact Person
              </button>

              {/* DROPDOWN */}
              {openContact && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 sm:left-0 sm:translate-x-0 w-56 rounded-md bg-white shadow-xl overflow-hidden z-50">
                  <a
                    href="https://wa.me/6282278355698"
                    className="block px-4 py-3 text-[#0F2854] hover:bg-gray-100 transition"
                  >
                    Revanola Gusti Syahrani
                  </a>
                  <a
                    href="https://wa.me/6282282816854"
                    className="block px-4 py-3 text-[#0F2854] hover:bg-gray-100 transition"
                  >
                    Ridho Mulya
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
