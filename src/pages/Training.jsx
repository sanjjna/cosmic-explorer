// src/pages/Training.jsx
import { motion } from "framer-motion";
import zerogravity from "../assets/images/training/zerogravity.jpg";
import spacewalk from "../assets/images/training/spacewalk.jpg";
import rocketSafety from "../assets/images/training/rocketSafety.jpg";


const trainingModules = [
  {
    title: "Zero Gravity Simulation",
    detail: "Train like an astronaut with weightlessness experiences in simulators.",
    image : zerogravity,
  },
  {
    title: "Spacewalk Preparation",
    detail: "Learn to handle suits, tethers, and tools in a mock space environment.",
     image: spacewalk,
  },
  {
    title: "Rocket Launch Safety",
    detail: "Understand safety protocols and emergency procedures for rocket launches.",
    image: rocketSafety,
  },
];

const Training = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Space Training Programs
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {trainingModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
             <img
    src={module.image}
    alt={module.title}
    className="w-full h-40 object-cover rounded-md mb-4"
  />
            <h3 className="text-2xl font-semibold mb-2">{module.title}</h3>
            <p className="text-gray-300">{module.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Training;
