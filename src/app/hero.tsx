"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              color="white"
              className="lg:max-w-3xl"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              EventGate
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              EventGate is a virtual event platform that allows you to host and attend events from anywhere in the world.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
