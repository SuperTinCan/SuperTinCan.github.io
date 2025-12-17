import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const LINKS = {
  berry: 'https://github.com/SuperTinCan/AgenticTradingAssistant',
  novaRoute: 'https://github.com/SuperTinCan/NovaRoute',
  vaultNotes: 'https://github.com/SuperTinCan/Secure-Notes',
}

type Project = {
  title: string
  meta: string
  description: string
  image: string
  link: string
  stack: string[]
  repo?: string
}

const projects: Project[] = [
  {
    title: 'Berry – Agentic Trading Assistant',
    meta: '1st Place FinTech Project Winner',
    description:
      'Berry mirrors the workflow of a real life trading firms with research, risk, and execution loops to produce buy/hold/sell plans you can trust.',
    image: '/images/projects/BerryImage.png',
    link: LINKS.berry,
    stack: ['LangGraph Agents', 'OpenAI/Gemini', 'RESTful API', 'React/TypeScript', 'Vite', 'TailwindCSS'],
    repo: LINKS.berry,
  },
  {
    title: 'NovaRoute - Banking Fraud Detection',
    meta: 'CapitalOne Hackathon',
    description:
      'NovaRoute is an AI-driven customer service platform that intelligently routes user inquiries based on fraud risk, intent, and urgency.',
    image: '/images/projects/NovaRouteImage.jpg',
    link: LINKS.novaRoute,
    stack: ['Vite', 'Tailwind', 'shadcn/ui', 'React Router'],
    repo: LINKS.novaRoute,
  },
  {
    title: 'VaultNotes',
    meta: 'Security-forward notes',
    description:
      'Encrypted note-taking with AES, granular access, and a frictionless UI for storing sensitive ideas safely.',
    image: '/images/projects/VaultNotes_Logo2.png',
    link: LINKS.vaultNotes,
    stack: ['React', 'Node.js', 'AES-256', 'Tailwind'],
    repo: LINKS.vaultNotes,
  },
]

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-12">
      <header className="flex flex-col gap-2">
        <Badge className="w-fit border-emerald-500/40 bg-emerald-400/10 text-emerald-100">Projects</Badge>
        <div>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Built with{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">security</span>{' '}
            and polish.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
            A quick look at the products and experiments I’m working on and have completed.
          </p>
        </div>
      </header>

      <div id="projects" className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="fade-up group overflow-hidden border-slate-800/70 bg-slate-900/70 shadow-emerald-500/10 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <Badge className="absolute left-3 top-0.5 border-emerald-500/40 bg-emerald-400/15 text-emerald-100">
                {project.meta}
              </Badge>
            </div>

            <CardHeader className="space-y-2">
              <CardTitle className="text-xl text-slate-50">{project.title}</CardTitle>
              <CardDescription className="text-slate-400">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="outline" className="border-slate-700/70 bg-slate-900/60 text-slate-100">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-3 border-t border-slate-800/70 pt-4">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-50 hover:-translate-y-0.5"
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              {project.repo && (
                <Button variant="ghost" asChild size="sm" className="text-slate-200 hover:text-emerald-200">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Repo
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
