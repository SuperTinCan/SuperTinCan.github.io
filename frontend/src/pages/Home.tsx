import { Link } from 'react-router-dom'

function Home() {
  return (
    <div
      id="about"
      className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-10 pt-10 text-center md:pt-16 lg:pt-20"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="rounded-full border border-emerald-500/50 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/90">
          Hello
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Artin Seyrafi
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            <img
              src="/images/artin-seyrafi-picnic.jpg"
              alt="Artin Seyrafi wearing a white shirt at night, standing outdoors with camera flash lighting"
              className="h-28 w-28 rounded-full border-2 border-emerald-400 object-cover shadow-emerald-500/30 sm:h-32 sm:w-32"
            />
          </div>

          <h2 className="text-base font-medium text-slate-200/80 sm:text-lg">
            Cybersecurity | Software Engineer | Full-Stack Developer
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            I&apos;m a Computer Science major at UTD passionate about full-stack development, systems programming, and
            exploring the boundaries of AI and web technology. I enjoy building tools that are useful, secure, and
            elegant.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/projects"
            className="rounded-full border border-emerald-400 px-6 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-slate-900 hover:shadow-lg hover:shadow-emerald-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            View My Work
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
          >
            Download Resume
          </a>
        </div>
      </div>

      <section id="contact" className="mt-14 w-full max-w-xl">
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 px-6 py-5 shadow-2xl shadow-black/20 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Connect</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-semibold text-emerald-200">
            <a
              href="https://github.com/SuperTinCan"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/artinseyrafi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/SuperTinCan"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
