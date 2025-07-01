// src/pages/Home.jsx
import { motion } from "framer-motion";
import planetImg from "../assets/images/planets/earth.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center mb-8"
        >
          Welcome to Cosmic Explorer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-center max-w-2xl mx-auto"
        >
          Journey through the cosmos — explore planets, missions, black holes, and space training like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <img
            src={planetImg}
            alt="Earth"
            className="w-full max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
