"use client";

import React from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Clock, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type EventData = {
  _id: string;
  title: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  category?: string;
  image?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
};

type EventDetailModalProps = {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function getCategoryLabel(category: string) {
  const labels: Record<string, string> = {
    worship: "Worship",
    community: "Community",
    youth: "Youth",
    women: "Women",
    men: "Men",
    children: "Children",
    other: "Other",
  };
  return labels[category] || category;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!event) return null;

  const imageUrl = event.image?.asset?.url || "/service1.jpg";
  const hasDateInfo = event.startDate;
  const hasEndDate = event.endDate;
  const isSameDay =
    hasDateInfo &&
    hasEndDate &&
    new Date(event.startDate!).toDateString() ===
      new Date(event.endDate!).toDateString();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Event Image */}
            <div className="relative w-full h-56 sm:h-72 shrink-0 overflow-hidden rounded-t-3xl">
              <Image
                src={imageUrl}
                alt={event.image?.alt || event.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category badge */}
              {event.category && (
                <span className="absolute top-4 left-4 bg-[#48007e] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {getCategoryLabel(event.category)}
                </span>
              )}

              {/* Title overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {event.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {hasDateInfo && (
                  <div className="flex items-start gap-3 bg-[#48007e]/5 rounded-xl p-4">
                    <Calendar className="w-5 h-5 text-[#48007e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#48007e] uppercase tracking-wide mb-1">
                        Date
                      </p>
                      <p className="text-sm text-gray-800">
                        {formatDate(event.startDate!)}
                      </p>
                      {hasEndDate && !isSameDay && (
                        <p className="text-sm text-gray-600">
                          to {formatDate(event.endDate!)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {hasDateInfo && (
                  <div className="flex items-start gap-3 bg-[#48007e]/5 rounded-xl p-4">
                    <Clock className="w-5 h-5 text-[#48007e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#48007e] uppercase tracking-wide mb-1">
                        Time
                      </p>
                      <p className="text-sm text-gray-800">
                        {formatTime(event.startDate!)}
                        {hasEndDate && ` – ${formatTime(event.endDate!)}`}
                      </p>
                    </div>
                  </div>
                )}

                {event.location && (
                  <div className="flex items-start gap-3 bg-[#48007e]/5 rounded-xl p-4">
                    <MapPin className="w-5 h-5 text-[#48007e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#48007e] uppercase tracking-wide mb-1">
                        Venue
                      </p>
                      <p className="text-sm text-gray-800">{event.location}</p>
                    </div>
                  </div>
                )}

                {event.category && (
                  <div className="flex items-start gap-3 bg-[#48007e]/5 rounded-xl p-4">
                    <Tag className="w-5 h-5 text-[#48007e] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#48007e] uppercase tracking-wide mb-1">
                        Category
                      </p>
                      <p className="text-sm text-gray-800">
                        {getCategoryLabel(event.category)}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              {event.description && (
                <div>
                  <h3 className="text-sm font-semibold text-[#48007e] uppercase tracking-wide mb-3">
                    About This Event
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventDetailModal;
