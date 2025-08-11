"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Award,
  Calendar,
  MapPin,
  Building,
  TrendingUp,
  Target,
  Code,
  Database,
  Brain,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  Star,
  ExternalLink,
  X,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("skills")
  const [activeSkillTab, setActiveSkillTab] = useState("Programming Languages & Libraries")
  const [activeExperienceTab, setActiveExperienceTab] = useState("professional")
  const [activeEducationTab, setActiveEducationTab] = useState("qualification")
  const [selectedImage, setSelectedImage] = useState(null)

  const skills = [
    {
      name: "Programming Languages & Libraries",
      subSkills: [
        { name: "JavaScript", level: 90, icon: Code, experience: "4+ years", projects: 20 },
        { name: "React.js", level: 88, icon: Code, experience: "3+ years", projects: 15 },
        { name: "HTML", level: 95, icon: Code, experience: "5+ years", projects: 25 },
        { name: "CSS", level: 92, icon: Code, experience: "5+ years", projects: 22 },
        { name: "Python", level: 92, icon: Code, experience: "4+ years", projects: 25 },
        { name: "SQL", level: 89, icon: Database, experience: "4+ years", projects: 22 },
      ],
      category: "Programming",
    },
    {
      name: "Power Platform & Automation",
      subSkills: [
        { name: "Power Apps (Canvas & Model-Driven)", level: 95, icon: Zap, experience: "3+ years", projects: 15 },
        { name: "Power Automate", level: 90, icon: Zap, experience: "3+ years", projects: 20 },
        { name: "Dataverse", level: 90, icon: Database, experience: "3+ years", projects: 18 },
      ],
      category: "Power Platform",
    },
    {
      name: "Frontend & UI Development",
      subSkills: [
        { name: "React.js", level: 88, icon: Code, experience: "3+ years", projects: 15 },
        { name: "Tailwind CSS", level: 85, icon: Code, experience: "2+ years", projects: 10 },
        { name: "Responsive Design", level: 87, icon: Globe, experience: "3+ years", projects: 12 },
      ],
      category: "Frontend",
    },
    {
      name: "Testing Tools & Practices",
      subSkills: [
        { name: "Postman", level: 85, icon: CheckCircle, experience: "2+ years", projects: 8 },
        { name: "Manual Testing", level: 80, icon: CheckCircle, experience: "2+ years", projects: 10 },
        { name: "Debugging Tools", level: 82, icon: Code, experience: "2+ years", projects: 9 },
      ],
      category: "Testing",
    },
    {
      name: "Microsoft Ecosystem Integration",
      subSkills: [
        { name: "Power BI", level: 88, icon: BarChart3, experience: "2+ years", projects: 12 },
        { name: "Microsoft 365", level: 85, icon: Building, experience: "2+ years", projects: 10 },
        { name: "Dynamics 365", level: 83, icon: Building, experience: "2+ years", projects: 8 },
      ],
      category: "Microsoft",
    },
    {
      name: "Analytical Skills",
      subSkills: [
        { name: "Data Visualization", level: 87, icon: BarChart3, experience: "2+ years", projects: 12 },
        { name: "Workflow Optimization", level: 85, icon: TrendingUp, experience: "3+ years", projects: 15 },
      ],
      category: "Analytics",
    },
    {
      name: "Soft Skills",
      subSkills: [
        { name: "Collaboration", level: 90, icon: Star, experience: "4+ years", projects: 20 },
        { name: "Problem Solving", level: 92, icon: Brain, experience: "4+ years", projects: 25 },
        { name: "Time Management", level: 88, icon: Calendar, experience: "4+ years", projects: 20 },
        { name: "Teamwork", level: 89, icon: Star, experience: "4+ years", projects: 22 },
      ],
      category: "Soft Skills",
    },
  ]

  const experiences = [
    {
      title: "Power Platform & React Developer",
      company: "AOSC Technologies",
      period: "Feb 2025 - Present",
      location: "Amritsar, On-Site",
      type: "Full-time",
      description: "Working on low-code and custom-code solutions for internal products and client-facing platforms, integrating Power Platform capabilities with modern React-based interfaces.",
      achievements: [
        "Successfully integrated 4 backend bots (Assessment, Parsing, Mapping, Report Generation) with a unified frontend interface using React and APIs",
        "Redesigned UI/UX of reporting modules for enhanced user experience and data clarity",
        "Built and enhanced multiple modules in Power Pages, Power Apps (Canvas and Model-Driven), and automated email notifications using Power Automate",
        "Contributed to high-impact project ‘SAP to Power BI Converter’ by integrating data pipelines and building assessment workflows",
        "Collaborated via GitHub across multiple branches like ‘main’, ‘parsing’, and ‘assessment’ for modular development"
      ],
      technologies: ["Power Apps", "Power Automate", "Power Pages", "React", "Azure DevOps", "Figma", "GitHub"],
      impact: {
        modules_developed: "10+",
        automation_flows_created: "20+",
        UX_improvement: "Significantly increased client usability scores",
        api_integrations: "10+"
      }
    }
  ]

  const freelanceExperiences = [
    {
      title: "Freelance Power Platform Consultant",
      company: "Independent",
      period: "Mar 2021 - Dec 2023",
      location: "Remote",
      type: "Freelance",
      description: "Provided custom Power Platform solutions for small to medium businesses.",
      achievements: [
        "Developed 10+ Power Apps for client automation",
        "Created dashboards increasing client efficiency by 50%",
        "Completed 25+ projects with 100% on-time delivery",
        "Built a client base of 15+ recurring customers",
      ],
      technologies: ["Power Apps", "Power Automate", "Power BI"],
      impact: {
        projects_completed: "25+",
        efficiency_improvement: "50%",
        clients_served: "15+",
      },
    },
    {
      title: "Personal Web Development Projects",
      company: "Self-Initiated",
      period: "Jan 2020 - Present",
      location: "Remote",
      type: "Personal",
      description: "Built and maintained personal projects to enhance skills and portfolio.",
      achievements: [
        "Launched 5 open-source React applications",
        "Achieved 1,000+ GitHub stars across projects",
        "Created a personal blog with 500+ monthly visits",
        "Experimented with new tech like Next.js and Tailwind",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      impact: {
        github_stars: "1,000+",
        projects_launched: "5",
        blog_visits: "500+/month",
      },
    },
  ]

  const internshipExperiences = [
  {
    title: "Power Platform Intern",
    company: "AOSC Technologies",
    period: "Jun 2024 - Jan 2025",
    location: "Amritsar, India (On-site)",
    type: "Internship",
    description: "Contributed to building low-code solutions using Power Platform to streamline internal workflows and data collection.",
    achievements: [
      "Created interactive Power Apps modules for internal use and client demonstrations",
      "Automated multiple business processes using Power Automate and Microsoft Forms",
      "Integrated custom connectors and supported data visualization using Power BI",
      "Assisted in testing and debugging Power Pages forms and UI components"
    ],
    technologies: ["Power Apps", "Power Automate", "Power Pages", "Power BI", "Dataverse"],
    impact: {
      modules_created: "3+",
      flows_automated: "10+",
      internal_efficiency_gain: "Noticeable reduction in manual entry"
    }
  },
  {
    title: "Python Intern",
    company: "Future Finders",
    period: "Jun 2023 - Jul 2023",
    location: "Amritsar, India (On-site)",
    type: "Internship",
    description: "Worked on data analysis tasks and Python scripting to extract insights from datasets and automate calculations.",
    achievements: [
      "Learned and applied core Python concepts for real-time data manipulation",
      "Performed data cleaning and basic statistical analysis using NumPy and Pandas",
      "Built simple scripts to automate repetitive Excel-based tasks"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
    impact: {
      tasks_automated: "5+",
      datasets_processed: "10+",
      accuracy_improvement: "Consistent across analyses"
    }
  },
  {
    title: "Web Development & Office Tools Intern",
    company: "Khalsa College of Engineering & Technology",
    period: "Jun 2022",
    location: "Amritsar, India (On-site)",
    type: "Internship",
    description: "Completed a practical training program focused on front-end development and essential productivity tools.",
    achievements: [
      "Built a responsive static website using HTML, CSS, and JavaScript",
      "Created Excel dashboards and automated spreadsheets using formulas and formatting",
      "Designed professional PowerPoint presentations for academic use",
      "Enhanced document formatting skills in Microsoft Word"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Excel", "PowerPoint", "Word"],
    impact: {
      websites_created: "1",
      tools_mastered: "3",
      project_usefulness: "Applied in academic and student council events"
    }
  }
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Khalsa College of Engineering & Technology",
      period: "2021 - 2025",
      location: "Amritsar, India",
      grade: "CGPA: 8.76/10",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Python Programming",
        "Cloud Computing",
      ],
    },
    {
      degree: "Senior Secondary (Non-Medical)",
      institution: "New Flower Sr. Sec. School",
      period: "2019 - 2021",
      location: "Amritsar, India",
      grade: "Percentage: 87%",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Computer Science",
      ],
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Atam Public School",
      period: "2017 - 2019",
      location: "Amritsar, India",
      grade: "Percentage: 89%", 
      coursework: [
        "Mathematics",
        "Science",
        "English",
        "Sanskrit",
        "Social Studies",
        "Hindi",
        "Punjabi"
      ]
    }
  ]

  const certifications = [
    {
      name: "AI Tools Workshop",
      issuer: "Be10x",
      date: "July 2025",
      credentialId: "46",
      credentialUrl: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997516871",
      photographUrl: "/Certifications/Be10x.png",
      level: "Professional",
      skills: ["AI Tools", "Prompt Engineering", "Automation"],
    },
    {
      name: "Describe Cloud Computing",
      issuer: "Microsoft",
      date: "February 2025",
      credentialId: null,
      credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-gb/SunehaSaini-3588/P57JGU64?sharingId=4489515A10079786",
      photographUrl: "/Certifications/Cloud Computing.png",
      level: "Fundamental",
      skills: ["Cloud Computing", "Azure Fundamentals", "Cloud Architecture"],
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "April 2024",
      credentialId: "XDNPSBQKP2FB",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XDNPSBQKP2FB",
      photographUrl: "/Certifications/Generative Ai.png",
      level: "Fundamental",
      skills: ["Generative AI", "Machine Learning", "Google Cloud"],
    },
    {
      name: "Learn and design an attractive PowerPoint presentation",
      issuer: "Coursera",
      date: "March 2023",
      credentialId: "PFQJBPPVQQ2Q",
      credentialUrl: "https://www.coursera.org/account/accomplishments/records/PFQJBPPVQQ2Q",
      photographUrl: "/Certifications/PowerPoint.png",
      level: "Beginner",
      skills: ["Presentation Design", "PowerPoint", "Visual Communication"],
    },
    {
      name: "HTMLigliano:HTML, CSS, JavaScript Course",
      issuer: "Progressive Carrers",
      date: "September 2024",
      credentialId: "N/A",
      credentialUrl: "N/A",
      photographUrl: "/Certifications/HTML CSS JS.png",
      level: "Professional",
      skills: ["HTML", "CSS", "JS"],
    },
    {
      name: "Microsoft Power Platform Course",
      issuer: "Progressive Carrers",
      date: "January 2025",
      credentialId: "N/A",
      credentialUrl: "N/A",
      photographUrl: "/Certifications/Microsoft Power Platform.png",
      level: "Professional",
      skills: ["Power Apps", "Canvas App", "Model-driven App", "Power Automate", "Power Pages"],
    },
    {
      name: "Power BI Micro Course",
      issuer: "CoursePe",
      date: "January 2025",
      credentialId: "N/A",
      credentialUrl: "N/A",
      photographUrl: "/Certifications/Power BI.png",
      level: "Beginner",
      skills: ["Power BI"],
    },
  ]

  const achievements = [
    {
      title: "ISTE Best Student Award - North Section",
      issuer: "ISTE (Indian Society for Technical Education)",
      year: "2024",
      description: "Received the prestigious ISTE Best Student Award (North Section) on 17th October 2024, presented by Dr. RP Singh Suker Chakia for exceptional contributions in academics, leadership, and innovation."
    },
    {
      title: "Research Paper: A Model-Driven Application for Streamlining Organizational Processes Using Microsoft Power Apps: Workflow Automation and Data Flow Integration",
      issuer: "IJARESM",
      year: "2024",
      description: "Published on 17th December 2024. Explores how Microsoft Power Apps can automate workflows and integrate organizational data flows effectively.",
      url: "https://www.ijaresm.com/a-model-driven-application-for-streamlining-organizational-processes-using-microsoft-power-apps-workflow-automation-and-data-flow-integration"
    },
    {
      title: "Research Paper: AI/ML-Based Creative Strategies for Startups Business",
      issuer: "IBRTEA-2K24",
      year: "2024",
      description: "Presented on 4th April 2024. Focused on AI/ML-driven business innovation for startup growth and problem-solving in a competitive market."
    },
    {
      title: "Research Paper: Women Empowerment and Development",
      issuer: "National Conference on International Women’s Day",
      year: "2024",
      description: "Highlighted key aspects of social, economic, and technological empowerment of women in modern India."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modal for Certificate Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <button
                className="absolute top-2 right-2 text-white bg-gray-900 rounded-full p-2 hover:bg-gray-800"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Certificate"
                width={800}
                height={600}
                className="rounded-lg object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 sm:mb-20">
          <div className="order-1 lg:order-1 relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            <Image
              src="/images/AboutPage.png"
              alt="Suneha - About Me"
              width={500}
              height={600}
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">Available for Hire</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About <span className="text-cyan-400">Me</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hello! I'm Suneha, a passionate{" "}
              <span className="text-cyan-400 font-semibold">Power Platform Developer</span>,{" "}
              <span className="text-purple-400 font-semibold">Python enthusiast</span>, and{" "}
              <span className="text-pink-400 font-semibold">React interface designer</span> with hands-on experience in building smart, data-driven solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I specialize in developing low-code business applications using{" "}
              <span className="text-cyan-300 font-semibold">Power Apps</span>,{" "}
              <span className="text-cyan-300 font-semibold">Power Automate</span>,{" "}
              <span className="text-cyan-300 font-semibold">Power BI</span>, and{" "}
              <span className="text-cyan-300 font-semibold">Dataverse</span>, along with{" "}
              <span className="text-purple-300 font-semibold">Python-based automation</span> and{" "}
              <span className="text-purple-300 font-semibold">AI/ML integration</span>. I also design responsive interfaces using{" "}
              <span className="text-pink-300 font-semibold">React</span> and connect them with backend systems and APIs.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              In the past year, I’ve worked on real-world projects that helped automate processes, improve reporting, and deliver efficient, scalable digital experiences.
            </p>
            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 sm:py-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">95%</div>
                <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Automation Flows Created</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">1+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">APIs Integrated</div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900 p-1 rounded-lg mb-6">
            <TabsTrigger
              value="skills"
              className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
            >
              Education
            </TabsTrigger>
          </TabsList>

          {/* Skills Tab with Sub-Tabs */}
          <TabsContent value="skills" className="space-y-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Technical <span className="text-cyan-400">Expertise</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                Specialized skills that drive business transformation and innovation
              </p>
            </div>

            <Tabs value={activeSkillTab} onValueChange={setActiveSkillTab} className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1 sm:gap-2 bg-gray-900 p-1 rounded-lg mb-4">
                {skills.map((skillGroup) => (
                  <TabsTrigger
                    key={skillGroup.name}
                    value={skillGroup.name}
                    className="rounded-md text-xs sm:text-sm px-1 sm:px-2 py-1 sm:py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 text-gray-300 hover:text-white transition-colors"
                  >
                    {skillGroup.name.length > 15 ? `${skillGroup.name.slice(0, 15)}...` : skillGroup.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {/* Display selected category name */}
              {skills.map((skillGroup) => (
                <TabsContent key={skillGroup.name} value={skillGroup.name}>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                    {skillGroup.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skillGroup.subSkills.map((subSkill, subIndex) => {
                      const IconComponent = subSkill.icon
                      return (
                        <Card
                          key={subIndex}
                          className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300"
                        >
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-2 sm:mb-4">
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-1 sm:p-2 rounded-md">
                                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm sm:text-base font-semibold text-white">{subSkill.name}</h3>
                                  <Badge variant="secondary" className="text-xs sm:text-sm bg-gray-800 text-gray-400">
                                    {skillGroup.category}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right text-xs sm:text-sm text-gray-400">
                                <div>{subSkill.level}%</div>
                              </div>
                            </div>
                            <Progress value={subSkill.level} className="h-1 sm:h-2 mb-1 sm:mb-2" />
                            <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                              <span>{subSkill.experience}</span>
                              <span>{subSkill.projects} projects</span>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Experience Tab with Sub-Tabs */}
          <TabsContent value="experience" className="space-y-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                My <span className="text-cyan-400">Experience</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                A diverse journey of professional growth, independent ventures, and internships
              </p>
            </div>

            <Tabs value={activeExperienceTab} onValueChange={setActiveExperienceTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900 p-1 rounded-lg mb-4">
                <TabsTrigger
                  value="professional"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Professional Journey
                </TabsTrigger>
                <TabsTrigger
                  value="freelance"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Freelance & Personal
                </TabsTrigger>
                <TabsTrigger
                  value="internships"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Internships
                </TabsTrigger>
              </TabsList>

              <TabsContent value="professional">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Professional Journey</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Highlights of my career with esteemed companies and organizations.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300"
                    >
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                          <div className="space-y-2">
                            <CardTitle className="text-lg sm:text-xl text-white">{exp.title}</CardTitle>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                              <div className="flex items-center text-cyan-400 font-medium">
                                <Building className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                {exp.company}
                              </div>
                              <Badge variant="outline" className="border-gray-600 text-xs sm:text-sm text-gray-300">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end space-y-1 sm:space-y-2">
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <Calendar className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <MapPin className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-4">
                          {exp.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <Target className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start space-x-1 sm:space-x-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg p-3 sm:p-4">
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <TrendingUp className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                            Business Impact
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-2">
                            {Object.entries(exp.impact).map(([key, value], impIndex) => (
                              <div key={impIndex} className="text-center">
                                <div className="text-lg sm:text-xl font-bold text-cyan-400">{value}</div>
                                <div className="text-xs sm:text-sm text-gray-400 capitalize">{key.replace("_", " ")}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-gray-800 text-xs sm:text-sm text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="freelance">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Freelance & Personal Ventures</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Independent projects and freelance work showcasing my initiative and skills.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {freelanceExperiences.map((exp, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300"
                    >
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                          <div className="space-y-2">
                            <CardTitle className="text-lg sm:text-xl text-white">{exp.title}</CardTitle>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                              <div className="flex items-center text-cyan-400 font-medium">
                                <Building className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                {exp.company}
                              </div>
                              <Badge variant="outline" className="border-gray-600 text-xs sm:text-sm text-gray-300">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end space-y-1 sm:space-y-2">
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <Calendar className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <MapPin className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-4">
                          {exp.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <Target className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start space-x-1 sm:space-x-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg p-3 sm:p-4">
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <TrendingUp className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                            Impact
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-2">
                            {Object.entries(exp.impact).map(([key, value], impIndex) => (
                              <div key={impIndex} className="text-center">
                                <div className="text-lg sm:text-xl font-bold text-cyan-400">{value}</div>
                                <div className="text-xs sm:text-sm text-gray-400 capitalize">{key.replace("_", " ")}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-gray-800 text-xs sm:text-sm text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="internships">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Internships</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Hands-on learning experiences that enhanced my technical skills.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {internshipExperiences.map((exp, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-all duration-300"
                    >
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                          <div className="space-y-2">
                            <CardTitle className="text-lg sm:text-xl text-white">{exp.title}</CardTitle>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                              <div className="flex items-center text-cyan-400 font-medium">
                                <Building className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                {exp.company}
                              </div>
                              <Badge variant="outline" className="border-gray-600 text-xs sm:text-sm text-gray-300">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end space-y-1 sm:space-y-2">
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <Calendar className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <MapPin className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-4">
                          {exp.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <Target className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start space-x-1 sm:space-x-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg p-3 sm:p-4">
                          <h4 className="text-white font-semibold text-sm sm:text-base flex items-center">
                            <TrendingUp className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                            Impact
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-2">
                            {Object.entries(exp.impact).map(([key, value], impIndex) => (
                              <div key={impIndex} className="text-center">
                                <div className="text-lg sm:text-xl font-bold text-cyan-400">{value}</div>
                                <div className="text-xs sm:text-sm text-gray-400 capitalize">{key.replace("_", " ")}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-gray-800 text-xs sm:text-sm text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Education Tab with Sub-Tabs */}
          <TabsContent value="education" className="space-y-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Education & <span className="text-cyan-400">Certifications</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                Strong academic foundation and continuous learning through industry credentials
              </p>
            </div>

            <Tabs value={activeEducationTab} onValueChange={setActiveEducationTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900 p-1 rounded-lg mb-4">
                <TabsTrigger
                  value="qualification"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger
                  value="certification"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Certification
                </TabsTrigger>
                <TabsTrigger
                  value="achievement"
                  className="rounded-md text-sm sm:text-base px-2 sm:px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                >
                  Achievement
                </TabsTrigger>
              </TabsList>

              <TabsContent value="qualification">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Qualification</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Academic degrees and formal education that shaped my foundation.
                  </p>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index} className="bg-gray-900 border border-gray-800">
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                          <div>
                            <CardTitle className="text-lg sm:text-xl text-white">{edu.degree}</CardTitle>
                            <CardDescription className="text-cyan-400 font-medium text-base sm:text-lg mt-1">
                              {edu.institution}
                            </CardDescription>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs sm:text-sm">
                                {edu.grade}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end space-y-1 sm:space-y-2">
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <Calendar className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                              <MapPin className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <Badge
                                key={courseIndex}
                                variant="outline"
                                className="border-gray-600 text-xs sm:text-sm text-gray-300"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certification">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Certification</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Industry-recognized certifications showcasing my expertise.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-colors">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-2 sm:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-1 sm:p-2 rounded-md">
                              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </div>
                            <div>
                              <Badge
                                variant="secondary"
                                className="bg-gray-800 text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2"
                              >
                                {cert.level}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right text-xs sm:text-sm text-gray-400">{cert.date}</div>
                        </div>
                        <div className="flex items-start space-x-4 mb-2 sm:mb-4">
                          {cert.photographUrl && (
                            <Image
                              src={cert.photographUrl}
                              alt={`${cert.name} certificate`}
                              width={80}
                              height={80}
                              className="rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => setSelectedImage(cert.photographUrl)}
                            />
                          )}
                          <div>
                            <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">{cert.name}</h4>
                            <p className="text-cyan-400 font-medium text-xs sm:text-base mb-1 sm:mb-2">{cert.issuer}</p>
                            <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                              ID: {cert.credentialId || "N/A"}
                              {cert.credentialUrl && cert.credentialUrl !== "N/A" && (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-cyan-400 hover:underline"
                                >
                                  <ExternalLink className="inline h-4 w-4" />
                                </a>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="border-gray-600 text-xs sm:text-sm text-gray-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievement">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Achievement</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Notable accomplishments reflecting my dedication and skill.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {achievements.map((ach, index) => (
                    <Card key={index} className="bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-colors">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">{ach.title}</h4>
                        <p className="text-cyan-400 font-medium text-xs sm:text-base mb-1 sm:mb-2">{ach.issuer}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{ach.year}</p>
                        <p className="text-gray-300 text-sm">{ach.description}</p>
                        {ach.url && (
                          <a
                            href={ach.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline text-xs sm:text-sm mt-2 inline-flex items-center"
                          >
                            View Publication <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}