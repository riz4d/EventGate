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

export function SponsoredBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-8 px-8 lg:py-20" id="partners">
        <div className="container mx-auto text-center">
          <Typography variant="h5" color="textPrimary" className="mb-8 font-semibold">
            PARTNERS OF 2024
          </Typography>
          <div className="py-10 flex flex-wrap items-center justify-center gap-6">
            {SPONSORS.map((logo, key) => (
              <Image
                width={256}
                height={256}
                key={key}
                src={`/logos/logo-${logo}.png`}
                alt={`${logo} logo`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default SponsoredBy;
