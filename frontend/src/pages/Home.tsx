import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail, Shield, Sparkles, Terminal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LINKS = {
  projects: '/projects',
  resume: '/resume.pdf',
  email: 'mailto:seyrafiartin@gmail.com',
  github: 'https://github.com/SuperTinCan',
  linkedin: 'https://www.linkedin.com/in/artinseyrafi',
  instagram: 'https://www.instagram.com/SuperTinCan',
  novaRouteRepo: 'https://github.com/SuperTinCan/NovaRoute',
}

function Home() {
  const focusAreas = ['Secure-by-design systems', 'Full-stack product builds', 'Agentic workflows', 'DevOps & automation']
  const tech = ['TypeScript', 'React + Vite', 'Node.js', 'Python', 'Go', 'Docker', 'PostgreSQL', 'Tailwind', 'shadcn/ui']
  const signals = [
    { title: 'Berry', note: 'Agentic trading assistant with research + execution loop.', cta: 'View project', href: LINKS.projects },
    {
      title: 'NovaRoute',
      note: 'AI-driven fraud detection & customer service routing.',
      cta: 'See repo',
      href: LINKS.novaRouteRepo,
    },
  ]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12">
      <section id="about" className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <Card
          className="fade-up border-slate-800/70 bg-slate-900/70 shadow-2xl shadow-emerald-500/10"
          style={{ animationDelay: '0ms' }}
        >
          <CardContent className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-emerald-500/40 bg-emerald-400/10 text-emerald-200">
                Cybersecurity • Full-Stack
              </Badge>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <Sparkles className="h-4 w-4 text-emerald-300" /> Intentional engineering with a security first lens
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Avatar className="h-16 w-16 border border-emerald-500/40 shadow-lg shadow-emerald-500/20">
                <AvatarImage
                  src="/images/artin-seyrafi-picnic.jpg"
                  alt="Artin Seyrafi wearing a white shirt at night, standing outdoors with camera flash lighting"
                />
                <AvatarFallback className="bg-emerald-500/20 text-emerald-100">AS</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Artin Seyrafi — UTD</p>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl text-slate-50">
                  Hi, I'm
                  {' '}<span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Artin Seyrafi</span>{' '}
                </h1>
                <h2 className="text-xl font-semibold leading-tight sm:text-2xl text-slate-50">
                  Designing resilient products at the intersection of security, AI, and delightful UX.
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                  I build systems that are both fast and trustworthy—mixing full-stack engineering with cybersecurity and
                  agentic workflows to ship features that feel intentional.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-200 shadow-emerald-500/30 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link to={LINKS.projects}>
                  View projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-emerald-400/40 bg-slate-900/70 text-emerald-200 hover:text-emerald-100"
              >
                <a href={LINKS.resume} download>
                  Download resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-slate-200 hover:text-emerald-200">
                <a href="#contact" className="text-slate-200 hover:text-emerald-200">
                  Let&apos;s talk
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Current build</p>
                <p className="mt-2 text-lg font-semibold text-emerald-100">Berry</p>
                <p className="text-sm text-emerald-200/80">Agentic trading assistant</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/80 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-semibold text-slate-50">Security & AI</p>
                <p className="text-sm text-slate-400">Risk-aware automation</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/80 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</p>
                <p className="mt-2 text-lg font-semibold text-slate-50">TypeScript</p>
                <p className="text-sm text-slate-400">React • Node • Go</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card
            className="fade-up border-slate-800/70 bg-slate-900/80 text-slate-50"
            style={{ animationDelay: '120ms' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-emerald-300" />
                Building with intent
              </CardTitle>
              <CardDescription className="text-slate-400">
                Each project tightens the loop between research, secure implementation, and polished delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <Badge key={item} variant="outline" className="border-slate-700/70 bg-slate-900/70 text-slate-100">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="fade-up border-slate-800/70 bg-slate-900/80 text-slate-50"
            style={{ animationDelay: '240ms' }}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Terminal className="h-5 w-5 text-emerald-300" />
                Now shipping
              </CardTitle>
              <CardDescription className="text-slate-400">
                Fast-moving builds with shadcn/ui and Tailwind foundations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {signals.map((signal) => (
                <div key={signal.title} className="rounded-lg border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{signal.title}</p>
                      <p className="text-sm text-slate-400">{signal.note}</p>
                    </div>
                    <Button variant="ghost" asChild size="sm" className="text-emerald-200 hover:text-emerald-100">
                      <a href={signal.href} target={signal.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {signal.cta} <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Tooling</p>
            <h2 className="text-xl font-semibold">Stacks I reach for</h2>
          </div>
          <Badge className="border-emerald-500/40 bg-emerald-400/10 text-emerald-100">Built with Tailwind + shadcn/ui</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="outline" className="border-slate-700/70 bg-slate-900/60 text-slate-100">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section id="contact">
        <Card
          className="fade-up border-slate-800/70 bg-slate-900/70 shadow-lg shadow-emerald-500/10"
          style={{ animationDelay: '360ms' }}
        >
          <CardContent className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Connect</p>
              <h3 className="text-xl font-semibold text-slate-50">Let&apos;s build something thoughtful together.</h3>
              <p className="text-sm text-slate-400">
                Reach out for collaborations, security reviews, or if you just want to trade ideas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild className="border-slate-700 bg-slate-900/70 text-slate-100 hover:text-emerald-100">
                <a href={LINKS.email}>
                  Email
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-slate-200 hover:text-emerald-200">
                <a href={LINKS.github} target="_blank" rel="noreferrer">
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-slate-200 hover:text-emerald-200">
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Home
