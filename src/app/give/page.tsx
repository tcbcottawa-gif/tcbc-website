"use client";

import React from "react";
import Link from "next/link";
import { Heart, Mail, Smartphone, CreditCard, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export default function GivePage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative py-24 bg-center bg-cover"
        style={{ backgroundImage: "url('/bib-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#48007e]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-satoshi text-5xl md:text-6xl font-bold mb-6">
            Give
          </h1>

          <p className="font-aeonik text-xl max-w-3xl mx-auto mb-8">
            We give as an act of worship and gratitude, acknowledging that everything we have comes from God.
          </p>

          <div className="w-24 h-1 mx-auto bg-white" />
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 p-8 bg-[#48007e]/10 rounded-2xl border-l-4 border-[#48007e]">
            <p className="font-aeonik text-lg text-gray-700 mb-4">
              We give as an act of worship and gratitude, acknowledging that everything we have comes from God. Our generosity reflects trust in Him and supports the work of His Kingdom.
            </p>
            <p className="font-aeonik text-base text-gray-600 italic">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#48007e] mb-12 text-center">Ways to Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* On-Site */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#48007e]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#48007e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#48007e]">On-Site</h3>
              </div>
              <p className="font-aeonik text-gray-700 mb-4">
                Give in person during our worship services using the offering baskets provided. You may give by cash or cheques.
              </p>
              <p className="font-aeonik text-sm text-gray-600">
                Join us for worship and give as the Spirit leads.
              </p>
            </div>

            {/* Online E-Transfer */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#48007e]/10 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#48007e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#48007e]">Online (E-Transfer)</h3>
              </div>
              <p className="font-aeonik text-gray-700 mb-4">
                Give online from any device via electronic transfer from your bank anytime. This method is safe, convenient, and widely used across Canada.
              </p>
              <div className="bg-white p-4 rounded-lg border border-[#48007e]/20">
                <p className="font-aeonik text-xs text-gray-600 mb-1">E-Transfer to:</p>
                <p className="font-aeonik font-semibold text-[#48007e] break-all">
                  thechosenbiblechurch@gmail.com
                </p>
              </div>
            </div>

            {/* Pre-Authorised Giving */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#48007e]/10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#48007e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#48007e]">Pre-Authorised Giving</h3>
              </div>
              <p className="font-aeonik text-gray-700 mb-4">
                With pre-authorised giving, you can specify an amount and schedule for funds that are withdrawn from your bank account.
              </p>
              <p className="font-aeonik text-sm text-gray-600">
                This option provides consistency and helps with effective ministry planning.
              </p>
            </div>

            {/* Giving by Mail */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#48007e]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#48007e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#48007e]">Giving by Mail</h3>
              </div>
              <p className="font-aeonik text-gray-700 mb-4">
                Cheques can be made payable to The Chosen Bible Church and mailed by post.
              </p>
              <div className="bg-white p-4 rounded-lg border border-[#48007e]/20">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#48007e] mt-1 flex-shrink-0" />
                  <div className="font-aeonik text-sm text-gray-700">
                    2350 Stevenage Drive, Unit 14<br />
                    Ottawa ON K1G 3W3
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#48007e]/5 to-transparent rounded-2xl p-8 border border-[#48007e]/20 text-center">
            <h3 className="text-2xl font-bold text-[#48007e] mb-4">Questions About Giving?</h3>
            <p className="font-aeonik text-gray-700 mb-6">
              If you have any questions about giving or would like to discuss other giving options, please don't hesitate to reach out.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#48007e] text-white font-semibold rounded-lg hover:bg-[#7c01cd] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
