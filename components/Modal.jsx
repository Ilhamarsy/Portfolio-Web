import { AnimatePresence, motion } from 'framer-motion';
import { FaRegCheckCircle } from 'react-icons/fa';

const Modal = ({ isOpen, setIsOpen, setContact }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-accent/50 to-accent text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FaRegCheckCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-accent grid place-items-center mx-auto">
                <FaRegCheckCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">Success!</h3>
              <p className="text-center mb-6">Thank you for contacting me! Your message has been successfully submitted. I'll get back to you as soon as possible.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContact({
                      firstname: '',
                      lastname: '',
                      email: '',
                      message: '',
                    })
                    setIsOpen(false)
                  }}
                  className="bg-white hover:opacity-90 transition-opacity text-accent font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
                {/* <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-accent font-semibold w-full py-2 rounded text-center"
                >
                  Back to Home
                </Link> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
