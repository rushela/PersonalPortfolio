export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] overflow-hidden"
      style={{ background: 'var(--bg-hero)' }}
    >
      <div className="relative mx-auto h-[100dvh] w-full max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <h1
          className="pointer-events-none absolute left-1/2 top-[34%] z-10 hidden -translate-x-1/2 -translate-y-1/2 text-[clamp(2.5rem,6.6vw,5.7rem)] font-medium italic leading-none md:block"
          style={{ fontFamily: 'Georgia, serif', color: 'var(--text-subheading)' }}
        >
          <span className="inline-block pr-[1.4em]">Hey,</span>
          <span className="inline-block ml-[1.4em]">there</span>
        </h1>

        <div className="absolute bottom-0 left-1/2 z-20 w-[clamp(22rem,82vw,28rem)] -translate-x-1/2 md:w-[clamp(20rem,35vw,34rem)]">
          <img
            src="/assets/gv_copy.png"
            alt="Gavindu Rushela Ekanayaka - Software Engineer"
            className="h-auto w-full object-contain object-bottom"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <h1
          className="mx-auto mt-8 max-w-[20rem] text-center text-[clamp(1.9rem,9.8vw,3.2rem)] italic leading-none md:hidden"
          style={{ fontFamily: 'Georgia, serif', color: 'var(--text-subheading)' }}
        >
          <span className="inline-block pr-[0.25em]">Hey,</span>
          <span className="inline-block ml-[0.2em]">there</span>
        </h1>

        <div className="mx-auto mt-3 flex w-full max-w-[26rem] flex-col items-center gap-1 px-2 text-center md:hidden">
          <h2
            className="whitespace-nowrap text-[clamp(1.2rem,6.4vw,1.7rem)] italic leading-none"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 500 }}
          >
            I AM RUSHELA
          </h2>
          <h2
            className="whitespace-nowrap text-[clamp(1.2rem,6.4vw,1.7rem)] italic leading-none"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 500 }}
          >
            SOFTWARE ENGINEER
          </h2>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-5 z-30 hidden text-left sm:bottom-10 sm:left-8 sm:block lg:left-12">
          <h2
            className="text-[clamp(1.45rem,3.9vw,3.25rem)] italic leading-[0.95]"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 500 }}
          >
            I AM
            <br />
            RUSHELA
          </h2>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-5 z-30 hidden text-right sm:bottom-10 sm:right-8 sm:block lg:right-12">
          <h2
            className="text-[clamp(1.45rem,3.9vw,3.25rem)] italic leading-[0.95]"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 500 }}
          >
            SOFTWARE
            <br />
            ENGINEER
          </h2>
        </div>

      </div>
    </section>
  );
};
