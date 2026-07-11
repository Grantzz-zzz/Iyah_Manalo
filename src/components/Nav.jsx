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

  const openMenu = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setOpen(true);
  };

  return (
    <header
      className={
        "sticky top-0 z-50 w-full transition-colors duration-500 md:fixed " +
        (scrolled || open ? "bg-bone/95 backdrop-blur-sm" : "bg-transparent")
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
          onClick={open ? () => setOpen(false) : openMenu}
          className="label md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sand bg-bone md:hidden"
          >
            <div className="grid grid-cols-2 gap-x-6 px-6 py-8">
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="border-b border-sand py-4"
              >
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl italic"
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
