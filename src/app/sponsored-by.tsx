"use client";

import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import { motion } from 'framer-motion';

const SPONSORS = [
  "muacrystal",
  "sd",
  "red",
  "diamond",
];

const AnimatedIcon = ({ icon: Icon, delay }: { icon: React.ElementType, delay: number }) => (
  <motion.div
    className="absolute text-gray-500 opacity-20"
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatType: 'loop'
    }}
    style={{
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }}
  >
    <Icon size={48} />
  </motion.div>
)

const AnimatedText = ({ text, delay }: { text: string, delay: number }) => (
  <motion.div
    className="absolute text-gray-500 opacity-20 font-bold text-2xl"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: 'reverse'
    }}
    style={{
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }}
  >
    {text}
  </motion.div>
)

export function SponsoredBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <Typography variant="h5" color="blue-gray" className="mb-8">
            PARTNERS OF 2024
          </Typography>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {SPONSORS.map((logo, key) => (
              <Image
                width={256}
                height={256}
                key={key}
                src={`/logos/logo-${logo}.png`}
                alt={logo}
                className="w-40"
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default SponsoredBy;
