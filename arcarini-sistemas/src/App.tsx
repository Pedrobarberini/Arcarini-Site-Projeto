import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  BrainCircuit,
  Cable,
  Cpu,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  MessageCircle,
  ShieldCheck,
  Layers,
  Code2,
  Sparkles,
  Building2,
  Rocket,
  Wrench,
} from "lucide-react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300/70 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-amber-400/30",
    secondary:
      "bg-white text-slate-950 shadow-lg shadow-white/10 hover:-translate-y-0.5 hover:bg-slate-100",
    outline:
      "border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

type CardProps = React.HTMLAttributes<HTMLDivElement>;

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={cn("p-7", className)} {...props}>
      {children}
    </div>
  );
}

const services = [
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento e manutenção de aplicativos Android, Kotlin, React Native e Expo, com integração a APIs e publicação na Google Play.",
    items: ["Apps Android", "React Native", "Correção de bugs", "Publicação na loja"],
  },
  {
    icon: Server,
    title: "Backend e APIs",
    description:
      "Criação de backends robustos com Java, Kotlin, Spring Boot, autenticação, banco de dados, Docker e documentação técnica.",
    items: ["APIs REST", "Spring Boot", "JWT", "Docker e deploy"],
  },
  {
    icon: BrainCircuit,
    title: "IA Aplicada",
    description:
      "Protótipos e soluções com machine learning, NLP, chatbots, LLMs, classificação de textos e automação de processos.",
    items: ["Chatbots", "NLP", "LLMs", "Automação inteligente"],
  },
  {
    icon: Cable,
    title: "Integração de Sistemas",
    description:
      "Integração entre sistemas corporativos, ERPs, APIs, mensageria e automação de fluxos de negócio.",
    items: ["ERPs", "APIs intermediárias", "Sistemas legados", "Arquitetura"],
  },
  {
    icon: Cpu,
    title: "IoT e Sistemas Embarcados",
    description:
      "Soluções com ESP32, sensores, coleta de dados, dashboards e monitoramento remoto para aplicações industriais e comerciais.",
    items: ["ESP32", "Sensores", "Dashboards", "Monitoramento"],
  },
  {
    icon: Users,
    title: "Consultoria e Apoio Part-time",
    description:
      "Apoio técnico recorrente para empresas que precisam de experiência em software sem montar uma equipe interna full-time.",
    items: ["Pacote mensal", "Mentoria técnica", "MVPs", "Manutenção evolutiva"],
  },
];

const workModels = [
  {
    icon: Rocket,
    title: "Projeto fechado",
    text: "Ideal para demandas com escopo definido, como criação de API, aplicativo, dashboard, integração ou protótipo.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria técnica",
    text: "Diagnóstico, arquitetura, planejamento, revisão técnica e apoio à tomada de decisão em projetos de software.",
  },
  {
    icon: Wrench,
    title: "Apoio mensal",
    text: "Pacotes recorrentes de horas para manutenção, evolução de sistemas, correções e pequenas melhorias contínuas.",
  },
  {
    icon: Sparkles,
    title: "MVP e prototipação",
    text: "Validação rápida de ideias com software funcional antes de investimentos maiores em desenvolvimento.",
  },
];

const expertise = [
  "Kotlin",
  "Java",
  "Spring Boot",
  "React Native",
  "Expo",
  "Android",
  "Python",
  "Machine Learning",
  "NLP",
  "LLMs",
  "ESP32",
  "Docker",
  "APIs REST",
  "JWT",
  "Integração de Sistemas",
  "IBM BPM",
  "IBM Integration Bus",
  "Dashboards",
];

const stats = [
  { value: "20+", label: "anos em tecnologia" },
  { value: "11", label: "anos na IBM Brasil" },
  { value: "6+", label: "anos em arquitetura e full-stack" },
];

