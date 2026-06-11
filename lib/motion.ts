import { Variants } from "framer-motion";

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  }
});

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const cardHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.01,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
