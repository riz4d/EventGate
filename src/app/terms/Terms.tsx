'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"


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
    title: "1. Acceptance of Terms",
    items: [
      "By accessing and using EventGate, you agree to comply with and be bound by these terms and conditions.",
      "If you do not agree with any part of these terms, you must not use EventGate."
    ]
  },
  {
    title: "2. User Accounts",
    items: [
      "You must create an account to access certain features of EventGate.",
      "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
    ]
  },
  {
    title: "3. Event Hosting",
    items: [
      "Event hosts are responsible for the content and conduct of their events.",
      "EventGate reserves the right to remove any event that violates our policies or terms of service."
    ]
  },
  {
    title: "4. Event Attendance",
    items: [
      "Attendees must comply with the event rules and guidelines set by the event host.",
      "EventGate is not responsible for any issues arising from the content or conduct of events hosted on the platform."
    ]
  },
  {
    title: "5. Payment and Refunds",
    items: [
      "All payments for events are processed through our secure payment gateway.",
      "Refunds are subject to the event host's refund policy and EventGate's terms of service."
    ]
  },
  {
    title: "6. Privacy and Data Protection",
    items: [
      "We are committed to protecting your privacy and personal data.",
      "Please refer to our Privacy Policy for more information on how we collect, use, and protect your data."
    ]
  },
  {
    title: "7. Intellectual Property",
    items: [
      "All content on EventGate, including text, graphics, logos, and software, is the property of EventGate or its content suppliers and is protected by intellectual property laws.",
      "You may not use, reproduce, or distribute any content from EventGate without our prior written permission."
    ]
  },
  {
    title: "8. Limitation of Liability",
    items: [
      "EventGate is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.",
      "Our liability is limited to the maximum extent permitted by law."
    ]
  },
  {
    title: "9. Changes to Terms",
    items: [
      "We reserve the right to modify these terms and conditions at any time.",
      "Any changes will be effective immediately upon posting on EventGate. Your continued use of the platform constitutes your acceptance of the revised terms."
    ]
  },
  {
    title: "10. Governing Law",
    items: [
      "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which EventGate operates.",
      "Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction."
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
              EventGate
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