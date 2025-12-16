type Project = {
  title: string
  meta: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Berry - Agentic Trading Assistant',
    meta: 'August 2025 - December 2025',
    description:
      'Berry mimics the research and execution workflow of a real life trading firm to deliver buy/hold/sell decisions, risk commentary, and actionable investment plans.',
    image: '/images/projects/BerryImage.png',
    link: 'https://github.com/SuperTinCan/AgenticTradingAssistant',
  },
  {
    title: 'NovaRoute - Banking Fraud Detection (Hackathon Project)',
    meta: 'November 2025',
    description:
      'NovaRoute is an AI-driven customer service platform that intelligently routes user inquiries based on fraud risk, intent, and urgency.',
    image: '/images/projects/NovaRouteImage.jpg',
    link: 'https://github.com/SuperTinCan/NovaRoute',
  },
  {
    title: 'VaultNotes',
    meta: 'Currently being developed',
    description:
      'VaultNotes is a secure notes application that allows users to store sensitive information in an encrypted format. The app uses AES encryption to ensure that your data is safe and accessible only to you. Built with React and Node.js, it provides a user-friendly interface for managing your notes securely.',
    image: '/images/projects/VaultNotes_Logo2.png',
    link: 'https://github.com/SuperTinCan/Secure-Notes',
  },
]

function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-14 pt-10 md:pt-16 lg:pt-20">
      <header className="text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          My{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="mt-3 text-sm text-slate-400 sm:text-base">A collection of personal and academic work</p>
      </header>

      <div id="projects" className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover object-center"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-3 px-5 py-4">
              <div>
                <h2 className="text-xl font-semibold text-emerald-300">{project.title}</h2>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.meta}</p>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
