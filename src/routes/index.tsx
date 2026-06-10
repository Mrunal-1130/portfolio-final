import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight, ArrowRight, Shield, Network, Cpu,
  Award, BookOpen, Briefcase, Mail, Github, Linkedin,
  Twitter, User, Trophy, Sun, Moon, X, ExternalLink, Lock,
  Flag, GraduationCap, Rocket, Target,
} from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Mrunal Thale — Cybersecurity & Ethical Hacker" },
      { name: "description", content: "Mrunal Thale — passionate cybersecurity professional, ethical hacker, networking, virtualization & Kali Linux enthusiast." },
      { property: "og:title",       content: "Mrunal Thale — Cybersecurity & Ethical Hacker" },
      { property: "og:description", content: "Portfolio of Mrunal Thale — cybersecurity, ethical hacking, networking, virtualization, OS & Kali Linux." },
    ],
  }),
  component: Index,
} as any));

/* ── EmailJS — replace with your own keys from https://www.emailjs.com ── */


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ─────────────────────────────────────────
   DATA — edit these arrays to update content
───────────────────────────────────────── */
const projects = [
  {
    n: "01",
    title: "Phishing Detection System",
    tag: "Python · ML · Flask · NLP",
    year: "2025",
    blurb: "ML-powered phishing URL & email detector with real-time analysis dashboard. Trained on 50K+ samples achieving 97.3% accuracy.",
    link: "https://cybershieldai.vercel.app/",
    live: true,
  },
  // ── Add more projects below ──
  // {
  //   n: "02",
  //   title: "Your Next Project",
  //   tag: "Tech Stack",
  //   year: "2025",
  //   blurb: "Project description.",
  //   link: "#",
  //   live: false,
  // },
];

const services = [
  { icon: Shield,  title: "Ethical Hacking",      body: "Red-team style assessments, vulnerability discovery and responsible disclosure." },
  { icon: Network, title: "Networking & Security", body: "Subnetting, firewalls, IDS/IPS and packet analysis with Wireshark." },
  { icon: Cpu,     title: "Virtualization & OS",   body: "VirtualBox, VMware, Linux internals and hardened Kali Linux labs." },
];

/* Certifications & Offer Letters
   ─────────────────────────────────────────────────────────────
   Drop certificate images into public/certs/<filename>
   and set img: "/certs/<filename>" below.
   img: null  →  placeholder shown until image is added.
   type can be: "Certificate" | "Course" | "Offer Letter"
   ───────────────────────────────────────────────────────────── */
const certifications = [

  {
    type: "Certificate",
    title: "Code Carnage",
    issuer: "GeeksforGeeks",
    year: "2025",
    img: "/certs/CodeCarnage.jpg",
  },

  {
    type: "Certificate",
    title: "Introduction to CyberSecurity",
    issuer: "Simplilearn",
    year: "2026",
    img: "/certs/Introduction_to_cyber.jpg",
  },

  {
    type: "Certificate",
    title: "Ethical Hacking 101",
    issuer: "Simplilearn",
    year: "2026",
    img: "/certs/Ethical_hacking_101.jpg",
  }
  // ── Paste more below ──
  // {
  //   type: "Certificate",
  //   title: "Google Cybersecurity Professional",
  //   issuer: "Coursera · Google",
  //   year: "2025",
  //   img: "/certs/google.jpg",
  // },
  // {
  //   type: "Certificate",
  //   title: "Networking Essentials",
  //   issuer: "Cisco Networking Academy",
  //   year: "2024",
  //   img: "/certs/cisco.jpg",
  // },
  // {
  //   type: "Offer Letter",
  //   title: "Cybersecurity Internship Offer",
  //   issuer: "CodSoft",
  //   year: "2026",
  //   img: "/certs/codsoft-offer.jpg",
  // },
];

const achievements = [
  "TryHackMe — Jr Penetration Tester Path",
  "Winner — Inter-college CTF (Capture The Flag) 2024",
  // Add more achievements here
];

