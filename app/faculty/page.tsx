"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function FacultyPage() {
  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Professor & Head of Department",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Applied Mathematics, MIT",
      research: "Mathematical Biology, Differential Equations, Biomechanics",
      publications: [
        "Nonlinear Dynamics in Biological Systems (2023)",
        "Mathematical Models of Cell Migration (2022)",
        "Computational Methods in Biology (2021)",
      ],
      email: "s.johnson@university.edu",
    },
    {
      name: "Dr. Michael Chen",
      title: "Professor of Pure Mathematics",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Mathematics, Harvard University",
      research: "Number Theory, Algebraic Geometry, Cryptography",
      publications: [
        "Elliptic Curves and Modular Forms (2023)",
        "Applications of Number Theory in Cryptography (2022)",
        "Algebraic Methods in Geometry (2021)",
      ],
      email: "m.chen@university.edu",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Associate Professor of Applied Mathematics",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Applied Mathematics, Stanford University",
      research: "Fluid Dynamics, Numerical Analysis, Climate Modeling",
      publications: [
        "Computational Fluid Dynamics in Climate Science (2023)",
        "Numerical Methods for PDEs (2022)",
        "Mathematical Models of Ocean Currents (2021)",
      ],
      email: "e.rodriguez@university.edu",
    },
    {
      name: "Dr. James Wilson",
      title: "Professor of Statistics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Statistics, University of Chicago",
      research: "Bayesian Statistics, Machine Learning, Data Science",
      publications: [
        "Bayesian Methods in Machine Learning (2023)",
        "Statistical Learning Theory (2022)",
        "Modern Data Analysis Techniques (2021)",
      ],
      email: "j.wilson@university.edu",
    },
    {
      name: "Dr. Lisa Thompson",
      title: "Associate Professor of Mathematics",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Mathematics, Princeton University",
      research: "Topology, Algebraic Topology, Geometric Analysis",
      publications: [
        "Homotopy Theory and Applications (2023)",
        "Geometric Structures in Topology (2022)",
        "Algebraic Methods in Differential Geometry (2021)",
      ],
      email: "l.thompson@university.edu",
    },
    {
      name: "Dr. Robert Kumar",
      title: "Assistant Professor of Mathematics",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Mathematics, UC Berkeley",
      research: "Combinatorics, Graph Theory, Discrete Mathematics",
      publications: [
        "Extremal Problems in Graph Theory (2023)",
        "Combinatorial Optimization Methods (2022)",
        "Applications of Discrete Mathematics (2021)",
      ],
      email: "r.kumar@university.edu",
    },
    {
      name: "Dr. Maria Gonzalez",
      title: "Associate Professor of Mathematics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      education: "Ph.D. Mathematics, Caltech",
      research: "Mathematical Physics, Quantum Mechanics, Operator Theory",
      publications: [
        "Quantum Mathematical Methods (2023)",
        "Operator Theory in Physics (2022)",
        "Mathematical Foundations of Quantum Mechanics (2021)",
      ],
      email: "m.gonzalez@university.edu",
    },
  ]

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Faculty & Staff</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished faculty members who are leaders in mathematical research and education
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Faculty Photo */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <Image
                          src={faculty.image || "/placeholder.svg"}
                          alt={faculty.name}
                          fill
                          className="object-cover rounded-full shadow-md"
                        />
                      </div>
                    </div>

                    {/* Faculty Information */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{faculty.title}</p>

                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Education</h4>
                          <p className="text-gray-600">{faculty.education}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Research Interests</h4>
                          <p className="text-gray-600">{faculty.research}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Selected Publications</h4>
                          <ul className="text-gray-600 space-y-1">
                            {faculty.publications.map((pub, pubIndex) => (
                              <li key={pubIndex} className="flex items-start">
                                <BookOpen className="h-3 w-3 mt-1 mr-2 text-blue-500 flex-shrink-0" />
                                <span>{pub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Contact Button */}
                      <div className="mt-4 flex flex-col sm:flex-row gap-2">
                        <Button size="sm" className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Statistics */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-700">Full Professors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-700">Publications/Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$15M+</div>
              <div className="text-gray-700">Research Funding</div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                area: "Pure Mathematics",
                topics: ["Number Theory", "Algebraic Geometry", "Topology", "Abstract Algebra"],
                color: "blue",
              },
              {
                area: "Applied Mathematics",
                topics: ["Mathematical Biology", "Fluid Dynamics", "Numerical Analysis", "Optimization"],
                color: "green",
              },
              {
                area: "Statistics & Data Science",
                topics: ["Bayesian Statistics", "Machine Learning", "Biostatistics", "Time Series"],
                color: "purple",
              },
              {
                area: "Mathematical Physics",
                topics: ["Quantum Mechanics", "Relativity", "Statistical Mechanics", "Field Theory"],
                color: "red",
              },
              {
                area: "Computational Mathematics",
                topics: ["Scientific Computing", "Algorithm Design", "High Performance Computing", "Modeling"],
                color: "orange",
              },
              {
                area: "Discrete Mathematics",
                topics: ["Graph Theory", "Combinatorics", "Cryptography", "Logic"],
                color: "teal",
              },
            ].map((research, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className={`text-${research.color}-600`}>{research.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {research.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-${research.color}-400 rounded-full mr-2`}></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
