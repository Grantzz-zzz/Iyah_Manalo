import { motion } from "framer-motion";

/**
 * Wraps a headline/paragraph so it reveals line-by-line on scroll into
 * view. Splitting is done by the caller passing an array of lines rather
 * than a paid SplitText plugin.
 */
export default function RevealText({ as: Tag = "h2", lines, className = "" }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