const experiences = [


  {
    type: "Internship",
    title: "Cybersecurity Intern",
    issuer: "Prodigy InfoTech",
    year: "2026",
    img: "/certs/Prodegy_Offer_Letter.jpg",
  },
];

/* Blogs — commented out. Uncomment & populate when ready:
const blogs = [
  { title: "Getting Started with Kali Linux", date: "May 2025", type: "Blog", link: "#" },
  { title: "OWASP Top 10 in 2025",            date: "Mar 2025", type: "Report", link: "#" },
];
*/

const journey = [
  {
    icon: Flag,
    year: "2025",
    title: "Sparked the curiosity",
    body: "Discovered cybersecurity through CTFs and Linux tinkering. Built my first home lab.",
  },
  {
    icon: GraduationCap,
    year: "2025",
    title: "Foundations",
    body: "Networking fundamentals, Linux internals and about security tools.",
  },
  {
    icon: Award,
    year: "2026",
    title: "Certifications era",
    body: "Simplilearn Cybersecurity, Cisco Networking, Intro to Cybersecurity & Ethical hacking 101.",
  },
  {
    icon: Rocket,
    year: "2025",
    title: "Pentesting & internships",
    body: "TryHackMe Jr Pentester path, CEH self-study, and a cybersecurity internship in Prodigy InfoTech.",
  },
  {
    icon: Target,
    year: "Next",
    title: "What's next",
    body: "Rha, Rhce, OSCP, bug bounty wins and a deeper focus on cloud & networking",
  },
];

const marqueeWords = ["Ethical Hacking","Kali Linux","Networking","Virtualization","Pentesting","OWASP","Wireshark","Cybersecurity"];

/* ─────────────────────────────────────────
   CERTIFICATE LIGHTBOX
───────────────────────────────────────── */
type Cert = { type: string; title: string; issuer: string; year: string; img: string | null };

