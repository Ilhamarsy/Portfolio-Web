'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const SlideTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}> 
          <motion.div
          />
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[1002]">
            <motion.div
              className="h-full w-full bg-accent relative origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white h1">ham.arsy</h1>
              </div>
            </motion.div>
          </div>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[1002]">
            <motion.div
              className="h-full w-full bg-accent relative origin-bottom"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }} 
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white h1">ham.arsy</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default SlideTransition;
