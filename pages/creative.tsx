import Carousel from "@/components/Carousel";
import Embed from "@/components/Embed";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

// ---------------------- EMBED DATA ---------------------- //

// Dance video slides (local MP4s)
const danceSlides = [
  <video
    key="dance1"
    src="/assets/projects/creative_vids/samsung.mp4"
    className="w-full h-full object-cover rounded-lg"
    autoPlay
    muted
    loop
    playsInline
  />,
  <video
    key="dance2"
    src="/assets/projects/creative_vids/collab.mp4"
    className="w-full h-full object-cover rounded-lg"
    autoPlay
    muted
    loop
    playsInline
  />,
  <video
    key="dance3"
    src="/assets/projects/creative_vids/animationbattle.mov"
    className="w-full h-full object-cover rounded-lg"
    autoPlay
    muted
    loop
    playsInline
  />,
];

// SoundCloud embed for DJing section
const djSoundcloudEmbed =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const soundcloudTrackIds = [
  "2090047866", // Pop Fiction Vol.1
  "2104657263", // Mech Motion Vol.1
  "2128409652", // The Foundation 80s NY Hip Hop
];
// Build slides for the DJ carousel
const djSlides = soundcloudTrackIds.map((id, idx) => (
  <iframe
    key={id}
    width="100%"
    height="100%"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
    className="rounded-lg"
    title={`SoundCloud mix ${idx + 1}`}
  />
));
// Demo images for Graphic Design section
// Clothing design images
const clothingImages = [
  { src: "/assets/projects/clothing_design1.png", alt: "clothing_design1" },
  { src: "/assets/projects/clothing_design2.png", alt: "clothing_design2" },
  { src: "/assets/projects/clothing_design3.png", alt: "clothing_design3" },
];

// Album cover designs
const albumCoverImages = [
  { src: "/assets/projects/album_cover1.png", alt: "album_cover1" },
  { src: "/assets/projects/album_cover2.png", alt: "album_cover2" },
  { src: "/assets/projects/album_cover3.png", alt: "album_cover3" },
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
            src="/assets/flag.png"
            alt="me"
            fill
            className="absolute inset-0 w-full h-full object-cover z-1"
            priority
          />
          <div className="proj_header_text absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
            <h2 className="proj_title mb-2 py-2 pl-6"></h2>
          </div>
        </div>

      {/* Overview Section */}
      <div className="max-w-[1240px] mx-auto p-10 mb-10 text-center">
        <h2 className="text-5xl font-bold text-accentColor mb-6">My Creative Journey</h2>

        <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto">
          Beyond coding, I&apos;m passionate about various creative disciplines that fuel my artistic
          expression and complement my technical skills. Each hobby has shaped my perspective and
          enhanced my problem-solving as a developer.
        </p>
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
            <li className="text-white text-lg">
              <span className="text-accentColor mr-3 text-xl">•</span> Top 8 Finalist at Midwest Animation Battle 
            </li>
          </ul>
        </div>

          {/* Instagram Embed */}
        <Carousel slides={danceSlides} />

        {/* External Link */}
        {/* <div className="flex justify-center mt-8">
          <a
            href="https://www.instagram.com/_.kuya.mike._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 text-white text-lg bg-mainColor hover:bg-opacity-80 transition-colors rounded proj-btn">
              Instagram
            </button>
          </a>
        </div> */}
      </div>

      {/* ------------------------------------------- */}
      {/* DJING SECTION */}
      {/* ------------------------------------------- */}
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
                href="https://soundcloud.com/michael-sanchez-186"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 text-white text-lg bg-mainColor hover:bg-opacity-80 transition-colors rounded proj-btn">
                  SoundCloud
                </button>
              </a>
              <a
                href="https://www.youtube.com/@DJ-Kuyami"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 text-white text-lg bg-mainColor hover:bg-opacity-80 transition-colors rounded proj-btn">
                  Youtube
                </button>
              </a>
              {/* Add YouTube button later */}
            </div>
          <Carousel
            slides={djSlides}
            className="mt-2"
            frameClassName="h-[260px] md:h-[300px]"
          />
        </div>
          </div>

          {/* SoundCloud Embed */}
      </section>

      {/* ------------------------------------------- */}
      {/* GRAPHIC DESIGN SECTION */}
      {/* ------------------------------------------- */}
      <h2 className="text-5xl font-bold text-accentColor mb-6 text-center">Graphic Design</h2>
      <p className="text-white text-xl leading-relaxed max-w-4xl mx-auto text-center mb-10">
        Visual storytelling through digital art. I created the logo for my dance crew, designed our clothing and
        album covers that capture the essence of the music mixes I have created. 
      </p>

          {/* Clothing Designs */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-accentColor text-center mb-4">
              Clothing Designs
            </h3>
            <Carousel
              images={clothingImages}
              imageFit="contain"
              className="max-w-2xl"
              frameClassName="aspect-square"
            />
          </div>
          {/* Album Covers */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-accentColor text-center mb-4">
              Album Covers
            </h3>
            <Carousel
              images={albumCoverImages}
              imageFit="contain"
              className="max-w-2xl"
              frameClassName="aspect-square"
            />
          </div>
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
