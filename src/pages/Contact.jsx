import { useState } from "react";
import { motion } from "framer-motion";
import TripleReelHero from "../components/TripleReelHero";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "company", label: "Brand / Agency", type: "text" },
  { name: "email", label: "Email", type: "email" },
];

const opportunities = [
  {
    title: "Content Creation",
    description:
      "Luxury beauty, fashion, wellness & lifestyle content for Instagram, Facebook, and digital campaigns.",
  },
  {
    title: "Campaign Modeling",
    description:
      "Beauty campaigns • Makeup collections • Skincare launches • Commercial • Editorial • E-commerce",
  },
  {
    title: "Brand Partnerships",
    description:
      "Sponsored campaigns • Brand ambassadorships • PR collaborations • Event appearances",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your form backend / email service of choice.
    setSubmitted(true);
  };

  return (
    <div>
      <TripleReelHero
        reels={[
          { src: "media/posters/beauty-1.jpg", type: "image" },
          { src: "media/reel-5.mp4", poster: "media/posters/reel-5.jpg" },
          { src: "media/posters/beauty-2.jpg", type: "image" },
        ]}
        eyebrow="Enquiries"
        caption="Let's make something worth stopping the scroll for."
        contentOffsetY={16}
      />

      <section className="border-b border-sand px-6 py-20 md:px-[8vw] md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="label mb-10">Partnership Opportunities</p>
          <div className="grid border-t border-sand md:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <motion.article
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="border-b border-sand py-8 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
              >
                <p className="label mb-5 text-ink-70">0{index + 1}</p>
                <h2 className="mb-4 font-display text-2xl md:text-3xl">
                  {opportunity.title}
                </h2>
                <p className="measure leading-relaxed text-ink-70">
                  {opportunity.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-[8vw] md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label mb-6">Booking</p>
            <p className="measure text-ink-70 mb-10">
              For campaigns, editorial bookings, runway castings, and brand
              partnerships — reach out directly or use the form.
            </p>
            <dl className="space-y-6 border-t border-sand pt-6">
              <div>
                <dt className="label mb-1">Email</dt>
                <dd>
                  <a href="mailto:booking@iyahmanalo.com" className="hover:text-espresso">
                    booking@iyahmanalo.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-1">Based in</dt>
                <dd>Manila, Philippines · Available worldwide</dd>
              </div>
              <div>
                <dt className="label mb-1">Socials</dt>
                <dd className="flex gap-4 mt-1">
                  <a href="https://www.instagram.com/iyahmnl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="hover:text-espresso" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/iyah.manalo.10" className="hover:text-espresso" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display italic text-2xl"
              >
                Thank you — your enquiry has been sent. Expect a reply
                within 2–3 business days.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {fields.map((f) => (
                  <div key={f.name} className="border-b border-sand pb-3">
                    <label htmlFor={f.name} className="label mb-2 block">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      className="w-full bg-transparent font-display text-xl outline-none placeholder:text-ink-70/50"
                      placeholder={f.label}
                    />
                  </div>
                ))}

                <div className="border-b border-sand pb-3">
                  <label htmlFor="message" className="label mb-2 block">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none bg-transparent font-display text-xl outline-none placeholder:text-ink-70/50"
                    placeholder="Tell me about the project"
                  />
                </div>

                <button
                  type="submit"
                  className="label border border-espresso px-8 py-4 transition-colors hover:bg-espresso hover:text-bone"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
