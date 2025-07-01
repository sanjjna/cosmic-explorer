// src/pages/SolarSystem.jsx
import { motion } from "framer-motion";
import planetImages from "../data/planetImages";

const SolarSystem = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          Explore the Solar System
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {planetImages.map((planet, index) => (
            <motion.div
              key={planet.name}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
            >
              <img
                src={planet.image}
                alt={planet.name}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{planet.name}</h3>
                <p className="text-sm text-gray-400">{planet.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
