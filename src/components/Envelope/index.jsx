import { motion } from "framer-motion";

function Envelope({ onOpen }) {
  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 2 },
      }}
      className="bg-white shadow-lg rounded-lg p-8 w-72 h-40 flex items-center justify-center cursor-pointer text-center select-none border-4 border-pink-300"
      onClick={onOpen}
    >
      <p className="text-lg font-semibold text-pink-600">Abrir</p>
    </motion.div>
  );
}

export default Envelope;
