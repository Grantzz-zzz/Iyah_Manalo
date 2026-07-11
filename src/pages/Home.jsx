import { motion } from "framer-motion";
import TripleReelHero from "../components/TripleReelHero";
import RevealText from "../components/RevealText";

export default function Home() {
  return (
    <div>
      <TripleReelHero
        reels={[
          { src: "/media/reel-3.mp4", poster: "/media/posters/reel-3.jpg" },
          { src: "/media/reel-1.mp4", poster: "/media/posters/reel-1.jpg" },
          { src: "/media/beauty-1.mp4", poster: "/media/posters/beauty-1.jpg" },
        ]}
        eyebrow="Model · Influencer · Manila"
        caption="Some faces are made for stillness. Mine moves."
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-[8vw] md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label mb-6">Iyah Manalo</p>
            <RevealText
              lines={["A face for", "the front row,", "a voice for", "the feed."]}
              className="font-display text-4xl leading-[1.05] md:text-6xl"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="measure text-lg text-ink-70"
            >
              Iyah Manalo is a Manila-based model and influencer working
              across editorial, runway, and campaign. This portfolio is a
              running record of the work — five reels, five moods, one
              point of view.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              href="/portfolio"
              className="label mt-8 inline-block border-b border-espresso pb-1"
            >
              View the Portfolio
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
