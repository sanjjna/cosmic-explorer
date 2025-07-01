// src/pages/Missions.jsx
import { motion } from "framer-motion";
import apollo11 from "../assets/images/missions/apollo11.jpg";
import voyager1 from "../assets/images/missions/voyager1.jpg";
import perseverance from "../assets/images/missions/perseverance.jpg";
import chandrayaan3 from "../assets/images/missions/chandrayaan3.jpg";


const missions = [
  {
    title: "Apollo 11",
    year: 1969,
    description: "First manned Moon landing by NASA, featuring Neil Armstrong and Buzz Aldrin.",
 image: apollo11,
  },
  {
    title: "Voyager 1",
    year: 1977,
    description: "Launched to study the outer Solar System and now the farthest human-made object from Earth.",
image: voyager1,
  },
  {
    title: "Mars Perseverance",
    year: 2020,
    description: "NASA's mission to search for signs of ancient life and collect Martian soil samples.",
image: perseverance,
  },
  {
    title: "Chandrayaan-3",
    year: 2023,
    description: "India's lunar mission that successfully landed on the Moon's south pole.",
    image: chandrayaan3,
  },
];

const Missions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Historic Space Missions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
                
  <img
    src={mission.image}
    alt={mission.title}
    className="w-full h-56 object-cover"
  />
              <h3 className="text-2xl font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-400 text-sm mb-2">Year: {mission.year}</p>
              <p className="text-gray-300">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;
