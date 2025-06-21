"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our department for inquiries, admissions, or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <MapPin className="mr-2 h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Mathematics Building, Room 301
                    <br />
                    University Campus
                    <br />
                    123 Academic Drive
                    <br />
                    City, State 12345
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Main Office: +1 (555) 123-4567
                    <br />
                    Admissions: +1 (555) 123-4568
                    <br />
                    Fax: +1 (555) 123-4569
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    General: math@university.edu
                    <br />
                    Admissions: admissions.math@university.edu
                    <br />
                    Research: research.math@university.edu
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Clock className="mr-2 h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Globe className="mr-2 h-5 w-5" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-6 w-6" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="What is this regarding?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Find Us on Campus</CardTitle>
              <CardDescription>
                Our department is located in the heart of the university campus, easily accessible by public transport.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Quick Contact Cards */}
        <motion.section
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Admissions Office",
                contact: "Dr. Jennifer Smith",
                email: "admissions.math@university.edu",
                phone: "+1 (555) 123-4568",
                description: "For undergraduate and graduate program inquiries",
              },
              {
                title: "Research Coordinator",
                contact: "Dr. Robert Johnson",
                email: "research.math@university.edu",
                phone: "+1 (555) 123-4570",
                description: "For research collaborations and opportunities",
              },
              {
                title: "Student Services",
                contact: "Ms. Lisa Chen",
                email: "student.math@university.edu",
                phone: "+1 (555) 123-4571",
                description: "For current student support and services",
              },
            ].map((contact, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{contact.title}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">{contact.contact}</p>
                      <p className="text-gray-600 flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {contact.email}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {contact.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
