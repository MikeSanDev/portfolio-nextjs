import Carousel from "@/components/Carousel";
import Embed from "@/components/Embed";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

// ---------------------- EMBED DATA ---------------------- //

// Instagram embeds for Dance section
const danceSlides = [
  <Embed key="ig1" src="https://www.instagram.com/p/YOUR_POST_ID/embed" title="Dance clip 1" />,
  <Embed key="ig2" src="https://www.instagram.com/p/YOUR_POST_ID_2/embed" title="Dance clip 2" />,
  <Embed key="ig3" src="https://www.instagram.com/reel/YOUR_REEL_ID/embed" title="Dance clip 3" />,
];

// SoundCloud embed for DJing section
const djSoundcloudEmbed =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

// Demo images for Graphic Design section
const demoImages = [
  { src: "/assets/design1.jpg", alt: "Design 1" },
  { src: "/assets/design2.jpg", alt: "Design 2" },
  { src: "/assets/design3.jpg", alt: "Design 3" },
];

export default function Creative() {
  return (
    <>
      {/* ------------------------------------------- */}
      {/* HERO + OVERVIEW */}
      {/* ------------------------------------------- */}
      <div className="w-full no-scroll-x">
        {/* Hero Section */}
        <div className="w-screen h-[30vh] lg:h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/40 z-10" />
          <Image
            src="/assets/me_banner.jpg"
            alt="me"
            fill
            className="absolute inset-0 w-full h-full object-cover z-1"
            priority
          />
          <div className="proj_header_text absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
            <h2 className="proj_title mb-2 py-2 pl-6">Creative Journey</h2>
          </div>
        </div>

        {/* Overview Section */}
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <h2 className="ov_title text-accentColor mb-2">Overview</h2>
            <p className="text-white">
              Beyond coding, I&apos;m passionate about various creative disciplines that fuel my artistic
              expression and complement my technical skills. Each hobby has shaped my perspective and
              enhanced my problem-solving as a developer.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* DANCE SECTION */}
      {/* ------------------------------------------- */}
      <div className="max-w-[1240px] mx-auto p-6">
        <h2 className="text-5xl font-bold text-accentColor mb-6 text-center">Dance</h2>
        <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto text-center mb-10">
          From popping to freestyle, dance has been my foundation of expression and rhythm.
          I&apos;ve performed, battled, and led projects that merge artistry with community.
        </p>

        {/* Achievements */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-semibold text-accentColor mb-4">Achievements</h3>
          <ul className="space-y-3">
            <li className="text-white text-lg">
              <span className="text-accentColor mr-3 text-xl">•</span> Danced in a Samsung Commercial
            </li>
            <li className="text-white text-lg">
              <span className="text-accentColor mr-3 text-xl">•</span> Leader of Yokai Dance Crew, Chicago IL
            </li>
          </ul>
        </div>

        {/* Instagram Embed */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-900">
            <div className="absolute inset-0">{danceSlides[0]}</div>
          </div>
        </div>

        {/* External Link */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.instagram.com/_.kuya.mike._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 text-white text-lg bg-mainColor hover:bg-opacity-80 transition-colors rounded proj-btn">
              Instagram
            </button>
          </a>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* DJING SECTION */}
      {/* ------------------------------------------- */}
      <div className="border-t border-gray-700 my-12" />
      <section className="w-full py-24 px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16 space-y-8">
            <h2 className="text-5xl font-bold text-accentColor mb-6">DJing</h2>
            <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto">
              Mixing across Hip-Hop, Amapiano, House, and R&amp;B. My sets are built for dancers —
              groove, pocket, and flow over pure drops.
            </p>

            {/* Achievements */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-accentColor mb-4">Achievements</h3>
              <ul className="space-y-3">
                <li className="text-white text-lg">
                  <span className="text-accentColor mr-3 text-xl">•</span> Resident DJ at Club XYZ (2022–2023)
                </li>
                <li className="text-white text-lg">
                  <span className="text-accentColor mr-3 text-xl">•</span> Featured at Summer Music Festival 2023
                </li>
              </ul>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://soundcloud.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 text-white text-lg bg-mainColor hover:bg-opacity-80 transition-colors rounded proj-btn">
                  SoundCloud
                </button>
              </a>
              {/* Add YouTube button later */}
            </div>
          </div>

          {/* SoundCloud Embed */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative h-[220px] overflow-hidden rounded-lg bg-gray-900">
              <div className="absolute inset-0">
                <Embed src={djSoundcloudEmbed} title="SoundCloud mix" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* GRAPHIC DESIGN SECTION */}
      {/* ------------------------------------------- */}
      <div className="border-t border-gray-700 my-12" />
      <h2 className="text-5xl font-bold text-accentColor mb-6 text-center">Graphic Design</h2>
      <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto text-center mb-10">
        Visual storytelling through digital art. I create brand identities, posters, and apparel
        designs that merge culture with clean design principles.
      </p>
      <Carousel images={demoImages} />
      <div className="flex justify-center py-10">
                <Link href="/creative#top">
                  <div className="rounded-full shadow-lg shadow-gray-900 p-4 bg-[#5c4c68] cursor-pointer hover:scale-110 ease-in duration-300 text-accentColor"
                    title="Back to the top">
                    <HiOutlineChevronDoubleUp size={30} className="m-auto" />
                  </div>
                </Link>
              </div>
    </>
  );
}
