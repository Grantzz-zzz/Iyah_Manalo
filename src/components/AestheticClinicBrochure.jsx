import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

function BrochurePage({ src, page, side }) {
  const videoRef = useInViewVideo({ threshold: 0.3 });

  return (
    <div className={`relative aspect-[9/16] min-w-0 overflow-hidden bg-linen ${side === "left" ? "rounded-l-sm" : "rounded-r-sm"}`}>
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />
      <span className="label absolute bottom-4 left-4 text-bone/90">Aesthetic {page}</span>
    </div>
  );
}

export default function AestheticClinicBrochure() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto grid w-full max-w-[820px] grid-cols-2 gap-[3px] bg-espresso p-2 shadow-[0_30px_70px_-25px_rgba(28,24,21,0.5)] md:gap-1 md:p-3"
      style={{ perspective: "1200px" }}
    >
      <BrochurePage src="media/Aesthetic-1.mp4" page="01" side="left" />
      <BrochurePage src="media/Aesthetic-2.mp4" page="02" side="right" />
      <div className="pointer-events-none absolute bottom-2 left-1/2 top-2 z-10 w-3 -translate-x-1/2 bg-gradient-to-r from-black/25 via-bone/10 to-black/25 blur-[1px] md:bottom-3 md:top-3" />
    </motion.div>
  );
}
