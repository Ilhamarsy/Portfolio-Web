import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center"
      >
        
      <BarLoader />
        </motion.div>
    </AnimatePresence>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-accent" />
      <motion.div variants={variants} className="h-12 w-2 bg-accent" />
      <motion.div variants={variants} className="h-12 w-2 bg-accent" />
      <motion.div variants={variants} className="h-12 w-2 bg-accent" />
      <motion.div variants={variants} className="h-12 w-2 bg-accent" />
    </motion.div>
  );
};

export default Loading;