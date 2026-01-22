import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col md:flex-row">
      {/* Video Section - Full height on desktop, half on mobile */}
      <div className="relative h-1/2 w-full md:h-full md:w-1/2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>

        {/* V Logo - Bottom left corner */}
        <div className="absolute bottom-6 left-6 z-10">
          <Image
            src="/assets/v-logo.png"
            alt="Valeron logo"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-[#141414] px-8 md:h-full md:w-1/2 md:px-16">
        <div className="flex flex-col items-center md:items-start">
          {/* VALERON Wordmark */}
          <Image
            src="/assets/valeron-wordmark.png"
            alt="VALERON"
            width={280}
            height={48}
            className="mb-8 h-auto w-48 md:w-64 lg:w-72"
            priority
          />

          {/* Tagline */}
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-white md:text-left md:text-base lg:text-lg">
            The best way to predict the future
            <br />
            is to invent it.
          </p>
        </div>
      </div>
    </main>
  );
}
