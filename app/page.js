'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/profile-placeholder.png"
                alt="Umar Farooq"
                width={120}
                height={120}
                className="rounded-full mx-auto border-4 border-white dark:border-gray-800"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Umar Farooq
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 mb-6">
              Full-Stack Ruby on Rails Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              4+ years of experience in building scalable web applications with Ruby on Rails, React, and modern web technologies
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
              >
                Hire Me
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Experienced full-stack developer with 4+ years of expertise in Ruby on Rails (v7/8). Proven success in delivering remote projects with async communication and self-managed workflows. Comfortable collaborating in cross-functional remote teams across time zones.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Languages</h4>
                    <ul className="space-y-1">
                      <li className="text-gray-600 dark:text-gray-300">Ruby</li>
                      <li className="text-gray-600 dark:text-gray-300">JavaScript</li>
                      <li className="text-gray-600 dark:text-gray-300">C</li>
                      <li className="text-gray-600 dark:text-gray-300">Java</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Frameworks</h4>
                    <ul className="space-y-1">
                      <li className="text-gray-600 dark:text-gray-300">Ruby on Rails</li>
                      <li className="text-gray-600 dark:text-gray-300">React</li>
                      <li className="text-gray-600 dark:text-gray-300">Next.js</li>
                      <li className="text-gray-600 dark:text-gray-300">Tailwind CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">Piecyfer</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">December 2023 - Present</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600 dark:text-gray-300">Developed Seal Properties web platform</li>
                    <li className="text-gray-600 dark:text-gray-300">Engineered Online Doctor platform</li>
                    <li className="text-gray-600 dark:text-gray-300">Enhanced Bluebird AMS solution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">Viral Square</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">July 2021 - September 2023</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600 dark:text-gray-300">Engineered remote education platform</li>
                    <li className="text-gray-600 dark:text-gray-300">Developed jewelry business system</li>
                    <li className="text-gray-600 dark:text-gray-300">Optimized Rails test performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Placer Guides</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">AI-powered tour guide platform</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Ruby on Rails, Tailwind CSS</span>
                  <a
                    href="https://www.placer-guides.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nationwide Surveyors</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Property compliance platform</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Ruby on Rails, React</span>
                  <a
                    href="https://nationwide-surveyors.org.uk"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:umar.dev4973@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    umar.dev4973@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <a
                    href="https://github.com/umar3990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    github.com/umar3990
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/umar-rails-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    linkedin.com/in/umar-rails-dev
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white rounded-md py-2 px-4 hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Built with Next.js and Tailwind CSS • © {new Date().getFullYear()} Umar Farooq
          </p>
        </div>
      </footer>
    </main>
  )
}
