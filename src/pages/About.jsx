import { motion } from "framer-motion";
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
      <section className="mx-auto max-w-[1600px] px-6 pb-3 pt-20 md:px-[8vw] md:pb-4 md:pt-28">
        <p className="label text-[13px]">The Face</p>
      </section>

      <section className="grid gap-0 md:grid-cols-2">
        <div className="order-2 flex items-center justify-center bg-linen px-6 py-8 md:order-1 md:min-h-[100svh] md:py-12">
          <div className="w-full max-w-[min(100%,56.25svh)]">
            <VideoTile src="media/reel-2.mp4" poster="media/posters/reel-2.jpg" />
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-10 md:order-2 md:px-[6vw] md:py-24">
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

      <section className="border-t border-sand px-6 py-14 md:px-[8vw] md:py-28">
        <p className="label mb-7 md:mb-10">Aesthetic Clinic</p>
        <AestheticClinicBrochure />
      </section>
    </div>
  );
}
