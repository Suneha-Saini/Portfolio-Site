"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, BarChart3, Brain, Globe, Send } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Power Platform Development",
      description: "Build low-code business applications using Microsoft Power Platform, including Power Apps (Canvas & Model-Driven), Power Automate for workflow automation, Power BI for data visualization, and Dataverse for scalable data management.",
      icon: Zap,
      highlights: [
        "Custom Power Apps for business automation",
        "Automated workflows with Power Automate",
        "Interactive Power BI dashboards",
        "Seamless Dataverse integration"
      ],
      badge: "Microsoft Ecosystem",
    },
    {
      title: "React Frontend Development",
      description: "Design and develop responsive, user-friendly interfaces using React.js and Tailwind CSS, integrated with APIs for dynamic, data-driven web applications.",
      icon: Code,
      highlights: [
        "Modern, responsive UI/UX with React",
        "API integration for real-time data",
        "Tailwind CSS for sleek, custom designs",
        "Cross-platform compatibility"
      ],
      badge: "Frontend Expertise",
    },
    {
      title: "Python Automation & AI/ML",
      description: "Develop Python-based automation scripts and integrate AI/ML models to streamline processes, enhance decision-making, and drive innovation for businesses.",
      icon: Brain,
      highlights: [
        "Custom automation scripts with Python",
        "AI/ML model integration for insights",
        "Data processing and analysis pipelines",
        "Workflow optimization solutions"
      ],
      badge: "Automation & AI",
    },
    {
      title: "Consulting & Workflow Optimization",
      description: "Provide expert consulting to optimize business processes, leveraging Power Platform, Microsoft 365, and custom solutions to improve efficiency and scalability.",
      icon: Globe,
      highlights: [
        "Business process analysis and redesign",
        "Microsoft 365 and Dynamics 365 integration",
        "Custom solution architecture",
        "Training and support for teams"
      ],
      badge: "Business Solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Section */}
        <div className="text-center space-y-6 mb-16 sm:mb-20">
          <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
            Professional Services
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I offer a range of professional services to help businesses transform their operations through cutting-edge technology. From low-code Power Platform solutions to custom React interfaces and Python-driven automation, I deliver scalable, efficient, and innovative solutions tailored to your needs.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            With a focus on quality, collaboration, and measurable impact, my services are designed to streamline workflows, enhance user experiences, and drive business growth.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 w-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              What I <span className="text-cyan-400">Offer</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Comprehensive solutions to empower your business with technology
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300 w-full max-w-sm"
                >
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-md">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white">{service.title}</CardTitle>
                    </div>
                    <div className="mt-2">
                      <Badge variant="secondary" className="bg-gray-800 text-xs sm:text-sm text-gray-400">
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Highlights</h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        {service.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2">
                            <span className="text-cyan-400">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to <span className="text-cyan-400">Transform</span> Your Business?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Let’s collaborate to build innovative solutions that drive efficiency and growth. Contact me today to discuss your project needs.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            <Send className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}