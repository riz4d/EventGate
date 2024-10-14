'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Calendar, AlertTriangle } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

export default function EventRegistrationForm() {
  const [accepted, setAccepted] = useState(false)
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    designation: '',
    phone: ''})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleEventChange = (value: string) => {
    setFormState({ ...formState, designation: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);

    try {
      const response = await fetch('https://idl-backend.vercel.app/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response from backend:', data.id);
      if (data.status === true) {
        window.location.href = '/ticket?id=' + data.id;
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow flex items-center justify-center relative overflow-hidden py-16 px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gray-200 border-l-4 border-ppink-500 text-pink-900 p-4 mb-6 rounded"
            role="alert"
          >
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p className="font-bold">Registration Ending Soon!</p>
            </div>
            <p className="text-sm">Don't miss out - secure your spot now for the International Designer League 2024.</p>
          </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900"
        >
          International Designer League 2024
        </motion.h2>

        <motion.div>
              <div className="space-y-2 text-black">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-black" />
                  <span>Radisson RED Hotel Dubai Silicon Oasis</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-black" />
                  <span>August 1-6, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-black" />
                  <span>10:00 AM - 8:00 PM daily</span>
                </div>
              </div>
        </motion.div>
        <p>It&apos;s a great day!</p>
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
              id="phone"
              name="phone"
              type="text"
              required
              className="mt-1 bg-white text-gray-700"
              value={formState.phone}
              onChange={handleInputChange}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Label htmlFor="designation" className="text-sm font-medium text-gray-700">
            Designation
            </Label>
            <Select onValueChange={handleEventChange} value={formState.designation}>
              <SelectTrigger className="mt-1 bg-white text-gray-700">
                <SelectValue placeholder="Select Occupation" />
              </SelectTrigger>
              <SelectContent className="mt-1 bg-white text-gray-700">
                <SelectItem value="model">Model</SelectItem>
                <SelectItem value="influencer">Influencer</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50  }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
           <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="terms" checked={accepted} onCheckedChange={(checked) => setAccepted(checked === true)} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the <a href="/terms" className="text-black font-semibold underline">terms and conditions</a>
            </label>
          </div>
            <Button disabled={!accepted} type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Register
            </Button>
          </motion.div>
        </form>
      </motion.div>
      </div>
  </div>
  )
}
