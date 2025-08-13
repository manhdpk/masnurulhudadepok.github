import openingVideo from "@/assets/Opening.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        src={openingVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay untuk gelap tipis */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten di atas video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang di MA Nurul Huda
        </h1>
        <p className="text-lg max-w-2xl">
          Madrasah yang mengedepankan pendidikan berkualitas dan akhlak mulia
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
