"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, Users, Clock, FileText, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function ProgramsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mathematical education designed to prepare students for successful careers
          </p>
        </motion.div>

        {/* BSc Mathematics */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.01 }}>
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-3xl text-blue-600">BSc Mathematics</CardTitle>
                    <CardDescription className="text-lg">Undergraduate Program (3 Years)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Our Bachelor of Science in Mathematics provides a solid foundation in mathematical principles,
                  preparing students for careers in education, industry, research, and further academic study.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Structure</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">Year 1</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Calculus I & II</li>
                          <li>• Linear Algebra</li>
                          <li>• Introduction to Proofs</li>
                          <li>• Statistics</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">Year 2</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Multivariable Calculus</li>
                          <li>• Differential Equations</li>
                          <li>• Abstract Algebra</li>
                          <li>• Real Analysis</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">Year 3</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Complex Analysis</li>
                          <li>• Topology</li>
                          <li>• Numerical Methods</li>
                          <li>• Electives & Capstone</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Duration</h4>
                          <p className="text-gray-600 text-sm">3 years (6 semesters)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Admission Criteria</h4>
                          <p className="text-gray-600 text-sm">
                            High school diploma with strong performance in mathematics and science
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Career Prospects</h4>
                          <p className="text-gray-600 text-sm">
                            Teaching, finance, data analysis, software development, graduate studies
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Curriculum
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Honours Program */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.01 }}>
            <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle className="text-3xl text-green-600">Honours Program</CardTitle>
                    <CardDescription className="text-lg">Advanced Undergraduate Program (4 Years)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  The Honours Program is designed for exceptional students who demonstrate outstanding mathematical
                  ability and wish to pursue advanced study with a strong research component.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Structure</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600">Years 1-2</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Advanced Calculus Sequence</li>
                          <li>• Linear Algebra & Matrix Theory</li>
                          <li>• Mathematical Reasoning</li>
                          <li>• Probability Theory</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600">Year 3</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Advanced Abstract Algebra</li>
                          <li>• Real & Complex Analysis</li>
                          <li>• Differential Geometry</li>
                          <li>• Research Methods</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600">Year 4</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Advanced Topics Seminars</li>
                          <li>• Independent Research Project</li>
                          <li>• Thesis Writing</li>
                          <li>• Graduate Course Options</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Research Component</h4>
                          <p className="text-gray-600 text-sm">Mandatory thesis project with faculty supervision</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Small Class Sizes</h4>
                          <p className="text-gray-600 text-sm">
                            Maximum 15 students per cohort for personalized attention
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Graduate Preparation</h4>
                          <p className="text-gray-600 text-sm">
                            Direct pathway to graduate studies with advanced standing
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Honours Handbook
                      </Button>
                      <Button variant="outline" className="w-full">
                        Application Requirements
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* MSc Mathematics */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.01 }}>
            <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <CardTitle className="text-3xl text-purple-600">MSc Mathematics</CardTitle>
                    <CardDescription className="text-lg">Graduate Program (2 Years)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Our Master of Science in Mathematics offers advanced study with specialization opportunities in pure
                  mathematics, applied mathematics, and statistics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialization Areas</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600">Pure Mathematics</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Algebraic Topology</li>
                          <li>• Number Theory</li>
                          <li>• Functional Analysis</li>
                          <li>• Algebraic Geometry</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600">Applied Mathematics</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Mathematical Biology</li>
                          <li>• Computational Mathematics</li>
                          <li>• Mathematical Physics</li>
                          <li>• Optimization Theory</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600">Statistics</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Bayesian Statistics</li>
                          <li>• Machine Learning</li>
                          <li>• Biostatistics</li>
                          <li>• Time Series Analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Structure</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600">Course Requirements</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• 8 graduate courses (24 credits)</li>
                          <li>• Comprehensive examination</li>
                          <li>• Thesis research (6 credits)</li>
                          <li>• Thesis defense</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600">Research Opportunities</h4>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Faculty-supervised research</li>
                          <li>• Conference presentations</li>
                          <li>• Publication opportunities</li>
                          <li>• Industry collaborations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Graduate Handbook
                      </Button>
                      <Button variant="outline" className="w-full">
                        Admission Requirements
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Recommended Books */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Textbooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Undergraduate Level</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • <strong>Calculus:</strong> Stewart - Calculus: Early Transcendentals
                  </li>
                  <li>
                    • <strong>Linear Algebra:</strong> Lay - Linear Algebra and Its Applications
                  </li>
                  <li>
                    • <strong>Analysis:</strong> Rudin - Principles of Mathematical Analysis
                  </li>
                  <li>
                    • <strong>Abstract Algebra:</strong> Dummit & Foote - Abstract Algebra
                  </li>
                  <li>
                    • <strong>Statistics:</strong> Wackerly - Mathematical Statistics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Honours Level</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • <strong>Advanced Calculus:</strong> Apostol - Mathematical Analysis
                  </li>
                  <li>
                    • <strong>Algebra:</strong> Hungerford - Algebra
                  </li>
                  <li>
                    • <strong>Topology:</strong> Munkres - Topology
                  </li>
                  <li>
                    • <strong>Complex Analysis:</strong> Ahlfors - Complex Analysis
                  </li>
                  <li>
                    • <strong>Probability:</strong> Billingsley - Probability and Measure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Graduate Level</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • <strong>Real Analysis:</strong> Folland - Real Analysis
                  </li>
                  <li>
                    • <strong>Functional Analysis:</strong> Conway - A Course in Functional Analysis
                  </li>
                  <li>
                    • <strong>Algebraic Topology:</strong> Hatcher - Algebraic Topology
                  </li>
                  <li>
                    • <strong>Number Theory:</strong> Ireland & Rosen - A Classical Introduction
                  </li>
                  <li>
                    • <strong>Statistics:</strong> Casella & Berger - Statistical Inference
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
