'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Laptop, Code, Lightbulb, Users, Computer, Smartphone, Coffee, Clock, Trophy } from 'lucide-react'

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

export default function EventRegistrationForm() {
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    event: '',
    phno: '',
    age: '',
    teamname: '',
    github: ''})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleEventChange = (value: string) => {
    setFormState({ ...formState, event: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Here you would typically send the form data to your backend
  }
  const techIcons = [Laptop, Code, Smartphone, Computer, Lightbulb, Users, Code, Coffee, Clock, Trophy, Code, Smartphone, Computer]
  const techTexts = ['Innovate', 'Create', 'Collaborate', 'Learn', 'Build', 'Hack', 'Innovate', 'Create', 'Collaborate', 'Learn', 'Build', 'Hack', 'Innovate', 'Create', 'Collaborate', 'Learn', 'Build', 'Hack', 'Innovate', 'Create', 'Collaborate', 'Learn', 'Build', 'Hack']
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {techIcons.map((Icon, i) => (
        <AnimatedIcon key={`icon-${i}`} icon={Icon} delay={i * 0.5} />
      ))}
      {techTexts.map((text, i) => (
        <AnimatedText key={`text-${i}`} text={text} delay={i * 0.7} />
      ))}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900"
        >
          Event Registration
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.fullname}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.email}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="Phone Number" className="text-sm font-medium text-gray-700">
            Phone Number
            </Label>
            <Input
              id="phno"
              name="phno"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.phno}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="Team Name " className="text-sm font-medium text-gray-700">
            Team Name (if team-based)
            </Label>
            <Input
              id="teamname"
              name="teamname"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.teamname}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="GitHub Profile" className="text-sm font-medium text-gray-700">
            GitHub Profile
            </Label>
            <Input
              id="github"
              name="github"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.github}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="age" className="text-sm font-medium text-gray-700">
            Age / Year
            </Label>
            <Input
              id="age"
              name="age"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.age}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Label htmlFor="event" className="text-sm font-medium text-gray-700">
              Event
            </Label>
            <Select onValueChange={handleEventChange} value={formState.event}>
              <SelectTrigger className="mt-1 bg-white text-gray-700">
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent className="mt-1 bg-white text-gray-700">
                <SelectItem value="conference">Annual Conference</SelectItem>
                <SelectItem value="workshop">Technical Workshop</SelectItem>
                <SelectItem value="networking">Networking Mixer</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50  }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Register
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}