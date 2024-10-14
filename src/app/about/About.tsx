'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is the International Designer League (IDL)",
      answer: "an exclusive platform that brings together emerging and renowned fashion designers from around the world to showcase their creativity and collections. This event offers designers a chance to gain international exposure, collaborate with industry professionals, and reach a global audience."
    },
    {
      question: "What is the date of the event?",
      answer: "The event is scheduled for November 16th, 2024."
    },
    {
      question: "What time does the event start?",
      answer: "Guest entry begins at 6:30 PM. The show starts at 7:00 PM."
    },
    {
      question: "When is the last date for designer registration?",
      answer: "The last date to register as a designer is November 10th, 2024."
    },
    {
      question: "How can I register as a designer?",
      answer: "You can register as a designer via the official portal. (Include the link here)."
    },
    {
      question: "What is the dress code for guests?",
      answer: "There is no official dress code, but attendees are encouraged to dress fashionably for the occasion."
    },
    {
      question: "Will there be any special guests or celebrity appearances?",
      answer: "Yes, there will be special guests and celebrities, but details will be revealed closer to the event date."
    },
    {
      question: "Are tickets required to attend the event?",
      answer: "Yes, tickets are required for guest entry. Ticket details and prices can be found on the event portal. (Include the link here)."
    }
  ]

  return (
    <div className="min-h-screen sm:px-6 lg:px-8 items-center justify-center relative overflow-hidden py-16 px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          About Us
        </h1>
        <p className="mt-5 text-base text-center text-gray-500">
          Discover the world of fashion at its finest
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-16 max-w-3xl mx-auto"
      >
        <Card>
          <CardContent className="p-6 bg-gray-50 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">The Fashion League Event</h2>
            <p className="text-gray-600 mb-4">
              The Indian Designer League (IDL) is a prominent fashion event that showcases both established and emerging designers, primarily from India. It provides a platform for designers to present their collections to a wide audience, including fashion enthusiasts, buyers, media, and influencers.
            </p>
            <p className="text-gray-600">
            The event focuses on promoting the Indian fashion industry on an international stage, highlighting the rich diversity of Indian fashion, from traditional attire to modern and fusion designs.IDL typically features runway shows, fashion exhibitions, and networking opportunities, making it a key event in the South Asian fashion calendar. It aims to create a global presence for Indian designers and connect them with global markets and trends.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <Card key={index} className="mb-4 bg-gray-50 rounded-lg">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full justify-between p-4 text-left font-semibold"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </Button>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}