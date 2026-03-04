"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

// ─── Types ────────────────────────────────────────────────────────────────────
interface CategoryVariant {
  description: string
  tools: string[]
  badge?: string // optional override for the badge label
}

interface Project {
  title: string
  description: string          // shown in "All"
  categories: string[]         // one or more categories
  tools: string[]              // shown in "All"
  github: string
  live: string
  date: string
  categoryVariants?: Record<string, CategoryVariant>  // category-specific overrides
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects: Project[] = [
    {
      title: "Migration tool – Tableau to Power BI",
      description:
        "Developed a full-scale migration platform to convert Tableau reports to Power BI. Led frontend UI development using React.js and Fluent UI, built a Python-based report generation agent for backend processing, and integrated multiple backend APIs to display structured migration data on the frontend. Currently deployed and under active development.",
      categories: ["Front-end", "Back-end", "API Integration"],
      tools: ["React", "Fluent UI", "API Integration", "UI/UX Development", "API Creation", "Backend Development", "Python", "Migration", "LLM", "Azure DevOps", "Power BI"],
      github: "#",
      live: "#",
      date: "Feb 2026 - Present",
      categoryVariants: {
        "Front-end": {
          description:
            "Built the complete frontend UI using React.js and Fluent UI, creating responsive and modular components for report interaction and visualization. Designed the entire user interface for managing Tableau-to-Power BI migration workflows.",
          tools: ["React", "Fluent UI", "UI/UX Development", "Azure DevOps", "Power BI"],
          badge: "Front-end",
        },
        "Back-end": {
          description:
            "Developed a Python-based migration agent that processes Tableau report structures and generates corresponding Power BI report configurations. Built the backend pipeline using Python and LLMs to automate report conversion.",
          tools: ["Python", "LLM", "API Creation", "Backend Development", "Azure DevOps", "Power BI"],
          badge: "Back-end",
        },
        "API Integration": {
          description:
            "Integrated several backend APIs into the frontend, fetching and displaying structured migration data. Mapped backend responses and local storage values to the interface for seamless data rendering across report components.",
          tools: ["API Integration", "React", "Fluent UI", "Azure DevOps", "Power BI"],
          badge: "API Integration",
        },
      },
    },
    {
      title: "Migration tool – Qlik to Power BI",
      description:
        "Developed a frontend interface bridging Qlik data with Power BI visualization needs. Built dynamic React components with Tailwind CSS, integrated backend APIs to display structured data, and created a Python-based validation API to verify migration accuracy. Currently deployed and actively under development.",
      categories: ["Front-end", "API Integration", "Python"],
      tools: ["React", "Tailwind CSS", "API Integration", "UI/UX Development", "API Creation", "Python", "Azure DevOps", "Power BI"],
      github: "#",
      live: "#",
      date: "Apr 2025 - Nov 2025",
      categoryVariants: {
        "Front-end": {
          description:
            "Created the complete frontend interface using React and Tailwind CSS. Built responsive, modular components for report interaction, data visualization, and migration workflow management.",
          tools: ["React", "Tailwind CSS", "UI/UX Development", "Azure DevOps", "Power BI"],
          badge: "Front-end",
        },
        "API Integration": {
          description:
            "Integrated several backend APIs into the frontend to fetch and display structured migration data. Mapped API responses and local storage values to the UI for seamless data rendering across components.",
          tools: ["API Integration", "React", "Local Storage Mapping", "Azure DevOps", "Power BI"],
          badge: "API Integration",
        },
        "Python": {
          description:
            "Created a Python-based validation API that checks and verifies whether the migrated Power BI report results are accurate compared to the original Qlik reports, ensuring data integrity throughout the migration process.",
          tools: ["Python", "API Creation", "Data Validation", "Azure DevOps", "Power BI"],
          badge: "Python",
        },
      },
    },
    {
      title: "Outclass PTE – AI-Enabled Online PTE Preparation Platform",
      description:
        "Built a comprehensive PTE learning platform with the entire interface developed in Power Pages, supporting all modules—Speaking, Reading, Writing, and Listening. Integrated Dataverse for structured data storage and used Koyeb to process and store user responses. Questions are fetched dynamically through choice fields, enabling personalized practice and real-time performance tracking.",
      categories: ["Automation", "Power Platform"],
      tools: ["Power Pages", "Dataverse", "Koyeb", "Microsoft Power Platform", "Power Automate"],
      github: "#",
      live: "#",
      date: "Feb 2025 - Apr 2025",
      categoryVariants: {
        "Power Platform": {
          description:
            "Developed the entire user interface using Power Pages, creating a responsive and intuitive learning platform. Leveraged Dataverse for structured data storage and integrated it with the Power Platform ecosystem for seamless data management.",
          tools: ["Power Pages", "Dataverse", "Microsoft Power Platform"],
          badge: "Power Platform",
        },
        "Automation": {
          description:
            "Automated question delivery and response processing using Power Automate and Koyeb. Questions are fetched dynamically through choice fields, enabling personalized practice sessions and real-time performance tracking across all PTE modules.",
          tools: ["Power Automate", "Koyeb", "Dataverse", "Microsoft Power Platform"],
          badge: "Automation",
        },
      },
    },
    {
      title: "Employee Management System",
      description:
        "A comprehensive Power Apps solution for managing employee data with automated workflows using Power Automate. Features include employee onboarding, leave management, and performance tracking.",
      categories: ["Power Platform"],
      tools: ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
      github: "#",
      live: "#",
      date: "2024",
    },
    {
      title: "DocQuery AI – PDF-Based Q&A Chatbot",
      description:
        "Built an intelligent chatbot using Python and Ollama that allows users to upload PDFs and receive context-aware answers based on the document content. Leveraged LLaMA models locally for secure, offline processing and implemented RAG techniques for efficient document comprehension.",
      categories: ["Automation", "Python"],
      tools: ["Python", "LLaMA", "Ollama", "RAG", "AI/ML"],
      github: "#",
      live: "#",
      date: "Mar 2025 - Apr 2025",
      categoryVariants: {
        "Automation": {
          description:
            "Built an intelligent automated chatbot that processes uploaded PDFs and delivers context-aware answers. Implemented Retrieval-Augmented Generation (RAG) techniques for efficient document comprehension and automated question answering.",
          tools: ["RAG", "LLaMA", "Ollama", "AI/ML"],
          badge: "Automation",
        },
        "Python": {
          description:
            "Developed the entire chatbot application in Python, leveraging Ollama to run LLaMA models locally for secure, offline PDF processing. Built the core logic for document parsing, embedding generation, and AI-powered question answering.",
          tools: ["Python", "LLaMA", "Ollama", "RAG", "AI/ML"],
          badge: "Python",
        },
      },
    },
    {
      title: "EduGen AI – AI-Powered Course Content Generator",
      description:
        "Developed EduGen AI, an AI-powered Canvas App that automates course content creation by fetching selected course codes from a website and generating tailored materials. The app integrates Azure Functions for backend processing and stores the generated content in SharePoint. Built on Microsoft Power Platform, the solution streamlines educational content delivery through a clean UI and low-code automation.",
      categories: ["Power Platform"],
      tools: ["Canvas App", "Azure Functions", "SharePoint", "Microsoft Power Platform"],
      github: "#",
      live: "#",
      date: "Feb 2025 - Mar 2025",
    },
    {
      title: "Voice Assistant",
      description:
        "Developed a Python-based voice assistant using SpeechRecognition for speech-to-text and pyttsx3 for text-to-speech. Automated tasks such as opening applications, performing web searches, and sending emails. Integrated command recognition to ensure a seamless user experience.",
      categories: ["Python"],
      tools: ["Python", "SpeechRecognition", "pyttsx3", "Automation", "Command Handling"],
      github: "#",
      live: "#",
      date: "June 2023 - Aug 2023",
    },
    {
      title: "SAP to Power BI Converter",
      description:
        "Developed a frontend interface to seamlessly integrate SAP data with Power BI for enhanced data visualization. Built a responsive React UI with Tailwind CSS and integrated backend APIs to fetch and transform SAP data for rendering on the frontend.",
      categories: ["Front-end", "API Integration"],
      tools: ["React", "Tailwind CSS", "API Integration", "UI/UX Development", "Local Storage Mapping"],
      github: "#",
      live: "#",
      date: "July 2025 - Present",
      categoryVariants: {
        "Front-end": {
          description:
            "Developed the complete frontend interface using React and Tailwind CSS. Created dynamic, modular components for SAP data visualization with a responsive, user-friendly design.",
          tools: ["React", "Tailwind CSS", "UI/UX Development", "Responsive Design"],
          badge: "Front-end",
        },
        "API Integration": {
          description:
            "Implemented API integration to fetch and transform SAP data for Power BI visualization. Mapped backend API responses and local storage values to the UI for efficient, seamless data rendering.",
          tools: ["API Integration", "React", "Local Storage Mapping", "Power BI"],
          badge: "API Integration",
        },
      },
    },
    {
      title: "Digital Bazaar – E-commerce Platform for Construction Essentials",
      description:
        "Developed a React-based e-commerce website offering a wide range of construction goods, including architecture materials, plumbing items, carpentry tools, and paints. Designed with a user-friendly interface to simplify product browsing and streamline purchasing.",
      categories: ["Front-end"],
      tools: ["React", "HTML", "CSS", "JavaScript", "E-commerce", "UI/UX Development"],
      github: "#",
      live: "#",
      date: "Jan 2024 - June 2024",
    },
    {
      title: "Car Villa – Car Dealership Platform",
      description:
        "Developed a modern React-based platform for listing and selling cars, featuring dynamic filtering, responsive design, and intuitive navigation. Optimized for seamless browsing, allowing users to easily compare models, view detailed specifications, and connect with sellers.",
      categories: ["Front-end"],
      tools: ["React", "HTML", "CSS", "JavaScript", "UI/UX Development", "Responsive Design"],
      github: "#",
      live: "#",
      date: "Aug 2024 - Sept 2024",
    },
  ]

