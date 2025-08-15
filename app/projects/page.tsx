"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      title: "Employee Management System",
      description:
        "A comprehensive Power Apps solution for managing employee data with automated workflows using Power Automate. Features include employee onboarding, leave management, and performance tracking.",
      tools: ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
      github: "#",
      live: "#",
      date: "2024",
      category: "Power Platform",
    },
 {
  "title": "DocQuery AI – PDF-Based Q&A Chatbot",
  "description": "Built an intelligent chatbot that allows users to upload PDFs and receive context-aware answers based on the document content. Leveraged Ollama to run OpenAI's LLaMA models locally, enabling secure, offline processing of user data. Designed to deliver accurate responses by implementing Retrieval-Augmented Generation (RAG) techniques for efficient document comprehension.",
  "tools": ["Python", "LLaMA", "Ollama", "RAG"],
  "github": "#",
  "live": "#",
  "date": "Mar 2025 - Apr 2025",
  "category": "Automation"
},
    {
  "title": "EduGen AI – AI-Powered Course Content Generator",
  "description": "Developed EduGen AI, an AI-powered Canvas App that automates course content creation by fetching selected course codes from a website and generating tailored materials. The app integrates Azure Functions for backend processing and stores the generated content in SharePoint. Built on Microsoft Power Platform, the solution streamlines educational content delivery through a clean UI and low-code automation.",
  "tools": ["Canvas App", "Azure Functions", "SharePoint", "Microsoft Power Platform"],
  "github": "#",
  "live": "#",
  "date": "Feb 2025 - Mar 2025",
  "category": "Power Platform",
},
   {
  "title": "Outclass PTE – AI-Enabled Online PTE Preparation Platform",
  "description": "Built a responsive PTE learning platform using React, supporting all modules—Speaking, Reading, Writing, and Listening. Integrated Dataverse for structured data storage and used Koyeb to process and store user responses. Questions are fetched dynamically through choice fields, enabling personalized practice and real-time performance tracking.",
  "tools": ["React", "Dataverse", "Koyeb", "Microsoft Power Platform"],
  "github": "#",
  "live": "#",
  "date": "Feb 2025 - Apr 2025",
  "category": "Automation"
},
 {
  "title": "Voice Assistant",
  "description": "Developed a Python-based voice assistant using SpeechRecognition for speech-to-text and pyttsx3 for text-to-speech. Automated tasks such as opening applications, performing web searches, and sending emails. Integrated command recognition to ensure a seamless user experience.",
  "tools": ["Python", "SpeechRecognition", "pyttsx3", "Automation", "Command Handling"],
  "github": "#",
  "live": "#",
  "date": "June 2023 - Aug 2023",
  "category": "Python"
},
{
  "title": "SwitchBlade – Qlik to Power BI Converter",
  "description": "Developing a frontend interface that bridges Qlik data with Power BI visualization needs. Built dynamic React components styled with Tailwind CSS to ensure a responsive and user-friendly design. Integrated APIs and mapped local storage values to display structured data on the UI. Focused on enhancing usability through clean UX, modular components, and seamless data rendering. Currently deployed and actively under development.",
  "tools": ["React", "Tailwind CSS", "API Integration", "UI/UX Development", "Local Storage Mapping"],
  "github": "#",
  "live": "#",
  "date": "April 2025 - Present",
  "category": "API Integration"
},
{
  "title": "SAP to Power BI Converter",
  "description": "Developed a frontend interface to seamlessly integrate SAP data with Power BI for enhanced data visualization. Utilized React for dynamic, modular components and styled with Tailwind CSS for a responsive, user-friendly design. Implemented API integration to fetch and transform SAP data, with local storage mapping for efficient data rendering on the UI. Focused on streamlined UX, modular architecture, and robust data connectivity to empower business intelligence workflows.",
  "tools": ["React", "Tailwind CSS", "API Integration", "UI/UX Development", "Local Storage Mapping"],
  "github": "#",
  "live": "#",
  "date": "July 2025 - Present",
  "category": "API Integration"
},
{
  "title": "Digital Bazaar – E-commerce Platform for Construction Essentials",
  "description": "Developed a React-based e-commerce website offering a wide range of construction goods, including architecture materials, plumbing items, carpentry tools, and paints. Designed with a user-friendly interface to simplify product browsing and streamline purchasing for contractors and homeowners.",
  "tools": ["React", "HTML", "CSS", "JavaScript", "E-commerce", "UI/UX Development"],
  "github": "#",
  "live": "#",
  "date": "Jan 2024 - June 2024",
  "category": "Front-end"
},
{
  "title": "Car Villa – Car Dealership Platform",
  "description": "Developed a modern React-based platform for listing and selling cars, featuring dynamic filtering, responsive design, and intuitive navigation. Optimized for seamless browsing, allowing users to easily compare models, view detailed specifications, and connect with sellers.",
  "tools": ["React", "HTML", "CSS", "JavaScript", "UI/UX Development", "Responsive Design"],
  "github": "#",
  "live": "#",
  "date": "Aug 2024 - Sept 2024",
  "category": "Front-end"
}

  ]

  const categories = [
    { name: "All", color: "bg-gray-600" },
    { name: "Power Platform", color: "bg-gray-600" },
    { name: "Python", color: "bg-gray-600" },
    { name: "Automation", color: "bg-gray-600" },
    { name: "Front-end", color: "bg-gray-600" },
    { name: "API Integration", color: "bg-gray-600" },
  ]

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white py-20 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                  : `${category.color} border-gray-600 text-white hover:bg-gray-800`
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-800 hover:text-gray-300">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="border-gray-600 text-gray-300 hover:border-gray-600 hover:text-gray-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-gray-800 flex-1 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-gray-800 flex-1 bg-transparent"
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
          <p className="text-gray-400 mb-6">I'm always open to discussing new opportunities and exciting projects.</p>
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