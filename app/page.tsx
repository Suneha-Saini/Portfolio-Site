import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Brain, BarChart3, Paintbrush, Monitor, Settings2Icon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  const skills = [
    { name: "Frontend", icon: Monitor, category: "Programming" },
    { name: "React", icon: Code, category: "Programming" },
    { name: "API-Integration", icon: Code, category: "Programming" },
    { name: "Backend", icon: Settings2Icon, category: "Programming" },
    { name: "DevOps", icon: Monitor, category: "Programming" },
    { name: "Git", icon: Monitor, category: "Programming" },
    { name: "Power Apps", icon: Code, category: "Power Platform" },
    { name: "Power Automate", icon: Code, category: "Power Platform" },
    { name: "Power Pages", icon: Code, category: "Power Platform" },
    { name: "Power BI", icon: BarChart3, category: "Power Platform" },
    { name: "Python", icon: Code, category: "Programming" },
    { name: "Full-Stack", icon: Settings2Icon, category: "Programming" },
    { name: "AI/ML", icon: Brain, category: "Data Science" },
    { name: "Dataverse", icon: Database, category: "Database" },
    { name: "Figma", icon: Paintbrush, category: "UI/UX" },
    { name: "Canva", icon: Paintbrush, category: "UI/UX" },
    { name: "SQL", icon: Database, category: "Database" }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white cursor-default">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">React Developer</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Suneha Saini
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-gray-300 font-medium">Web Developer | Power Platform Developer</p>
            </div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Passionate about building innovative solutions that bridge business needs with modern technology. I specialize in React development, Power Platform, and Python development — crafting intelligent dashboards, automated workflows, data-driven applications, and user-friendly apps that enhance efficiency and deliver real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/Resume/Suneha-Saini-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-gray-600 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-800 bg-transparent transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/Suneha-Saini" className="text-slate-500 dark:text-gray-400 hover:text-cyan-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/suneha-saini" className="text-slate-500 dark:text-gray-400 hover:text-cyan-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:er.sunehasaini@gmail.com" className="text-slate-500 dark:text-gray-400 hover:text-cyan-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-10 group cursor-default flex justify-center sm:block">
            {/* Mobile Circle */}
            <div className="block sm:hidden relative w-56 h-56 rounded-full border-4 border-cyan-500 overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <Image
                src="/images/About.png"
                alt="Suneha - Power Platform Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Desktop Card */}
            <div className="hidden sm:block relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <Image
                src="/images/About.png"
                alt="Suneha - Power Platform Developer"
                width={400}
                height={600}
                className="relative w-full h-auto rounded-2xl shadow-2xl drop-shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-100/50 dark:bg-black">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Experienced in building responsive React interfaces integrated with backend systems, APIs, and AI services. Proficient in developing smart, low-code solutions using Power Platform (Power Apps, Power Automate, Power BI, Dataverse) and automating workflows with Python and AI/ML. Focused on delivering scalable, user-centric, and data-driven applications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-cyan-50/50 via-white to-purple-50/50 dark:bg-none dark:bg-gray-900 border-slate-200 dark:border-gray-800 hover:border-cyan-500 transition-colors group shadow-sm dark:shadow-none">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1 cursor-default group-hover:cursor-default">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 group-hover:bg-slate-200 dark:group-hover:bg-gray-700 cursor-default group-hover:cursor-default">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </FadeIn>
      </section>

      {/* Project Section */}


      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              Ready to discuss your next Power Platform or Python project? Let's talk!
            </p>
          </div>
          <Card className="bg-gradient-to-br from-cyan-50/50 via-white to-purple-50/50 dark:bg-none dark:bg-gray-900 border-slate-200 dark:border-gray-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardContent className="p-8">
              <form action={`mailto:sainisuneha15@gmail.com?subject=Contact%20Form%20Submission`} method="POST" encType="text/plain" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-slate-50 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-50 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-slate-50 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </div>
  )
}