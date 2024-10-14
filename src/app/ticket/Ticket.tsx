"use client";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, User, Mail, UserCheck, Ticket } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define the interface for the ticket data
interface TicketData {
  eventName: string;
  fullname: string;
  email: string;
  attendeeType: string;
  userId: string;
  // Add other properties as needed
}

const TicketComponent = () => {
  // State to store ticket data
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);
  // State to store the current URL
  const [url, setUrl] = useState(''); // eslint-disable-line @typescript-eslint/no-unused-vars
  // State to store the extracted ID from the URL
  const [id, setId] = useState('');

  // Effect to extract the current URL and ID from the URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      setUrl(currentUrl);
      console.log('URL:', currentUrl);

      // Extract the id from the URL
      const queryString = currentUrl.split('?')[1];
      const params = new URLSearchParams(queryString);
      const idValue = params.get('id') || ''; // Provide a default value if null
      setId(idValue);
      console.log('ID:', idValue);
    }
  }, []);

  // Effect to fetch ticket data based on the extracted ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/ticket?id=${id}`);
        const data: TicketData = await response.json();
        setTicketData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Display error message if any
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display loading message while fetching data
  if (!ticketData) {
    return <div>Loading...</div>;
  }

  // Generate QR code data
  const qrCodeData = JSON.stringify("https://localhost:8000/api/ticket?id=" + id);

  return (
    <motion.div>
      <div className="min-h-screen from-primary/20 to-background p-4 sm:p-6 flex items-center justify-center">
        <Card className="w-full max-w-3xl shadow-lg bg-white">
          <CardHeader className="text-center space-y-2">
            <Badge variant="secondary" className="w-fit mx-auto">Registration Successful!</Badge>
            <CardTitle className="text-3xl font-bold text-primary">{ticketData.eventName}</CardTitle>
            <Badge variant="outline" className="w-fit mx-auto">Virtual Ticket</Badge>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Attendee Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="text-primary shrink-0" />
                    <span className="font-medium">{ticketData.fullname}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="text-primary shrink-0" />
                    <span className="break-all">{ticketData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ticket className="text-primary shrink-0" />
                    <span>{ticketData.userId}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="text-primary shrink-0" />
                    <span>{ticketData.attendeeType}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-foreground mt-6">Event Details</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="text-primary shrink-0" />
                    <span>2024-05-01</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-primary shrink-0" />
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary shrink-0" />
                    <span>Virtual Event</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground text-center">Your Virtual Ticket QR Code</h2>
                <QRCodeSVG value={qrCodeData} size={200} />
                <p className="text-sm text-muted-foreground text-center">
                  Scan this QR code to join the virtual event
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default TicketComponent;
