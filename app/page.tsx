import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Brain, BarChart3, Paintbrush, Monitor, Settings2Icon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const skills = [
    { name: "Frontend", icon: Monitor, category: "Programming" },
    { name: "React", icon: Code, category: "Programming" },
    { name: "API-Integration", icon: Code, category: "Programming" },
    { name: "Backend", icon: Settings2Icon, category: "Programming" },
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

  const projects = [
    {
      title: "Employee Management System",
      description:
        "A comprehensive Power Apps solution for managing employee data with automated workflows using Power Automate.",
      tools: ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
      github: "#",
      live: "#",
    },
    {
      title: "Sales Analytics Dashboard",
      description:
        "Interactive Power BI dashboard providing real-time sales insights and predictive analytics using Python.",
      tools: ["Power BI", "Python", "SQL", "AI/ML"],
      github: "#",
      live: "#",
    },
    {
      title: "Customer Portal",
      description:
        "Modern customer-facing portal built with Power Pages, integrated with backend systems via Power Automate.",
      tools: ["Power Pages", "Power Automate", "Dataverse"],
      github: "#",
      live: "#",
    },
    {
      title: "Inventory Optimization Tool",
      description:
        "Python-based machine learning solution for inventory forecasting and optimization with Django web interface.",
      tools: ["Python", "Django", "AI/ML", "SQL"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white cursor-default">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Power Platform Developer</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Suneha Saini
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-medium">Web Developer | Power Platform Developer</p>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Passionate about building innovative solutions that bridge business needs with modern technology. I specialize in Power Platform, Python, and React development — crafting intelligent dashboards, automated workflows, and data-driven applications that enhance efficiency and deliver real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/Resume/Suneha-Saini-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/Suneha-Saini" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/suneha-saini" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:er.sunehasaini@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/images/About.png"
                alt="Suneha - Power Platform Developer"
                width={400}
                height={600}
                className="relative rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experienced in building responsive React interfaces integrated with backend systems, APIs, and AI services. Proficient in developing smart, low-code solutions using Power Platform (Power Apps, Power Automate, Power BI, Dataverse) and automating workflows with Python and AI/ML. Focused on delivering scalable, user-centric, and data-driven applications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-colors group">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="font-semibold text-white mb-1 cursor-default group-hover:cursor-default">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-400 group-hover:bg-gray-800 group-hover:text-gray-400 cursor-default group-hover:cursor-default">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work in Power Platform development and Python applications and React Development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-white cursor-default group-hover:cursor-default">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-400 cursor-default group-hover:cursor-default">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="bg-gray-800 text-gray-300 group-hover:bg-gray-800 group-hover:text-gray-300 cursor-default group-hover:cursor-default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black bg-transparent"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to discuss your next Power Platform or Python project? Let's talk!
            </p>
          </div>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form action={`mailto:sainisuneha15@gmail.com?subject=Contact%20Form%20Submission`} method="POST" encType="text/plain" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
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
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}