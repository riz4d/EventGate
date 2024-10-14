'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


export default function Component() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

const sections = [
    {
        title: "1. Participation",
        items: [
            "All participants must be at least 18 years old.",
            "Participants must adhere to the dress code specified for each event.",
            "The league reserves the right to disqualify any participant for misconduct."
        ]
    },
    {
        title: "2. Non-Transferable",
        items: [
            "This ticket is exclusively for your use and may not be transferred or shared with others."
        ]
    },
    {
        title: "3. Arrival Time",
        items: [
            "Please ensure you arrive at the check-in desk at least 45 minutes before the scheduled show time to secure your allocated seat.",
            "Admission will not be granted once check-in is closed."
        ]
    },
    {
        title: "4. Attendance Monitoring",
        items: [
            "Your ticket is monitored via QR Code and AI learning technology.",
            "Failure to attend after confirming your seat may result in the inability to attend future shows."
        ]
    },
    {
        title: "5. Dress Code",
        items: [
            "Dress in unique street-wear or elegant attire.",
            "Evening gowns are not permitted."
        ]
    },
    {
        title: "6. Check-In",
        items: [
            "Present this ticket upon check-in."
        ]
    },
    {
        title: "7. Media Recording and Broadcasting",
        items: [
            "By accepting this ticket, you acknowledge and agree that the event may be filmed and broadcasted on various channels and shows.",
            "Your presence at the event implies your consent to be filmed, and you grant the organizers the right to use your image, likeness, and voice in any broadcast, promotional, or marketing materials related to the event.",
            "If you do not wish to be filmed, please notify the event staff upon check-in."
        ]
    }
]

  return (
    <div className="min-h-screen p-8 flex items-center justify-center relative overflow-hidden py-16 px-4 mt-16">
      <Card className="w-full max-w-4xl bg-white">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center mb-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              International Designer League
            </motion.div>
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Terms and Conditions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section, index) => (
              <motion.section key={index} className="mb-6" variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <ul className="list-disc pl-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.li key={itemIndex} variants={itemVariants} className="mb-2">
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </motion.div>
        </CardContent>
      </Card>
      
    </div>
  )
}