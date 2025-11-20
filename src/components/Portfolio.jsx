import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsSample = [
  {
    id: 1,
    title: "Caribbean Travel App ",
    description:
      "For efficent and smooth search, booking and tracking of all aspects of all vacation requirements in the Caribbean.",
    skills: ["React", "Tailwind", "Figma"],
    link: "#",
  },
  {
    id: 2,
    title: "Gov Tracker App (Prototype)",
    description:
      "Dashboard-style prototype to monitor government spending with charts and filters.",
    skills: ["React", "Chart.js", "UX"],
    link: "#",
  },
  {
    id: 3,
    title: "Find a specialist",
    description:
      "Used to find experts in a particular feild fast and efficent with reviews and varification of each specialist",
    skills: ["HTML", "CSS", "A/B Testing"],
    link: "#",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* NAV */}
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold">YS</div>
            <div>
              <div className="text-lg font-semibold">Hema Suroojbally</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">Web Designer & Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#projects" className="hidden md:inline-block text-sm hover:underline">Projects</a>
            <a href="#services" className="hidden md:inline-block text-sm hover:underline">Services</a>
            <a href="#contact" className="hidden md:inline-block text-sm hover:underline">Contact</a>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md border border-gray-200 dark:border-gray-800"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header className="max-w-6xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Professional web design & development
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-300">
              I build clean, scalable digital experiences for corporate clients and product teams.
              Focused on clarity, accessibility, and measurable results.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:opacity-95"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                download
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
              <strong>Available for:</strong> Contract work, long-term freelance, and in-house roles.
            </div>
          </div>

          <div className="w-full md:w-96">
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="text-sm text-gsray-500">Contact</div>
              <div className="mt-4">
                <div className="text-lg font-semibold">Let’s discuss your project</div>
                <div className="text-sm text-gray-500 mt-2">Email me at</div>
                <a href="mailto:youremail@example.com" className="text-indigo-600 dark:text-indigo-400">salinawarner13@gmail.com</a>

                <div className="mt-4 flex gap-3">
                  <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600">LinkedIn</a>
                  <a href="https://github.com/skyforlife1"  target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-indigo-600">GitHub</a>
                  <a href="#" aria-label="Dribbble" target="_blank" className="text-gray-500 hover:text-indigo-600">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-semibold text-lg">Web Design</h3>
              <p className="mt-3 text-sm text-gray-500">Design systems, responsive UI, Figma prototypes, and accessibility audits.</p>
              <ul className="mt-4 text-xs text-gray-400 space-y-1">
                <li>Figma • Design Systems</li>
                <li>Accessibility (WCAG)</li>
                <li>Responsive & Mobile-first</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-semibold text-lg">Front-end Development</h3>
              <p className="mt-3 text-sm text-gray-500">React, component-driven development, Tailwind CSS, and performance optimization.</p>
              <ul className="mt-4 text-xs text-gray-400 space-y-1">
                <li>React • Tailwind</li>
                <li>Performance & SEO</li>
                <li>CI/CD</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-semibold text-lg">Product & Strategy</h3>
              <p className="mt-3 text-sm text-gray-500">Product thinking, user research, and analytics-driven improvements.</p>
              <ul className="mt-4 text-xs text-gray-400 space-y-1">
                <li>User Research</li>
                <li>Product Roadmaps</li>
                <li>Analytics</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400">View all on GitHub →</a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projectsSample.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
              >
                <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-400">Screenshot</div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{s}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm text-indigo-600 dark:text-indigo-400">Live demo →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-gray-500">Tell me about your project and timeline. I reply within 48 hours.</p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs">Name</label>
                  <input className="mt-1 w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs">Email</label>
                  <input className="mt-1 w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-transparent" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs">Message</label>
                  <textarea className="mt-1 w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-transparent" rows={5} placeholder="Tell me about your project..."></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" className="px-5 py-3 bg-indigo-600 text-white rounded-md">Send message</button>
                  <a href="mailto:youremail@example.com" className="text-sm text-gray-500">Or email me directly</a>
                </div>
              </form>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold">Company & Metrics</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="text-2xl font-bold">1+</div>
                  <div className="text-sm text-gray-500">Years experience</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-gray-500">Projects delivered</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="text-2xl font-bold">0%</div>
                  <div className="text-sm text-gray-500">Client satisfaction</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm text-gray-500">Clients served</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">Want a tailored proposal? Use the contact form and include your budget and timeline.</div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-100 dark:border-gray-800 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Hema Suroojbally. All rights reserved.</div>
            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
