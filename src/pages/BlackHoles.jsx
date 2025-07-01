// src/pages/BlackHoles.jsx
import { motion } from "framer-motion";
import sagittariusA from "../assets/images/blackholes/sagittarius-a.jpg";
import cygnusX1 from "../assets/images/blackholes/cygnus-x1.jpg";
import m87 from "../assets/images/blackholes/m87.jpg";



const blackHoles = [
  {
    name: "Sagittarius A*",
    description: "A supermassive black hole at the center of the Milky Way galaxy.",
    image: sagittariusA,
  },
  {
    name: "Cygnus X-1",
    description: "One of the strongest X-ray sources seen from Earth and among the first suspected black holes.",
    image: cygnusX1,
  },
  {
    name: "M87",
     description: "The first black hole ever imaged, located in the center of the Virgo A galaxy.",
      image: m87,

  },
];

const BlackHoles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Mysterious Black Holes
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {blackHoles.map((hole, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
    src={hole.image}
    alt={hole.name}
    className="w-full h-60 object-cover"
  />
            <h3 className="text-2xl font-semibold mb-2">{hole.name}</h3>
            <p className="text-gray-300">{hole.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlackHoles;