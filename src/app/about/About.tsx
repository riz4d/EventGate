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
      question: "What is EventGate?",
      answer: "EventGate is a virtual event platform that allows you to host and attend events from anywhere in the world. It's open-source and designed to provide a seamless event experience."
    },
    {
      question: "How can I host an event on EventGate?",
      answer: "To host an event on EventGate, you need to create an account, set up your event details, and publish it. You can customize your event page and manage registrations through the platform."
    },
    {
      question: "Is EventGate free to use?",
      answer: "Yes, EventGate is open-source and free to use. However, there may be additional costs if you choose to use third-party services or integrations."
    },
    {
      question: "Can I attend events without an account?",
      answer: "Yes, you can attend public events without an account. However, creating an account allows you to register for events, receive updates, and access additional features."
    },
    {
      question: "What types of events can I host on EventGate?",
      answer: "You can host a wide range of events on EventGate, including conferences, webinars, workshops, meetups, and more. The platform is flexible and can be tailored to suit different event types."
    },
    {
      question: "How do I join an event on EventGate?",
      answer: "To join an event, simply visit the event page and click on the 'Join' button. If the event requires registration, make sure to register beforehand to receive the event link."
    },
    {
      question: "Is there a limit to the number of attendees for an event?",
      answer: "EventGate does not impose a limit on the number of attendees. However, the capacity may be influenced by the technical limitations of the hosting infrastructure."
    },
    {
      question: "Can I integrate EventGate with other tools?",
      answer: "Yes, EventGate supports integrations with various third-party tools and services to enhance your event experience. Check the documentation for available integrations and setup instructions."
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
            <h2 className="text-2xl font-bold mb-4">EventGate</h2>
            <p className="text-gray-600 mb-4">
              EventGate is a virtual event platform that allows you to host and attend events from anywhere in the world. It's open-source and designed to provide a seamless event experience.
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