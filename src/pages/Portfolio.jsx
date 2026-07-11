import { motion } from "framer-motion";
import ImageBouquet from "../components/ImageBouquet";
import VideoTile from "../components/VideoTile";
import RevealText from "../components/RevealText";

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `media/gallery-${i + 1}.jpg`,
  alt: `Iyah Manalo — editorial image ${i + 1}`,
}));

const featuredWorks = [
  { src: "media/Featured-Works-1.mp4", poster: "media/posters/Featured-Works-1.jpg", label: "Campaign 01" },
  { src: "media/Featured-Works-2.mp4", poster: "media/posters/Featured-Works-2.jpg", label: "Campaign 02" },
  { src: "media/Featured-Works-3.mp4", poster: "media/posters/Featured-Works-3.jpg", label: "Campaign 03" },
  { src: "media/Featured-Works-4.mp4", poster: "media/posters/Featured-Works-4.jpg", label: "Campaign 04" },
  { src: "media/Featured-Works-5.mp4", label: "Campaign 05" },
];

export default function Portfolio() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-10 md:px-[8vw] md:pt-40">
        <p className="label mb-6">Selected Work</p>
        <RevealText
          lines={["A moodboard,", "not a gallery."]}
          className="font-display text-4xl leading-[1.05] md:text-6xl"
        />
      </section>

      <section className="px-6 py-16 md:px-[8vw] md:py-24">
        <ImageBouquet images={galleryImages} />
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-[8vw] md:py-28">
        <div className="mb-12 flex items-end justify-between border-b border-sand pb-6">
          <p className="label">Featured Works</p>
          <p className="label text-ink-70 hidden md:block">05 Campaigns</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {featuredWorks.map((w, i) => (
            <VideoTile key={w.src} src={w.src} poster={w.poster} label={w.label} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label mt-8 text-ink-70"
        >
          Hover to preview · full campaigns on request
        </motion.p>
      </section>
    </div>
  );
}
