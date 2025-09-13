"use client";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

interface SwipeableCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: "guide" | "case-study" | "webinar" | "tutorial";
  readTime?: string;
  duration?: string;
  featured?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface SwipeableCardsProps {
  cards: SwipeableCard[];
  title?: string;
  description?: string;
  className?: string;
  onCardAction?: (cardId: string, action: string) => void;
}

const typeIcons = {
  guide: Download,
  "case-study": BookOpen,
  webinar: Play,
  tutorial: Play,
};

const typeColors = {
  guide: "bg-blue-100 text-blue-800",
  "case-study": "bg-green-100 text-green-800",
  webinar: "bg-purple-100 text-purple-800",
  tutorial: "bg-orange-100 text-orange-800",
};

export function SwipeableCards({
  cards,
  title = "Featured Content",
  description = "Swipe to explore our latest resources",
  className = "",
  onCardAction,
}: SwipeableCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    setDragOffset(0);

    const threshold = 100;
    const velocity = info.velocity.x;

    if (Math.abs(velocity) > 500 || Math.abs(info.offset.x) > threshold) {
      if (velocity > 0 || info.offset.x > threshold) {
        // Swipe right - previous card
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
      } else {
        // Swipe left - next card
        setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
      }
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isDragging, cards.length]);

  const currentCard = cards[currentIndex];
  const IconComponent = currentCard ? typeIcons[currentCard.type] : Download;
  const colorClass = currentCard
    ? typeColors[currentCard.type]
    : "bg-gray-100 text-gray-800";

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Main Card Display */}
      <div className="relative max-w-md mx-auto">
        <motion.div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
          style={{
            x: dragOffset,
          }}
        >
          <AnimatePresence mode="wait">
            {currentCard && (
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card className="overflow-hidden shadow-2xl border-0">
                  <div className="relative h-64">
                    <Image
                      src={currentCard.thumbnail}
                      alt={currentCard.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Overlay badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className={`${colorClass} font-medium`}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {currentCard.type.replace("-", " ")}
                      </Badge>
                      {currentCard.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800 font-medium">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Navigation arrows */}
                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                        onClick={goToPrevious}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                        onClick={goToNext}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-white absolute bottom-20 left-4 right-4">
                      {currentCard.title}
                    </CardTitle>
                    <CardDescription className="text-white/90 absolute bottom-12 left-4 right-4">
                      {currentCard.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-4 space-y-4">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {currentCard.readTime && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {currentCard.readTime}
                        </div>
                      )}
                      {currentCard.duration && (
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {currentCard.duration}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    {currentCard.action && (
                      <Button
                        onClick={() => {
                          currentCard.action?.onClick();
                          if (onCardAction && currentCard.action) {
                            onCardAction(
                              currentCard.id,
                              currentCard.action.label
                            );
                          }
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {currentCard.action.label}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Swipe Instructions */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Swipe left or right to explore more content
          </p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 mt-8 overflow-x-auto pb-2">
        {cards.map((card, index) => (
          <motion.button
            key={card.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative ${
              index === currentIndex ? "ring-2 ring-blue-600" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={card.thumbnail}
              alt={card.title}
              fill
              className="object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-blue-600/20" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
