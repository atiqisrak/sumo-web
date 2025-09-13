"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  Play,
  User,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface WebinarCardProps {
  webinar: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    speaker: {
      name: string;
      title: string;
      company: string;
      avatar: string;
    };
    eventDate: string;
    duration: string;
    isLive: boolean;
    isRecorded: boolean;
    registrationUrl?: string;
    videoUrl?: string;
    maxAttendees?: number;
    currentAttendees?: number;
    category: string;
    tags?: string[];
    featured?: boolean;
  };
  onRegister?: (webinarId: string) => void;
  onWatch?: (webinarId: string) => void;
  className?: string;
}

export function WebinarCard({
  webinar,
  onRegister,
  onWatch,
  className = "",
}: WebinarCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const isUpcoming = date > now;

    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      isUpcoming,
      isToday: date.toDateString() === now.toDateString(),
      isPast: date < now,
    };
  };

  const handleRegister = () => {
    if (onRegister) {
      onRegister(webinar.id);
    }
  };

  const handleWatch = () => {
    if (onWatch) {
      onWatch(webinar.id);
    }
  };

  const dateInfo = formatDate(webinar.eventDate);
  const isFullyBooked = Boolean(
    webinar.maxAttendees &&
      webinar.currentAttendees &&
      webinar.currentAttendees >= webinar.maxAttendees
  );

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 overflow-hidden">
        <div className="relative">
          <Image
            src={webinar.thumbnail}
            alt={webinar.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Status badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge className="bg-purple-600 text-white font-medium">
              <Users className="w-3 h-3 mr-1" />
              Webinar
            </Badge>
            {webinar.featured && (
              <Badge className="bg-yellow-100 text-yellow-800 font-medium">
                Featured
              </Badge>
            )}
          </div>

          {/* Status indicator */}
          <div className="absolute top-4 right-4">
            {webinar.isLive ? (
              <Badge className="bg-red-100 text-red-800 font-medium animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                Live Now
              </Badge>
            ) : dateInfo.isUpcoming ? (
              <Badge className="bg-green-100 text-green-800 font-medium">
                <Calendar className="w-3 h-3 mr-1" />
                Upcoming
              </Badge>
            ) : (
              <Badge className="bg-gray-100 text-gray-800 font-medium">
                <Play className="w-3 h-3 mr-1" />
                Recorded
              </Badge>
            )}
          </div>

          {/* Play overlay for recorded webinars */}
          {webinar.isRecorded && webinar.videoUrl && (
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Button
                onClick={handleWatch}
                variant="secondary"
                size="lg"
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Recording
              </Button>
            </motion.div>
          )}
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-2">
            {webinar.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-3">
            {webinar.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Speaker info */}
          <div className="flex items-center gap-3">
            <Image
              src={webinar.speaker.avatar}
              alt={webinar.speaker.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-gray-900 truncate">
                {webinar.speaker.name}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {webinar.speaker.title}, {webinar.speaker.company}
              </div>
            </div>
          </div>

          {/* Event details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span
                className={
                  dateInfo.isToday ? "font-semibold text-blue-600" : ""
                }
              >
                {dateInfo.isToday ? "Today" : dateInfo.date}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {dateInfo.time} • {webinar.duration}
            </div>
          </div>

          {/* Attendee count */}
          {webinar.maxAttendees && (
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">
                {webinar.currentAttendees || 0} / {webinar.maxAttendees}{" "}
                registered
              </span>
              {isFullyBooked && (
                <Badge variant="destructive" className="text-xs">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Full
                </Badge>
              )}
            </div>
          )}

          {/* Tags */}
          {webinar.tags && webinar.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {webinar.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {webinar.tags.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{webinar.tags.length - 2} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0">
          {webinar.isLive ? (
            <Button
              onClick={handleWatch}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Join Live Now
            </Button>
          ) : dateInfo.isUpcoming ? (
            <Button
              onClick={handleRegister}
              disabled={isFullyBooked}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 2 }}
              >
                <Calendar className="w-4 h-4" />
                {isFullyBooked ? "Fully Booked" : "Register Now"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Button>
          ) : webinar.isRecorded ? (
            <Button
              onClick={handleWatch}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Recording
            </Button>
          ) : (
            <Button
              onClick={handleRegister}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Register
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
