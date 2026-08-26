/** Design: Black Signal Theatre — a fast handwritten-stroke portal introduces the homepage in the reference’s kinetic spirit. */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroPortal() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(false); return; }
    const timer = window.setTimeout(() => setVisible(false), 1520);
    return () => window.clearTimeout(timer);
  }, []);

  return <AnimatePresence>{visible && <motion.div aria-hidden="true" className="intro-portal" exit={{ opacity: 0, scale: 1.06, transition: { duration: .38, ease: [0.76, 0, 0.24, 1] } }}>
    <motion.span animate={{ opacity: [0, 1, 1], rotate: [-9, -3, -3], scale: [.82, 1, 1.14], y: [24, 0, -4] }} className="intro-script typewriter" transition={{ duration: 1.34, times: [0, .42, 1], ease: [0.23, 1, 0.32, 1] }}>hello</motion.span>
    <motion.span animate={{ opacity: [0, .72, 0], scaleX: [0, 1, 1.45] }} className="intro-trace" transition={{ delay: .18, duration: 1.06, ease: [0.23, 1, 0.32, 1] }} />
    <motion.span animate={{ opacity: [0, 1, 0], y: [8, 0, -5] }} className="intro-index" transition={{ delay: .36, duration: .93, ease: "easeOut" }}>signal / 0001</motion.span>
  </motion.div>}</AnimatePresence>;
}