export default function ArcariniSistemasSite() {
  const [showHeader, setShowHeader] = React.useState(true);
  const [selectedService, setSelectedService] = React.useState<any>(null);

React.useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY < 80) {
      setShowHeader(true);
    } else if (window.scrollY < lastScrollY) {
      // subindo
      setShowHeader(true);
    } else {
      // descendo
      setShowHeader(false);
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased selection:bg-amber-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(251,191,36,0.16),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />

      <header
  className={cn(
    "fixed top-0 left-0 right-0 z-50 border-b border-amber-400/10 bg-black/80 backdrop-blur-2xl transition-transform duration-300",
    showHeader ? "translate-y-0" : "-translate-y-full"
  )}
>
      
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-slate-950 shadow-lg shadow-amber-400/20 transition group-hover:scale-105">
              <Code2 size={22} />
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-white">Arcarini Sistemas</p>
              <p className="text-xs text-slate-400">Software • Mobile • IA • Integração</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-slate-300 lg:flex">
            {[
              ["Home", "#"],
              ["Soluções", "#solucoes"],
              ["Modelos", "#modelos"],
              ["Sobre", "#sobre"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:inline-flex">Solicitar conversa</Button>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-6 md:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-amber-950/20">
                <Sparkles size={16} /> Desenvolvimento sob demanda, consultoria e apoio part-time
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Tecnologia para transformar ideias em sistemas reais.
              </h1>

              <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-300 md:text-xl">
                Criamos e evoluímos aplicativos mobile, backends, integrações, automações, soluções IoT e projetos com IA aplicada para empresas que precisam avançar sem montar uma equipe interna completa.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="px-6 py-4 text-base">
                  Solicitar uma conversa <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="px-6 py-4 text-base">
                  Conhecer soluções
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-300/20 via-yellow-400/10 to-transparent blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2.25rem]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300" />
                <CardContent className="p-8 md:p-9">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-yellow-300/12 p-3 text-yellow-200 ring-1 ring-yellow-300/20">
                        <Layers />
                      </div>
                      <div>
                        <p className="font-bold text-white">Soluções flexíveis</p>
                        <p className="text-sm text-slate-400">Do diagnóstico ao software em produção</p>
                      </div>
                    </div>
                    <div className="hidden rounded-full bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-300 ring-1 ring-yellow-300/20 sm:block">
                      PJ • Projeto • Mensal
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Criação de MVPs e protótipos funcionais",
                      "Manutenção e evolução de sistemas existentes",
                      "Integração entre aplicativos, APIs e ERPs",
                      "Uso prático de IA para automação de processos",
                      "Apoio técnico recorrente em formato part-time",
                    ].map((item) => (
                      <div key={item} className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/45 p-4 transition hover:border-amber-300/25 hover:bg-slate-900/80">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-amber-300" size={19} />
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="solucoes" className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Soluções</p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">Ofertas fechadas para necessidades reais de tecnologia</h2>
              <p className="mt-4 text-pretty text-base leading-7 text-slate-400">
                Serviços organizados para empresas que precisam desenvolver, integrar, automatizar ou evoluir sistemas com clareza de escopo e flexibilidade de contratação.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 lg:max-w-sm">
              <Building2 className="mb-3 text-yellow-300" size={22} />
              Atendimento para empresas, startups, software houses, instituições de ensino e negócios que precisam acelerar produtos digitais.
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                 <Card
                      onClick={() => setSelectedService(service)}
                      className="group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.075]"
                    >
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="inline-flex rounded-2xl bg-gradient-to-br from-amber-300/18 to-yellow-300/10 p-3 text-amber-200 ring-1 ring-white/10 transition group-hover:scale-105">
                          <Icon size={28} />
                        </div>
                        <ArrowRight className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-amber-300" size={20} />
                      </div>
                      <h3 className="text-xl font-black text-white">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{service.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="modelos" className="relative py-20">
          <div className="absolute inset-0 bg-white/[0.035]" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Como trabalhamos</p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">Formatos flexíveis para diferentes momentos da empresa</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                A contratação pode ser adaptada ao tamanho da demanda: desde uma análise técnica pontual até um pacote mensal de apoio ao desenvolvimento.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workModels.map((model, index) => {
                const Icon = model.icon;
                return (
                  <Card key={model.title} className="relative h-full overflow-hidden rounded-[1.75rem] bg-slate-950/55 transition hover:-translate-y-1 hover:border-yellow-300/25">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-200 ring-1 ring-yellow-300/15">
                          <Icon size={22} />
                        </div>
                        <span className="text-sm font-black text-slate-600">0{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-black text-white">{model.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{model.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Sobre</p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">Experiência acadêmica, corporativa e prática em desenvolvimento de software</h2>
          </div>
          <Card className="rounded-[2rem]">
            <CardContent className="space-y-5 p-7 text-base leading-8 text-slate-300 md:p-9">
              <p>
                A Arcarini Sistemas é conduzida por um profissional com experiência em ensino superior, arquitetura de sistemas, desenvolvimento mobile, backend, integração de sistemas, IoT e inteligência artificial aplicada.
              </p>
              <p>
                A trajetória inclui atuação como professor em cursos de tecnologia, experiência como arquiteto de sistemas na IBM Brasil, consultoria em integração de sistemas, projetos com Spring Boot, Kotlin, React Native, ESP32, dashboards, machine learning, NLP e chatbots integrados a sistemas corporativos.
              </p>
              <p>
                Essa combinação permite apoiar empresas tanto na implementação técnica quanto na análise de arquitetura, documentação, treinamento, evolução de produtos digitais e criação de protótipos funcionais.
              </p>
              <div className="pt-3">
                <p className="mb-3 text-sm font-bold text-white">Principais tecnologias e competências</p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-sm text-slate-300 transition hover:border-amber-300/30 hover:text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-5 pb-24 md:px-6">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-300 p-px shadow-2xl shadow-amber-950/20">
            <div className="rounded-[2.2rem] bg-slate-950/92 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Contato</p>
                  <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">Vamos conversar sobre sua demanda?</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                    Entre em contato para discutir um projeto, uma consultoria técnica, um MVP, uma integração ou um pacote mensal de apoio ao desenvolvimento.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Button className="px-6 py-4 text-base">
                    <MessageCircle className="mr-2" size={18} /> WhatsApp
                  </Button>
                  <Button variant="outline" className="px-6 py-4 text-base">
                    <Mail className="mr-2" size={18} /> E-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {selectedService && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
    <div className="relative w-full max-w-2xl rounded-[2rem] border border-amber-300/20 bg-slate-950 p-8 shadow-2xl shadow-amber-400/10">

      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-5 top-5 text-slate-400 transition hover:text-white"
      >
        ✕
      </button>

      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-amber-300/20 to-yellow-300/10 p-4 text-amber-200">
          <selectedService.icon size={34} />
        </div>

        <div>
          <h2 className="text-3xl font-black text-white">
            {selectedService.title}
          </h2>

          <p className="mt-2 text-slate-400">
            {selectedService.description}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
          Tecnologias e serviços
        </p>

        <div className="flex flex-wrap gap-3">
          {selectedService.items.map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm leading-7 text-slate-300">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc faucibus tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
  </div>
)}
      </main>

      <footer className="border-t border-white/10 px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Arcarini Sistemas. Todos os direitos reservados.</p>
          <p>Desenvolvimento de sistemas, aplicativos, integrações e IA aplicada.</p>
        </div>
      </footer>
    </div>
  );
}
