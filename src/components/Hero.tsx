import { Spotlight } from "./Spotlight";
import { FlipWords } from "./FlipWords";
function SpotlightPreview() {
  return (
    <div className="pt-20 h-[42rem] w-full  flex md:items-center md:justify-center bg-[#1A1C1F] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full  md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-3">
          Delivering{" "}
          <FlipWords words={["modern", "intelligent", "efficient"]} /> <br />
          web experiences.
        </h1>
        <p className="mt-2 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          We are the leaders in developing modern, intelligent and efficient web
          applications. <br />
          <br />
          <a
            href="#"
            className="text-xl text-black pt-3 pb-3 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md"
          >
            Book a Free Demo
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div>
      <SpotlightPreview />
    </div>
  );
}
