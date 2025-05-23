import { motion } from "framer-motion";
import women from "@assets/images/women.png";

function Card({ name }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full text-center border-4 border-pink-300"
    >
      <img
        src={women}
        alt="Feliz día de las madres"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-pink-600 mb-2">
        ¡Feliz día de las madres!
      </h2>
      <p className="text-gray-700">
        A la mamá más maravillosa del mundo,{" "}
        <span className="font-semibold text-pink-500">{name}</span>
      </p>
    </motion.div>
  );
}

export default Card;
