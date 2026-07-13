import { motion } from "framer-motion";
import TripleReelHero from "../components/TripleReelHero";
import VideoTile from "../components/VideoTile";
import RevealText from "../components/RevealText";

const beautyReel = [
  { src: "media/beauty-1.mp4", poster: "media/posters/beauty-1.jpg", label: "Beauty 01" },
  { src: "media/beauty-2.mp4", poster: "media/posters/beauty-2.jpg", label: "Beauty 02" },
  { src: "media/beauty-3.mp4", poster: "media/posters/beauty-3.jpg", label: "Beauty 03" },
  { src: "media/beauty-4.mp4", poster: "media/posters/beauty-4.jpg", label: "Beauty 04" },
  { src: "media/beauty-5.mp4", poster: "media/posters/beauty-5.jpg", label: "Beauty 05" },
];

export default function Runway() {
  return (
    <div>
      <TripleReelHero
        reels={[
          { src: "media/beauty-4.mp4", poster: "media/posters/beauty-4.jpg" },
          { src: "media/reel-4.mp4", poster: "media/posters/reel-4.jpg" },
          { src: "media/beauty-5.mp4", poster: "media/posters/beauty-5.jpg" },
        ]}
        eyebrow="On the Runway"
      />

      <section className="mx-auto max-w-[1600px] px-6 py-14 md:px-[8vw] md:py-32">
        <p className="label mb-6">Beauty Editorial</p>
        <RevealText
          lines={["Close enough to see", "the details that don't", "make it to the runway."]}
          className="font-display text-3xl leading-[1.1] md:text-5xl mb-10 md:mb-16 measure"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {beautyReel.map((b, i) => (
            <VideoTile key={b.src} src={b.src} poster={b.poster} label={b.label} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-sand px-6 py-14 md:px-[8vw] md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2 md:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display measure text-2xl italic md:text-3xl"
          >
            "Runway isn't performance — it's twelve seconds of complete
            honesty."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="measure text-ink-70"
          >
            From backstage prep to the final walk, Iyah's runway work spans
            local and international shows. Press kits and full show reels
            available on request for casting and booking teams.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
