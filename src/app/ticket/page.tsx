"use client";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, User, Mail, UserCheck, Ticket } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TicketComponent = () => {
  const [ticketData, setTicketData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(''); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState('');

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://172.20.10.7:80/api/ticket?id=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTicketData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  const qrCodeData = JSON.stringify("http://172.20.10.7:80/api/ticket?id=" + id);

  return (
    <motion.div>
      <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-4 sm:p-6 flex items-center justify-center">
        <Card className="w-full max-w-3xl shadow-lg">
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