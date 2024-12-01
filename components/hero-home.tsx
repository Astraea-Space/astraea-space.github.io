"use client";
import PageIllustration from "@/components/page-illustration";
import AnimatedTimeline from "@/components/animated-timeline";

export default function HeroHome() {
  return (
    <section className="relative h-screen w-screen bg-black text-white">
      <PageIllustration />
      <div className="w-screen px-4 sm:px-6 bg-black">
        {/* Hero content */}
        <div className=" pt-32 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <img src="images/moonbg.jpg" className="transition animate-pulse duration-[8000ms] absolute top-0 h-screen w-screen object-cover brightness-[35%]"/>
            <h1
              className="mb-6 text-5xl text-white font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Bringing Pharmaceutical<br className="max-lg:hidden" />
              Payloads To The Moon
            </h1>
            <div className="mx-auto max-w-3xl pt-2">
              <p
                className="mb-8 text-lg"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Astrea is ensuring safe and effective medication for lunar missions with an autonomous system that monitors drug integrity in space environments.
              </p>
              {/* <AnimatedTimeline></AnimatedTimeline> */}
              <div className="mt-4 relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.violet.400/.8),transparent)1]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
