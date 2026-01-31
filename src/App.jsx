import { useState } from 'react'

const projects = [
  {
    title: 'Project Alpha',
    description: 'Full-stack web application for workflow automation',
    year: '2024–2025',
    company: 'Acme Corp',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop',
  },
  {
    title: 'Meridian',
    description: 'Design system and component library',
    year: '2024',
    company: 'Studio Meridian',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop',
    accent: true,
  },
  {
    title: 'Observa',
    description: 'Real-time monitoring and analytics dashboard',
    year: '2023–2025',
    company: 'Observa Inc',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    dark: true,
  },
  {
    title: 'Forma',
    description: 'Interactive 3D product configurator',
    year: '2023',
    company: 'Forma Studio',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop',
  },
]

const experience = [
  { role: 'Senior Frontend Engineer', company: 'Acme Corp', period: '2024–Present' },
  { role: 'Full-Stack Developer', company: 'Studio Meridian', period: '2022–2024' },
  { role: 'Frontend Developer', company: 'Observa Inc', period: '2020–2022' },
  { role: 'Junior Developer', company: 'Forma Studio', period: '2018–2020' },
]

function ProjectCard({ project }) {
  return (
    <section className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 px-6 pb-6 md:px-10 md:pb-8">
        <p className={`text-sm font-medium ${project.accent ? 'text-accent' : 'text-white'}`}>
          {project.title}
        </p>
        <p className="mt-0.5 text-sm text-white/70">
          {project.description}
        </p>
        <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
          <span>{project.year}</span>
          <span>{project.company}</span>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full px-6 py-5 md:px-10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium tracking-tight text-neutral-900">Mathew Lamb</p>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#work" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-900">
              Work
            </a>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="cursor-pointer rounded-none border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              Information
            </button>
          </nav>
        </div>
      </header>

      {/* Info Panel */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          showInfo ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setShowInfo(false)}
          onKeyDown={(e) => e.key === 'Escape' && setShowInfo(false)}
          role="button"
          tabIndex={-1}
          aria-label="Close information panel"
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-xl overflow-y-auto bg-neutral-950 p-10 pt-20 text-white transition-transform duration-500 ${
            showInfo ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setShowInfo(false)}
            className="absolute top-5 right-6 cursor-pointer border-none bg-transparent text-xs text-neutral-400 transition-colors hover:text-white md:right-10"
          >
            Close
          </button>
          <p className="max-w-md text-sm leading-relaxed text-neutral-300">
            I build digital products and interfaces with a focus on clarity and structure.
            For me, engineering is a dialogue between design and implementation&mdash;where
            clean architecture, thoughtful interactions, and precise code come together to
            create something that feels effortless.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500">
            Subtle, but with great impact.
          </p>

          <div className="mt-12">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">Experience</p>
            <div className="mt-4 space-y-4">
              {experience.map((exp) => (
                <div key={exp.role} className="flex items-baseline justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <p className="text-sm text-neutral-200">{exp.role}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{exp.company}</p>
                  </div>
                  <p className="text-xs text-neutral-600">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">Contact</p>
            <div className="mt-4 space-y-2">
              <a href="mailto:hello@example.com" className="block text-sm text-neutral-300 no-underline transition-colors hover:text-white">
                hello@example.com
              </a>
              <a href="https://github.com" className="block text-sm text-neutral-300 no-underline transition-colors hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com" className="block text-sm text-neutral-300 no-underline transition-colors hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <main id="work">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-lg">
            <p className="text-sm leading-relaxed text-neutral-400">
              &ldquo;Simplicity of life, even the barest, is not a misery, but the very
              foundation of refinement.&rdquo;
            </p>
            <p className="mt-2 text-xs text-neutral-600">William Morris</p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8 border-t border-neutral-800 pt-10">
            <div>
              <p className="text-xs text-neutral-600">Mathew Lamb</p>
              <p className="mt-1 text-xs text-neutral-500">Software Engineer</p>
            </div>
            <nav className="flex flex-wrap gap-x-10 gap-y-2">
              <a href="mailto:hello@example.com" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-300">
                Email
              </a>
              <a href="https://github.com" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-300">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-300">
                LinkedIn
              </a>
              <a href="#" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-300">
                Resume
              </a>
              <a href="#" className="text-xs text-neutral-500 no-underline transition-colors hover:text-neutral-300">
                Colophon
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
