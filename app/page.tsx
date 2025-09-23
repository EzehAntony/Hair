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
      <motion.section
        className="relative pt-40 pb-16 px-6"
        initial={ { opacity: 0, y: 12 } }
        animate={ { opacity: done ? 1 : 0, y: done ? 0 : 12 } }
        transition={ { delay: 2.6, duration: 0.8 } }
      >
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Welcome to Valhairs </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-400">
              Your concise guide to effortless hair care and long‑lasting styles.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content cards */ }
      <section className="relative px-6 pb-28">
        <div className="container-max grid gap-6 md:gap-8 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Curly</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-300">
              <li>Use a spray bottle with water to refresh curls daily.</li>
              <li>Detangle gently from tips to root with an octopus, Denman, or curl brush when damp.</li>
              <li>Define curls with mousse or curl cream (Hawaiian Silky 14-in-1 or Curl LaLa).</li>
              <li>Scrunch upwards when wet; cover with a disposable net. Air-dry or use a hand dryer.</li>
              <li>Avoid product overload. If hair feels weighed down or stiff, remove wig to wash or revamp.</li>
              <li>Cover with a satin scarf at night to reduce tangling.</li>
            </ul>
          </div>

          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Straight</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-300">
              <li>Always brush from the tip upward to avoid breakage.</li>
              <li>Apply a tiny amount of serum only when hair feels dry to keep bundles nourished.</li>
            </ul>
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
