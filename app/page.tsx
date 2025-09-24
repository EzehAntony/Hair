"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home () {
  const [ done, setDone ] = useState( false );

  useEffect( () => {
    const t = setTimeout( () => setDone( true ), 2400 );
    return () => clearTimeout( t );
  }, [] );

  const rollDown = ( delay: number ) => ( {
    initial: { y: 0 },
    animate: { y: "100%" },
    transition: {
      duration: 0.7,
      delay,
      ease: "easeInOut" as const,
    },
  } );

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Hero content */ }
      <section className="relative pt-40 pb-16 px-6">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Valhairs</span>
            </h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-neutral-300 font-medium"
              initial={ { opacity: 0, y: 6 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { delay: 0.4, duration: 0.6 } }
            >
              Professional Hair Services & Premium Wigs
            </motion.p>
            <motion.p
              className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto"
              initial={ { opacity: 0, y: 6 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { delay: 0.6, duration: 0.6 } }
            >
              Revamping • Styling • Coloring • Premium Hair Sales
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              initial={ { opacity: 0, y: 6 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { delay: 0.8, duration: 0.6 } }
            >
              <a href="#services" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                View Services
              </a>
              <a href="#contact" className="px-8 py-3 border border-neutral-600 text-neutral-300 rounded-lg font-medium hover:bg-neutral-800 transition-all">
                Book Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */ }
      <section id="services" className="relative px-6 pb-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Professional hair services to bring your wigs back to life and keep them looking stunning
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Wig Revamping</h3>
              <p className="text-neutral-400 text-sm">
                Bring your old wigs back to life with professional cleaning, conditioning, and styling restoration.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Styling</h3>
              <p className="text-neutral-400 text-sm">
                Expert styling services for all hair types - from sleek straight to bouncy curls.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hair Coloring</h3>
              <p className="text-neutral-400 text-sm">
                Professional coloring services to achieve your desired look with premium products.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Hair Sales</h3>
              <p className="text-neutral-400 text-sm">
                High-quality wigs, bundles, and hair extensions from trusted suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Care Guide Section */ }
      <section className="relative px-6 pb-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hair Care Guide</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Essential tips to maintain your wigs and keep them looking fresh
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Curly Hair Care</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Use a spray bottle with water to refresh curls daily</li>
                <li>Detangle gently from tips to root with an octopus, Denman, or curl brush when damp</li>
                <li>Define curls with mousse or curl cream (Hawaiian Silky 14-in-1 or Curl LaLa)</li>
                <li>Scrunch upwards when wet; cover with a disposable net. Air-dry or use a hand dryer</li>
                <li>Avoid product overload. If hair feels weighed down or stiff, remove wig to wash or revamp</li>
                <li>Cover with a satin scarf at night to reduce tangling</li>
              </ul>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Straight Hair Care</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Always brush from the tip upward to avoid breakage</li>
                <li>Apply a tiny amount of serum only when hair feels dry to keep bundles nourished</li>
                <li>Use heat protectant before any styling tools</li>
                <li>Store on a wig stand to maintain shape</li>
                <li>Wash with sulfate-free shampoo and conditioner</li>
                <li>Deep condition weekly for optimal moisture</li>
              </ul>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Bouncy Hair Care</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Comb wig only with a wide-tooth comb</li>
                <li>Roll up with flexi rods or use bobby pins to hold back bounce before storage</li>
                <li>Don’t drench hair or overly wet your hair</li>
                <li>Don’t leave wig hanging on a mannequin</li>
              </ul>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">General Care Maintenance</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>Store wig properly</li>
                <li>Ensure to give your wigs to a professional to style, revamp, or install</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Pricing Section */ }
      <section id="contact" className="relative px-6 pb-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Ready to transform your hair? Contact us for pricing and to book your appointment
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-200">Phone</h4>
                  <a href="tel:+1234567890" className="text-neutral-400 hover:text-white transition-colors">
                    +2349076737870
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Email</h4>
                  <a href="mailto:hello@valhairs.com" className="text-neutral-400 hover:text-white transition-colors">
                    valhairs@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Location</h4>
                  <p className="text-neutral-400">Lagos, Nigeria</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Hours</h4>
                  <p className="text-neutral-400">Mon - Sun: 24hrs</p>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Service Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Wig Revamping</span>
                  <span className="font-medium">Request a quote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Professional Styling</span>
                  <span className="font-medium">Request a quote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Hair Coloring</span>
                  <span className="font-medium">Request a quote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Premium Wigs</span>
                  <span className="font-medium">Request a quote</span>
                </div>
                <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
                  <p className="text-sm text-neutral-400">
                    *Prices may vary based on hair length, style complexity, and products used.
                    Contact us for a personalized quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Splash overlay panels */ }
      { !done && (
        <div className="absolute inset-0 z-30 grid grid-cols-3 overflow-hidden">
          <motion.div className="bg-[#111]" { ...rollDown( 0 ) } />
          <motion.div className="bg-[#151515]" { ...rollDown( 0.25 ) } />
          <motion.div className="bg-[#1a1a1a]" { ...rollDown( 0.5 ) } />
        </div>
      ) }
    </div>
  );
}