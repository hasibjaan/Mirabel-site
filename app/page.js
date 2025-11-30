"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Instagram, Facebook, Sparkles, Star, Heart, Scissors, Palette } from 'lucide-react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Service from '../components/Service';
import About from '../components/About'
import Stories from '../components/Stories';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer'

export default function MirabelSalon() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <Hero />

      <Service />

      <About />

      <Stories />

      <Testimonial />

      <MapSection />

      <Contact />

      <Footer />

    </div>
  );
}