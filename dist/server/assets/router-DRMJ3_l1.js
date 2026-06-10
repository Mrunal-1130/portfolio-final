import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Eye, ArrowRight, Download, Shield, Network, Cpu, ArrowUpRight, ExternalLink, Lock, BookOpen, Award, Trophy, Flag, GraduationCap, Rocket, Target, Mail, Github, Linkedin, X } from "lucide-react";
const appCss = "/assets/styles-Ci161NM1.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mrunal Thale — Cybersecurity & Ethical Hacker" },
      { name: "description", content: "Mrunal Thale — passionate cybersecurity professional, ethical hacker, networking, virtualization & Kali Linux enthusiast." },
      { property: "og:title", content: "Mrunal Thale — Cybersecurity & Ethical Hacker" },
      { property: "og:description", content: "Portfolio of Mrunal Thale — cybersecurity, ethical hacking, networking, virtualization, OS & Kali Linux." }
    ]
  }),
  component: Index
});
const EMAILJS_SERVICE_ID = '"service_k7jfgce";';
const EMAILJS_TEMPLATE_ID = void 0;
const EMAILJS_PUBLIC_KEY = '"R6TU93QaIzqc-TJgf";';
const projects = [
  {
    n: "01",
    title: "Phishing Detection System",
    tag: "Python · ML · Flask · NLP",
    year: "2025",
    blurb: "ML-powered phishing URL & email detector with real-time analysis dashboard. Trained on 50K+ samples achieving 97.3% accuracy.",
    link: "https://cybershieldai.vercel.app/",
    live: true,
    img: "/projects/cybershield.png"
  }
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
  { icon: Shield, title: "Ethical Hacking", body: "Red-team style assessments, vulnerability discovery and responsible disclosure." },
  { icon: Network, title: "Networking & Security", body: "Subnetting, firewalls, IDS/IPS and packet analysis with Wireshark." },
  { icon: Cpu, title: "Virtualization & OS", body: "VirtualBox, VMware, Linux internals and hardened Kali Linux labs." }
];
const certifications = [
  {
    type: "Certificate",
    title: "Code Carnage",
    issuer: "GeeksforGeeks",
    year: "2025",
    img: "/certs/CodeCarnage.jpg"
  },
  {
    type: "Certificate",
    title: "Introduction to CyberSecurity",
    issuer: "Simplilearn",
    year: "2026",
    img: "/certs/Introduction_to_cyber.jpg"
  },
  {
    type: "Certificate",
    title: "Ethical Hacking 101",
    issuer: "Simplilearn",
    year: "2026",
    img: "/certs/Ethical_hacking_101.jpg"
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
  "Winner — Inter-college CTF (Capture The Flag) 2024"
  // Add more achievements here
];
const experiences = [
  {
    type: "Internship",
    title: "Cybersecurity Intern",
    issuer: "Prodigy InfoTech",
    year: "2026",
    img: "/certs/Prodegy_Offer_Letter.jpg"
  }
];
const journey = [
  {
    icon: Flag,
    year: "2025",
    title: "Sparked the curiosity",
    body: "Discovered cybersecurity through CTFs and Linux tinkering. Built my first home lab."
  },
  {
    icon: GraduationCap,
    year: "2025",
    title: "Foundations",
    body: "Networking fundamentals, Linux internals and about security tools."
  },
  {
    icon: Award,
    year: "2026",
    title: "Certifications era",
    body: "Simplilearn Cybersecurity, Cisco Networking, Intro to Cybersecurity & Ethical hacking 101."
  },
  {
    icon: Rocket,
    year: "2025",
    title: "Pentesting & internships",
    body: "TryHackMe Jr Pentester path, CEH self-study, and a cybersecurity internship in Prodigy InfoTech."
  },
  {
    icon: Target,
    year: "Next",
    title: "What's next",
    body: "Rha, Rhce, OSCP, bug bounty wins and a deeper focus on cloud & networking"
  }
];
const marqueeWords = ["Ethical Hacking", "Kali Linux", "Networking", "Virtualization", "Pentesting", "OWASP", "Wireshark", "Cybersecurity"];
function CertOverlay({ cert, onClose }) {
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsx("div", { className: "cert-overlay", onClick: onClose, role: "dialog", "aria-modal": true, children: /* @__PURE__ */ jsxs("div", { className: "cert-overlay-inner", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { className: "cert-overlay-close", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 16 }) }),
    cert.img ? /* @__PURE__ */ jsx("img", { src: cert.img, alt: cert.title, onError: (e) => {
      e.currentTarget.style.display = "none";
    } }) : /* @__PURE__ */ jsxs("div", { className: "cert-overlay-placeholder", children: [
      /* @__PURE__ */ jsx(Award, { size: 52, color: "var(--color-accent)" }),
      /* @__PURE__ */ jsx("h3", { children: cert.title }),
      /* @__PURE__ */ jsxs("p", { style: { fontSize: 13, color: "var(--color-muted-foreground)", textAlign: "center", maxWidth: 280, lineHeight: 1.7 }, children: [
        "Place the certificate image at ",
        /* @__PURE__ */ jsx("code", { style: { background: "rgba(124,110,247,.15)", padding: "2px 8px", borderRadius: 5 }, children: "public/certs/" }),
        " and update the ",
        /* @__PURE__ */ jsx("code", { style: { background: "rgba(124,110,247,.15)", padding: "2px 8px", borderRadius: 5 }, children: "img" }),
        " path in ",
        /* @__PURE__ */ jsx("code", { style: { background: "rgba(124,110,247,.15)", padding: "2px 8px", borderRadius: 5 }, children: "src/routes/index.tsx" }),
        "."
      ] })
    ] })
  ] }) });
}
function Index() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [theme, setTheme] = useState("dark");
  const [activeCert, setActiveCert] = useState(null);
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme") || "dark";
    setTheme(saved);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  const closeCert = useCallback(() => setActiveCert(null), []);
  const onSubmit = async (e) => {
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
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-clip bg-background text-foreground selection:bg-accent/30", children: [
    activeCert && /* @__PURE__ */ jsx(CertOverlay, { cert: activeCert, onClose: closeCert }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed -top-[18%] -left-[12%] -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/25 blur-[170px] animate-pulse" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed top-[42%] -right-[14%] -z-10 h-[65vh] w-[65vh] rounded-full bg-accent/15 blur-[180px] animate-pulse", style: { animationDelay: "-4s" } }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed bottom-[5%] left-[30%] -z-10 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[150px] animate-pulse", style: { animationDelay: "-8s" } }),
    /* @__PURE__ */ jsx("header", { className: "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10", children: [
      /* @__PURE__ */ jsxs("a", { href: "#home", className: "font-display text-lg font-bold tracking-tighter bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent", children: [
        "MRUNAL",
        /* @__PURE__ */ jsx("span", { className: "text-accent", style: { WebkitTextFillColor: "var(--color-accent)" }, children: "." }),
        "THALE"
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-7 md:flex", children: ["home", "about", "projects", "certifications", "achievements", "experience", "journey", "contact"].map((s) => /* @__PURE__ */ jsx("a", { href: `#${s}`, className: "relative text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100", children: s.charAt(0).toUpperCase() + s.slice(1) }, s)) }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/resume/Mrunal_Thale_Resume.pdf",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx(Eye, { className: "size-4 transition-colors group-hover:text-accent" }),
            "Resume"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { id: "home", className: "relative px-6 pb-24 pt-40 md:px-10 md:pt-52", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-10", style: { animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both" }, children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -inset-5 rounded-full bg-accent/25 blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full animate-spin", style: { background: "conic-gradient(from 0deg,var(--color-accent),transparent 60%,var(--color-accent))", animationDuration: "4s", opacity: 0.4 } }),
          /* @__PURE__ */ jsxs("div", { className: "relative size-44 overflow-hidden rounded-full border-2 border-accent/40 bg-surface md:size-52", children: [
            /* @__PURE__ */ jsx("img", { src: "/uploads/my_photo.jpeg", alt: "Mrunal Thale", className: "size-full object-cover", onError: (e) => {
              e.currentTarget.style.display = "none";
            } }),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/6 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent", style: { animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both .06s" }, children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex size-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex size-2 rounded-full bg-accent" })
          ] }),
          "Cybersecurity · Ethical Hacking · Open to opportunities"
        ] }),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "font-display font-bold leading-[0.95] tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent",
            style: {
              fontSize: "clamp(2.8rem,9vw,7.5rem)",
              animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both .12s"
            },
            children: "Mrunal Thale"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground", style: { animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both .2s" }, children: [
          "Passionate about ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "cybersecurity" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "ethical hacking" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "networking" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "virtualization" }),
          ", operating systems and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Kali Linux" }),
          " - securing systems and breaking things ethically."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", style: { animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both .28s" }, children: [
          /* @__PURE__ */ jsxs("a", { href: "#projects", className: "group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white transition-all hover:bg-accent/85 hover:-translate-y-1 hover:shadow-[0_8px_40px_-6px_var(--color-accent)]", children: [
            "Explore Projects ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/5 px-7 py-4 text-sm font-bold backdrop-blur-md transition-all hover:border-accent/40 hover:bg-accent/10 hover:-translate-y-1", children: "Let's Talk" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/resume/Mrunal_Thale_Resume.pdf",
              download: "Mrunal_Thale_Resume.pdf",
              className: "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-7 py-4 text-sm font-bold text-accent transition-all hover:bg-accent/20 hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "size-4" }),
                "Download Resume"
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden border-y border-border/60 bg-surface/50 py-5", children: /* @__PURE__ */ jsx("div", { className: "flex w-max gap-12 whitespace-nowrap", style: { animation: "marquee 45s linear infinite" }, children: [...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-bold uppercase tracking-tight md:text-5xl", children: w }),
        /* @__PURE__ */ jsx("span", { className: "text-accent text-xl", children: "✦" })
      ] }, i)) }) }),
      /* @__PURE__ */ jsx("section", { id: "about", className: "px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— About" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-5xl leading-tight", children: "Securing the digital frontier, one packet at a time." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-justify", children: "I'm Mrunal - a cybersecurity enthusiast and aspiring ethical hacker. My world revolves around understanding how systems work, how they break, and how to make them resilient." }),
          /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
            "I love hands-on labs in ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Kali Linux" }),
            ", building virtual networks, exploring OS internals, and dissecting traffic with Wireshark. Whether it's a CTF, a pentest engagement or a fresh CVE write-up - I'm there with curiosity and a terminal."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-4 pt-2 sm:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/80 bg-accent/4 p-5 transition-all hover:border-accent/30 hover:-translate-y-1", children: [
            /* @__PURE__ */ jsx(s.icon, { className: "mb-3 size-5 text-accent" }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-sm leading-tight mb-1", children: s.title }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground leading-relaxed", children: s.body })
          ] }, s.title)) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-3", children: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "Python", "Linux", "VirtualBox", "VMware", "OWASP", "Networking", "Bash"].map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border bg-accent/6 px-3 py-1 text-xs font-medium transition-all hover:border-accent/40 hover:text-accent", children: t }, t)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "projects", className: "relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Projects" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Hands-on security work" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-muted-foreground text-base", children: "Real-world cybersecurity projects built with purpose." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden cursor-pointer rounded-2xl border border-border/80 bg-background/60 p-8 transition-all hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(124,110,247,.3)]", children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-xs font-bold text-accent", children: p.n }),
            p.link && p.link !== "#" ? /* @__PURE__ */ jsx("a", { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5" }) }) : /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-5 overflow-hidden rounded-xl border border-border/60", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: p.img,
              alt: p.title,
              className: "h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
            p.live && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent", children: [
              /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent inline-block" }),
              "Live"
            ] }),
            p.link && p.link !== "#" && /* @__PURE__ */ jsxs("a", { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-[11px] font-semibold text-accent/80 hover:text-accent transition-colors", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "size-3" }),
              " ",
              p.link.replace(/^https?:\/\//, "")
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-3xl", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.blurb }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: p.tag }),
            /* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-muted-foreground/40" }),
            /* @__PURE__ */ jsx("span", { children: p.year })
          ] })
        ] }, p.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "certifications", className: "px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Certifications" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Courses & Certificates" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground text-base", children: "Every certificate & offer letter earned." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: certifications.map((c) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "group overflow-hidden rounded-2xl border border-border/80 bg-accent/4 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-22px_rgba(124,110,247,.35)] cursor-pointer",
            onClick: () => setActiveCert(c),
            title: "Click to view full certificate",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-background", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: c.img || "",
                    alt: c.title,
                    loading: "lazy",
                    className: "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                    onError: (e) => {
                      e.currentTarget.style.display = "none";
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent/30 group-hover:text-accent/50 transition-colors", children: [
                  c.type === "Offer Letter" ? /* @__PURE__ */ jsx(Lock, { className: "size-10" }) : c.type === "Course" ? /* @__PURE__ */ jsx(BookOpen, { className: "size-10" }) : /* @__PURE__ */ jsx(Award, { className: "size-10" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em]", children: "Click to view" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-3 rounded-full border border-accent/30 bg-background/75 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur", children: c.type })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsx("div", { className: "font-display font-bold leading-snug text-sm transition-colors group-hover:text-accent", children: c.title }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                  c.issuer,
                  " · ",
                  c.year
                ] })
              ] })
            ]
          },
          c.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "experience", className: "px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Certifications" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Experience & Offer Lettes" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground text-base", children: "Every certificate & offer letter earned." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: experiences.map((c) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "group overflow-hidden rounded-2xl border border-border/80 bg-accent/4 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-22px_rgba(124,110,247,.35)] cursor-pointer",
            onClick: () => setActiveCert(c),
            title: "Click to view full certificate",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-background", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: c.img || "",
                    alt: c.title,
                    loading: "lazy",
                    className: "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                    onError: (e) => {
                      e.currentTarget.style.display = "none";
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent/30 group-hover:text-accent/50 transition-colors", children: [
                  c.type === "Offer Letter" ? /* @__PURE__ */ jsx(Lock, { className: "size-10" }) : c.type === "Course" ? /* @__PURE__ */ jsx(BookOpen, { className: "size-10" }) : /* @__PURE__ */ jsx(Award, { className: "size-10" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em]", children: "Click to view" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-3 rounded-full border border-accent/30 bg-background/75 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur", children: c.type })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsx("div", { className: "font-display font-bold leading-snug text-sm transition-colors group-hover:text-accent", children: c.title }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                  c.issuer,
                  " · ",
                  c.year
                ] })
              ] })
            ]
          },
          c.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "achievements", className: "relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Achievements" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-6xl", children: "Wins along the way" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: achievements.map((a) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:border-accent/30 hover:-translate-y-1", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "size-5 shrink-0 text-accent mt-0.5" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-foreground/90 md:text-base", children: a })
        ] }, a)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "journey", className: "relative border-y border-border/60 bg-surface/40 px-6 py-28 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Journey" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-6xl", children: "My certification & personal timeline" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground text-base", children: "From curious beginner to aspiring penetration tester — every milestone, in order." })
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": true,
              className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-1/2 md:-translate-x-px"
            }
          ),
          journey.map((j, i) => {
            const Icon = j.icon;
            const isLeft = i % 2 === 0;
            return /* @__PURE__ */ jsxs(
              "li",
              {
                className: "relative mb-12 grid grid-cols-1 items-start gap-6 pl-14 md:grid-cols-2 md:pl-0",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": true,
                      className: "absolute left-0 top-1 inline-flex size-9 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_24px_-4px_var(--color-accent)] md:left-1/2 md:-translate-x-1/2",
                      children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `rounded-2xl border border-border/80 bg-background/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_48px_-16px_rgba(124,110,247,.25)] ${isLeft ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"}`,
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-1", children: j.year }),
                        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold tracking-tight md:text-2xl", children: j.title }),
                        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: j.body })
                      ]
                    }
                  )
                ]
              },
              j.title
            );
          })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "contact", className: "px-6 py-28 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface/60 p-8 text-center backdrop-blur-xl md:p-14", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-32 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-accent", children: "— Get in touch" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-5xl", children: "Let's build something secure." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground text-base leading-relaxed", children: "Have an opportunity, collaboration or a security question? Drop me a message." }),
        /* @__PURE__ */ jsxs("form", { ref: formRef, onSubmit, className: "mt-10 space-y-3 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
            /* @__PURE__ */ jsx("input", { name: "from_name", required: true, placeholder: "Your name", className: "w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]" }),
            /* @__PURE__ */ jsx("input", { name: "reply_to", type: "email", required: true, placeholder: "Your email", className: "w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]" })
          ] }),
          /* @__PURE__ */ jsx("input", { name: "subject", placeholder: "Subject", className: "w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", required: true, rows: 5, placeholder: "Your message…", className: "w-full resize-none rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,110,247,.12)]" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: status === "sending",
              className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white transition-all hover:bg-accent/85 hover:-translate-y-px hover:shadow-[0_8px_30px_-6px_var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
                status === "sending" ? "Sending…" : status === "ok" ? "✓ Sent — thank you!" : status === "err" ? "Something went wrong, try again" : "Send message"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("a", { href: "mailto:mrunalthale3011@gmail.com", className: "inline-flex items-center gap-2 transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
            " Email"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://github.com/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Github, { className: "size-4" }),
            " GitHub"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://linkedin.com/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "size-4" }),
            " LinkedIn"
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 px-6 py-8 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 Mrunal Thale · All rights reserved" }),
      /* @__PURE__ */ jsx("span", { children: "Stay curious · Stay secure" })
    ] }) })
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
