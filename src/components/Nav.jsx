import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Arrival" },
  { to: "/about", label: "The Face" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/runway", label: "Runway" },
  { to: "/contact", label: "Enquiries" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 z-50 w-full transition-colors duration-500 " +
        (scrolled ? "bg-bone/90 backdrop-blur-sm" : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-[8vw]">
        <NavLink to="/" className="font-display italic text-lg md:text-xl">
          Iyah Manalo
        </NavLink>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "label relative pb-1 transition-colors " +
                (isActive ? "text-espresso" : "hover:text-espresso")
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-espresso"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="label md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-bone md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="label absolute top-5 right-6"
              aria-label="Close menu"
            >
              Close
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl italic"
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
