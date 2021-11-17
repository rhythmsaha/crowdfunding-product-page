import { motion } from "framer-motion";

const SuccessModal = ({ setSuccess }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black  bg-opacity-60 z-50 flex justify-center items-center overflow-auto noscroll">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.25 }}
                className="rounded-md shadow-xl bg-white p-8 mb-20 w-11/12 max-w-xl flex flex-col items-center text-center"
            >
                <div>
                    <img src="/images/icon-check.svg" alt="" />
                </div>
                <h1 className="mt-4 text-xl font-bold">
                    Thanks for your support!
                </h1>
                <p className="text-sm text-gray-500 mt-4">
                    Your pledge brings us one one step closer to sharing
                    Mastercraft Bamboo Monitor Riser worldwide. You will get an
                    email once our campaign is completed
                </p>
                <button
                    className="mt-5 px-6 py-3 bg-indigo-500 rounded-full text-white text-sm lg:text-base"
                    onClick={() => setSuccess(false)}
                >
                    Got it!
                </button>
            </motion.div>
        </div>
    );
};

export default SuccessModal;
