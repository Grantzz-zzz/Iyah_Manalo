import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import VideoTile from "../components/VideoTile";
import AestheticClinicBrochure from "../components/AestheticClinicBrochure";

const stats = [
  ["Based", "Manila, Philippines"],
  ["Available", "Worldwide"],
  ["Focus", "Editorial · Runway · Campaign"],
  ["Represented by", "Available on enquiry"],
];

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 pt-32 pb-16 md:px-[8vw] md:pt-40">
        <p className="label mb-6">The Face</p>
        <RevealText
          lines={["Not just in front", "of the camera —"]}
          className="font-display text-4xl leading-[1.05] md:text-6xl"
        />
      </section>

      <section className="grid gap-0 md:grid-cols-2">
        <div className="order-2 flex min-h-[70svh] items-center justify-center bg-linen px-6 py-12 md:order-1 md:min-h-[100svh]">
          <div className="w-full max-w-[min(100%,56.25svh)]">
            <VideoTile src="media/reel-2.mp4" poster="media/posters/reel-2.jpg" />
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-16 md:order-2 md:px-[6vw] md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display italic text-2xl md:text-3xl mb-8 measure"
          >
            "I've always thought a good photo should feel like a
            sentence you can't quite finish."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="measure text-ink-70 mb-10"
          >
            Iyah started in front of a phone camera and found her way to
            fashion week backstage areas, beauty campaigns, and editorial
            sets. What stayed constant is the same restraint she brings to
            every frame — less performance, more presence.
          </motion.p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand pt-8">
            {stats.map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <dt className="label mb-1">{label}</dt>
                <dd className="text-sm">{value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-sand px-6 py-20 md:px-[8vw] md:py-28">
        <p className="label mb-10">Aesthetic Clinic</p>
        <AestheticClinicBrochure />
        <div className="hidden">
          {["gallery-7.jpg", "gallery-8.jpg"].map((src, i) => (
            <motion.img
              key={src}
              src={`media/${src}`}
              alt="Iyah Manalo — editorial still"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-[3/4] w-full object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
