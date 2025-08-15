"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, X } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "er.sunehasaini@gmail.com",
      href: "mailto:er.sunehasaini@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9914980908",
      href: "tel:+919914980908",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amritsar, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Suneha-Saini",
      username: "@Suneha-Saini",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/suneha-saini",
      username: "suneha-saini",
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      alert("Please fill in all fields.")
      return
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData)
    setSubmitStatus("success")
    setIsSubmitting(false)
    alert("Message sent successfully! I'll get back to you soon.")
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to discuss your next Power Platform or Python project? I'd love to hear from you. Let's create
            something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="w-full">
            <Card className="bg-gray-900 border-gray-800 w-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white">Send me a message</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full cursor-text"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full cursor-text"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full cursor-text"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full cursor-text"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project requirements, timeline, and any specific questions you have..."
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full cursor-text"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">Please fix the errors and try again.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 sm:p-3 rounded-lg">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm sm:text-base">{info.title}</p>
                        <Link href={info.href} className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base">
                          {info.value}
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white">Follow Me</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Connect with me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group w-full"
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      <div>
                        <p className="text-white group-hover:text-cyan-400 transition-colors text-sm sm:text-base">{social.name}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{social.username}</p>
                      </div>
                    </Link>
                  )
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-cyan-500/30 to-purple-600/30 border-cyan-500/40 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-black font-semibold text-lg sm:text-xl mb-2">Currently Available</h3>
                <p className="text-black-300 text-sm sm:text-base mb-4">
                  I'm currently accepting new projects and collaborations. Let's discuss how I can help bring your ideas
                  to life!
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-sm sm:text-base">Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}