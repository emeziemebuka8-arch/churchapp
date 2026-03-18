"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Footer } from "@/components/Footer";
import { useModal } from "@/components/ModalProvider";

export default function Home() {
  const { openRegistration } = useModal();

  return (
    <>
      <div className="min-h-screen flex flex-col font-sans relative">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/background.jpeg"
            alt="Event Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Semi-transparent overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

        {/* Main Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar onRegisterClick={openRegistration} />

          {/* Hero Section */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 mt-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 font-semibold text-xs py-1.5 px-4 rounded-full mb-8 tracking-wider uppercase border border-blue-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              Annual Leadership Summit 2026
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mb-6">
              Empowering Faith Leaders to <br className="hidden md:block" />
              <span className="text-blue-600">Inspire and Grow</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              A comprehensive training program designed to equip current and aspiring church leaders with biblical wisdom and modern management strategies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-20">
              <button 
                onClick={openRegistration}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                Register Today
              </button>
              {/* <Link href="/curriculum" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 text-lg font-bold py-4 px-8 rounded-lg shadow-xl shadow-black/5 transition-all hover:scale-105 border border-slate-100">
                View Curriculum
              </Link> */}
            </div>

            {/* Countdown timer */}
            <div className="w-full max-w-4xl mx-auto mt-auto pb-10">
              <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mb-6 flex items-center justify-center gap-4">
                <span className="h-px bg-slate-300 w-12"></span>
                Event Starts In
                <span className="h-px bg-slate-300 w-12"></span>
              </p>

              <CountdownTimer targetDate="2026-04-07T00:00:00" />
            </div>
          </main>
        </div>

      </div>
    </>
  );
}
