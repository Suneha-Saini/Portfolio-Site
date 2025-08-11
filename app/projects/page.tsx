import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A comprehensive Power Apps solution for managing employee data with automated workflows using Power Automate. Features include employee onboarding, leave management, and performance tracking.",
      tools: ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
      github: "#",
      live: "#",
      date: "2023",
      category: "Power Platform",
    },
    {
      title: "Sales Analytics Dashboard",
      description:
        "Interactive Power BI dashboard providing real-time sales insights and predictive analytics using Python. Includes forecasting models and automated reporting.",
      tools: ["Power BI", "Python", "SQL", "AI/ML"],
      github: "#",
      live: "#",
      date: "2023",
      category: "Analytics",
    },
    {
      title: "Customer Portal",
      description:
        "Modern customer-facing portal built with Power Pages, integrated with backend systems via Power Automate. Features customer support, order tracking, and self-service options.",
      tools: ["Power Pages", "Power Automate", "Dataverse"],
      github: "#",
      live: "#",
      date: "2023",
      category: "Power Platform",
    },
    {
      title: "Inventory Optimization Tool",
      description:
        "Python-based machine learning solution for inventory forecasting and optimization with Django web interface. Reduces inventory costs by 25% through predictive analytics.",
      tools: ["Python", "Django", "AI/ML", "SQL"],
      github: "#",
      live: "#",
      date: "2022",
      category: "Machine Learning",
    },
    {
      title: "Automated Report Generator",
      description:
        "Power Automate solution that automatically generates and distributes weekly reports from multiple data sources. Saves 10+ hours of manual work per week.",
      tools: ["Power Automate", "Power BI", "SharePoint", "Outlook"],
      github: "#",
      live: "#",
      date: "2022",
      category: "Automation",
    },
    {
      title: "Data Migration Tool",
      description:
        "Python application for migrating legacy data to modern cloud platforms. Handles data validation, transformation, and error reporting with 99.9% accuracy.",
      tools: ["Python", "Pandas", "SQL", "Azure"],
      github: "#",
      live: "#",
      date: "2022",
      category: "Data Engineering",
    },
  ]

  const categories = ["All", "Power Platform", "Analytics", "Machine Learning", "Automation", "Data Engineering"]

  return (
    <div className="min-h-screen bg-black text-white py-20">
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
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  : "border-gray-600 text-white hover:bg-gray-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">
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
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="border-gray-600 text-gray-300">
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
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