function CertOverlay({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="cert-overlay" onClick={onClose} role="dialog" aria-modal>
      <div className="cert-overlay-inner" onClick={e => e.stopPropagation()}>
        <button className="cert-overlay-close" onClick={onClose} aria-label="Close"><X size={16}/></button>
        {cert.img
          ? <img src={cert.img} alt={cert.title} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}/>
          : (
            <div className="cert-overlay-placeholder">
              <Award size={52} color="var(--color-accent)"/>
              <h3>{cert.title}</h3>
              <p style={{fontSize:13,color:"var(--color-muted-foreground)",textAlign:"center",maxWidth:280,lineHeight:1.7}}>
                Place the certificate image at <code style={{background:"rgba(124,110,247,.15)",padding:"2px 8px",borderRadius:5}}>public/certs/</code> and update the <code style={{background:"rgba(124,110,247,.15)",padding:"2px 8px",borderRadius:5}}>img</code> path in <code style={{background:"rgba(124,110,247,.15)",padding:"2px 8px",borderRadius:5}}>src/routes/index.tsx</code>.
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
function Index() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus]       = useState<"idle"|"sending"|"ok"|"err">("idle");
  const [theme, setTheme]         = useState<"dark"|"light">("dark");
  const [activeCert, setActiveCert] = useState<Cert | null>(null);


  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("theme") as "dark"|"light"|null)) || "dark";
    setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  const closeCert = useCallback(() => setActiveCert(null), []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("err");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground selection:bg-accent/30">

      {/* Certificate lightbox */}
      {activeCert && <CertOverlay cert={activeCert} onClose={closeCert}/>}


      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none fixed -top-[18%] -left-[12%] -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/25 blur-[170px] animate-pulse"/>
      <div aria-hidden className="pointer-events-none fixed top-[42%] -right-[14%] -z-10 h-[65vh] w-[65vh] rounded-full bg-accent/15 blur-[180px] animate-pulse" style={{animationDelay:"-4s"}}/>
      <div aria-hidden className="pointer-events-none fixed bottom-[5%] left-[30%] -z-10 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[150px] animate-pulse" style={{animationDelay:"-8s"}}/>

      {/* ── NAV ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="font-display text-lg font-bold tracking-tighter bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            MRUNAL<span className="text-accent" style={{WebkitTextFillColor:"var(--color-accent)"}}>.</span>THALE
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {["home","about","projects","certifications","achievements","experience","journey","contact"].map(s => (
              <a key={s} href={`#${s}`} className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100">
                {s.charAt(0).toUpperCase()+s.slice(1)}
              </a>
            ))}
            {/* <a href="#blogs" className="...">Blogs</a> */}
          </nav>
          {/*
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md transition-all hover:border-accent/50 hover:bg-accent/12 hover:-translate-y-px"
          >
            {theme === "dark"
              ? <><Sun className="size-3.5 text-accent"/> Light</>
              : <><Moon className="size-3.5 text-accent"/> Dark</>
            }
          </button>
          */}
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section id="home" className="relative px-6 pb-24 pt-40 md:px-10 md:pt-52">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">

              {/* Avatar with spinning border */}
              <div className="relative mb-10" style={{animation:"fadeUp .9s cubic-bezier(.16,1,.3,1) both"}}>
                <div aria-hidden className="absolute -inset-5 rounded-full bg-accent/25 blur-3xl animate-pulse"/>
                <div className="absolute inset-0 rounded-full animate-spin" style={{background:"conic-gradient(from 0deg,var(--color-accent),transparent 60%,var(--color-accent))",animationDuration:"4s",opacity:0.4}}/>
                <div className="relative size-44 overflow-hidden rounded-full border-2 border-accent/40 bg-surface md:size-52">
                  <img src="/uploads/my_photo.jpeg" alt="Mrunal Thale" className="size-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}/>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    
                    
                  </div>
                </div>
              </div>

              <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/6 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent" style={{animation:"fadeUp .9s cubic-bezier(.16,1,.3,1) both .06s"}}>
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75"/>
                  <span className="relative inline-flex size-2 rounded-full bg-accent"/>
                </span>
                Cybersecurity · Ethical Hacking · Open to opportunities
              </span>

              <h1
                className="font-display font-bold leading-[0.95] tracking-tight"
                style={{
                  fontSize:"clamp(2.8rem,9vw,7.5rem)",
                  background: theme === "light"
                    ? "linear-gradient(160deg,#1a1830 20%,var(--color-accent) 100%)"
                    : "linear-gradient(160deg,#f0eff8 30%,#8e8caa 100%)",
                  WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent",
                  animation:"fadeUp .9s cubic-bezier(.16,1,.3,1) both .12s",
                }}
              >
                Mrunal Thale
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground" style={{animation:"fadeUp .9s cubic-bezier(.16,1,.3,1) both .2s"}}>
                Passionate about <span className="font-semibold text-foreground">cybersecurity</span>,{" "}
                <span className="font-semibold text-foreground">ethical hacking</span>,{" "}
                <span className="font-semibold text-foreground">networking</span>,{" "}
                <span className="font-semibold text-foreground">virtualization</span>, operating systems and{" "}
                <span className="font-semibold text-foreground">Kali Linux</span> - securing systems and breaking things ethically.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4" style={{animation:"fadeUp .9s cubic-bezier(.16,1,.3,1) both .28s"}}>
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white transition-all hover:bg-accent/85 hover:-translate-y-1 hover:shadow-[0_8px_40px_-6px_var(--color-accent)]">
                  Explore Projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/5 px-7 py-4 text-sm font-bold backdrop-blur-md transition-all hover:border-accent/40 hover:bg-accent/10 hover:-translate-y-1">
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="relative overflow-hidden border-y border-border/60 bg-surface/50 py-5">
          <div className="flex w-max gap-12 whitespace-nowrap" style={{animation:"marquee 45s linear infinite"}}>
            {[...marqueeWords,...marqueeWords,...marqueeWords].map((w,i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">{w}</span>
                <span className="text-accent text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="px-6 py-28 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— About</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl leading-tight">
                Securing the digital frontier, one packet at a time.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
              <p className="text-justify">
                I&apos;m Mrunal - a cybersecurity enthusiast and aspiring ethical hacker. My world
                revolves around understanding how systems work, how they break, and how to make them resilient.
              </p>
              <p className="text-justify">
                I love hands-on labs in <span className="font-semibold text-foreground">Kali Linux</span>, building
                virtual networks, exploring OS internals, and dissecting traffic with Wireshark. Whether it&apos;s a
                CTF, a pentest engagement or a fresh CVE write-up - I&apos;m there with curiosity and a terminal.
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {services.map(s => (
                  <div key={s.title} className="rounded-2xl border border-border/80 bg-accent/4 p-5 transition-all hover:border-accent/30 hover:-translate-y-1">
                    <s.icon className="mb-3 size-5 text-accent"/>
                    <div className="font-display font-bold text-sm leading-tight mb-1">{s.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{s.body}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-3">
                {["Kali Linux","Wireshark","Nmap","Burp Suite","Metasploit","Python","Linux","VirtualBox","VMware","OWASP","Networking","Bash"].map(t => (
                  <span key={t} className="rounded-full border border-border bg-accent/6 px-3 py-1 text-xs font-medium transition-all hover:border-accent/40 hover:text-accent">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Projects</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Hands-on security work</h2>
              <p className="mt-4 max-w-xl text-muted-foreground text-base">Real-world cybersecurity projects built with purpose.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map(p => (
                <article key={p.title} className="group relative overflow-hidden cursor-pointer rounded-2xl border border-border/80 bg-background/60 p-8 transition-all hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(124,110,247,.3)]">
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"/>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-accent">{p.n}</span>
                    {p.link && p.link !== "#"
                      ? <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" onClick={e=>e.stopPropagation()}>
                          <ArrowUpRight className="size-5"/>
                        </a>
                      : <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"/>
                    }
                  </div>
                  {/* Live badge + link */}
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {p.live && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">
                        <span className="size-1.5 rounded-full bg-accent inline-block"/>Live
                      </span>
                    )}
                    {p.link && p.link !== "#" && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent/80 hover:text-accent transition-colors" onClick={e=>e.stopPropagation()}>
                        <ExternalLink className="size-3"/> {p.link.replace(/^https?:\/\//,"")}
                      </a>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{p.tag}</span>
                    <span className="size-1 rounded-full bg-muted-foreground/40"/>
                    <span>{p.year}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" className="px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Certifications</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Courses &amp; Certificates</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground text-base">
                Every certificate &amp; offer letter earned.
                
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map(c => (
                <article
                  key={c.title}
                  className="group overflow-hidden rounded-2xl border border-border/80 bg-accent/4 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-22px_rgba(124,110,247,.35)] cursor-pointer"
                  onClick={() => setActiveCert(c)}
                  title="Click to view full certificate"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-background">
                    <img
                      src={c.img || ""}
                      alt={c.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent/30 group-hover:text-accent/50 transition-colors">
                      {c.type === "Offer Letter" ? <Lock className="size-10"/> : c.type === "Course" ? <BookOpen className="size-10"/> : <Award className="size-10"/>}
                      <span className="text-[10px] uppercase tracking-[0.25em]">Click to view</span>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full border border-accent/30 bg-background/75 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur">{c.type}</span>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="font-display font-bold leading-snug text-sm transition-colors group-hover:text-accent">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.year}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


{/* ── Experience── */}
 <section id="experience" className="px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Certifications</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Experience &amp; Offer Lettes</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground text-base">
                Every certificate &amp; offer letter earned.
                
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map(c => (
                <article
                  key={c.title}
                  className="group overflow-hidden rounded-2xl border border-border/80 bg-accent/4 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-22px_rgba(124,110,247,.35)] cursor-pointer"
                  onClick={() => setActiveCert(c)}
                  title="Click to view full certificate"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-background">
                    <img
                      src={c.img || ""}
                      alt={c.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent/30 group-hover:text-accent/50 transition-colors">
                      {c.type === "Offer Letter" ? <Lock className="size-10"/> : c.type === "Course" ? <BookOpen className="size-10"/> : <Award className="size-10"/>}
                      <span className="text-[10px] uppercase tracking-[0.25em]">Click to view</span>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full border border-accent/30 bg-background/75 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur">{c.type}</span>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="font-display font-bold leading-snug text-sm transition-colors group-hover:text-accent">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.year}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section id="achievements" className="relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Achievements</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Wins along the way</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map(a => (
                <div key={a} className="flex items-start gap-4 rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:border-accent/30 hover:-translate-y-1">
                  <Trophy className="size-5 shrink-0 text-accent mt-0.5"/>
                  <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* ── JOURNEY TIMELINE ── */}
        <section id="journey" className="relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Journey</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">My certification &amp; personal timeline</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base">
                From curious beginner to aspiring penetration tester — every milestone, in order.
              </p>
            </div>
            <ol className="relative">
              {/* Vertical spine */}
              <span
                aria-hidden
                className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-1/2 md:-translate-x-px"
              />
              {journey.map((j, i) => {
                const Icon = j.icon;
                const isLeft = i % 2 === 0;
                return (
                  <li
                    key={j.title}
                    className="relative mb-12 grid grid-cols-1 items-start gap-6 pl-14 md:grid-cols-2 md:pl-0"
                  >
                    {/* Icon dot */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 inline-flex size-9 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_24px_-4px_var(--color-accent)] md:left-1/2 md:-translate-x-1/2"
                    >
                      <Icon className="size-4"/>
                    </span>
                    {/* Card */}
                    <div
                      className={`rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_48px_-16px_rgba(124,110,247,.25)] ${
                        isLeft
                          ? "md:col-start-1 md:pr-14 md:text-right"
                          : "md:col-start-2 md:pl-14"
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-1">{j.year}</div>
                      <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{j.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── BLOGS (commented — uncomment when ready)
        <section id="blogs" className="relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Writing</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Blogs &amp; Reports</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {blogs.map(b => (
                <a key={b.title} href={b.link} className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:border-accent/40 hover:-translate-y-1">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{b.type} · {b.date}</div>
                    <div className="font-display font-bold leading-snug text-sm transition-colors group-hover:text-accent">{b.title}</div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"/>
                </a>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* ── CONTACT ── */}
        <section id="contact" className="px-6 py-28 md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface/60 p-8 text-center backdrop-blur-xl md:p-14">
              <div aria-hidden className="absolute -top-32 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"/>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent">— Get in touch</div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build something secure.</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-base leading-relaxed">
                Have an opportunity, collaboration or a security question? Drop me a message — powered by EmailJS (100% free, no backend).
              </p>
              <form ref={formRef} onSubmit={onSubmit} className="mt-10 space-y-3 text-left">
                <div className="grid gap-3 md:grid-cols-2">
                  <input name="from_name" required placeholder="Your name" className="w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]"/>
                  <input name="reply_to" type="email" required placeholder="Your email" className="w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]"/>
                </div>
                <input name="subject" placeholder="Subject" className="w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]"/>
                <textarea name="message" required rows={5} placeholder="Your message…" className="w-full resize-none rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]"/>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white transition-all hover:bg-accent/85 hover:-translate-y-px hover:shadow-[0_8px_30px_-6px_var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Mail className="size-4"/>
                  {status === "sending" ? "Sending…" : status === "ok" ? "✓ Sent — thank you!" : status === "err" ? "Something went wrong, try again" : "Send message"}
                </button>
                
              </form>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <a href="mailto:mrunalthale3011@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Mail className="size-4"/> Email</a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Github className="size-4"/> GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Linkedin className="size-4"/> LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/60 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 Mrunal Thale · All rights reserved</span>
          <span>Stay curious · Stay secure</span>
        </div>
      </footer>
    </div>
  );
}