  const categories = [
    { name: "All" },
    { name: "Front-end" },
    { name: "Back-end" },
    { name: "Power Platform" },
    { name: "Python" },
    { name: "Automation" },
    { name: "API Integration" },
  ]

  // ─── Filtering logic ────────────────────────────────────────────────────────
  // "All"  → each project appears ONCE with its default description/tools
  // Category → projects that belong to that category appear, with
  //             category-specific description/tools when defined (categoryVariants)
  const filteredProjects = (() => {
    if (selectedCategory === "All") {
      return projects.map((p) => ({
        ...p,
        displayDescription: p.description,
        displayTools: p.tools,
        displayBadge: p.categories[0],
      }))
    }
    return projects
      .filter((p) => p.categories.includes(selectedCategory))
      .map((p) => {
        const variant = p.categoryVariants?.[selectedCategory]
        return {
          ...p,
          displayDescription: variant?.description ?? p.description,
          displayTools: variant?.tools ?? p.tools,
          displayBadge: variant?.badge ?? selectedCategory,
        }
      })
  })()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-20 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing Power Platform development, Python applications, and data analytics
            solutions that solve real-world business problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                  : "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-12 sm:gap-24 w-full max-w-4xl mx-auto pb-32">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="sticky w-full bg-gradient-to-br from-cyan-50 via-white to-purple-50 dark:bg-none dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-all duration-300 group flex flex-col shadow-xl dark:shadow-sm"
              style={{ top: `calc(100px + ${index * 20}px)` }}
            >
              <CardHeader>
                <div className={`flex items-center mb-2 ${selectedCategory !== "All" ? "justify-between" : "justify-center"}`}>
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      {project.displayBadge}
                    </Badge>
                  )}
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{project.displayDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.displayTools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 flex-1 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 flex-1 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">I'm always open to discussing new opportunities and exciting projects.</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}