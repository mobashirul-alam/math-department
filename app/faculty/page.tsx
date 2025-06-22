"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import faisalSirImg from "../../public/faculty-images/faisal-sir.jpg";
import jesminMamImg from "../../public/faculty-images/jesmin-madam.jpg";
import deptHeadImg from "../../public/faculty-images/laila-madam.jpg";
import rahmatSirImg from "../../public/faculty-images/rahmat-sir.jpg";
import sorwarSirImg from "../../public/faculty-images/sorwar-sir.jpg";

export default function FacultyPage() {
    const facultyMembers = [
        {
            name: "Laila Arjuman Banu",
            title: "Associate Professor & Head of Department",
            idNo: "017488",
            joiningDate: "09/11/2014",
            image: deptHeadImg,
            education: "Chittagong College, Chittagong",
            email: "s.johnson@university.edu",
        },
        {
            name: "Jesmin Akter",
            title: "Assistant Professor",
            idNo: "018007",
            joiningDate: "06/03/2013",
            image: jesminMamImg,
            education: "University Of Chittagong",
            email: "m.chen@university.edu",
        },
        {
            name: "Faisal Mohammad Mainol Quader",
            title: "Assistant Professor",
            idNo: "026137",
            joiningDate: "11/12/2016",
            image: faisalSirImg,
            education: "University Of Chittagong",
            email: "e.rodriguez@university.edu",
        },
        {
            name: "Md Sarwar Imran",
            title: "Lecturer",
            idNo: "17135119013",
            joiningDate: "04/04/2024",
            image: sorwarSirImg,
            education: "University Of Chittagong",
            email: "j.wilson@university.edu",
        },
        {
            name: "Md Rahmat Ullah",
            title: "Lecturer",
            idNo: "19137119002",
            joiningDate: "07/10/2024",
            image: rahmatSirImg,
            education: "Chittagong College, Chittagong",
            email: "l.thompson@university.edu",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

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
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Faculty & Staff
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our distinguished faculty members who are leaders
                        in mathematical research and education
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
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Faculty Photo */}
                                        <div className="flex-shrink-0">
                                            <div className="relative w-32 h-32 mx-auto md:mx-0">
                                                <Image
                                                    src={
                                                        faculty.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={faculty.name}
                                                    fill
                                                    className="object-cover rounded-full shadow-md"
                                                />
                                            </div>
                                        </div>

                                        {/* Faculty Information */}
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {faculty.name}
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-3">
                                                {faculty.title}
                                            </p>

                                            <div className="space-y-3 text-sm mb-3">
                                                <div>
                                                    <h4 className="font-semibold text-gray-700 mb-1">
                                                        ID No.
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        {faculty.idNo}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3 text-sm mb-3">
                                                <div>
                                                    <h4 className="font-semibold text-gray-700 mb-1">
                                                        Joining Date
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        {faculty.joiningDate}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3 text-sm mb-3">
                                                <div>
                                                    <h4 className="font-semibold text-gray-700 mb-1">
                                                        Education
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        {faculty.education}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Contact Button */}
                                            <div className="mt-4 flex flex-col sm:flex-row gap-2">
                                                <Button
                                                    size="sm"
                                                    className="flex items-center"
                                                >
                                                    <Mail className="h-4 w-4 mr-2" />
                                                    Contact
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="flex items-center"
                                                >
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Faculty Statistics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                25+
                            </div>
                            <div className="text-gray-700">Faculty Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                15
                            </div>
                            <div className="text-gray-700">Full Professors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                200+
                            </div>
                            <div className="text-gray-700">
                                Publications/Year
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">
                                $15M+
                            </div>
                            <div className="text-gray-700">
                                Research Funding
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Areas */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Research Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                area: "Pure Mathematics",
                                topics: [
                                    "Number Theory",
                                    "Algebraic Geometry",
                                    "Topology",
                                    "Abstract Algebra",
                                ],
                                color: "blue",
                            },
                            {
                                area: "Applied Mathematics",
                                topics: [
                                    "Mathematical Biology",
                                    "Fluid Dynamics",
                                    "Numerical Analysis",
                                    "Optimization",
                                ],
                                color: "green",
                            },
                            {
                                area: "Statistics & Data Science",
                                topics: [
                                    "Bayesian Statistics",
                                    "Machine Learning",
                                    "Biostatistics",
                                    "Time Series",
                                ],
                                color: "purple",
                            },
                            {
                                area: "Mathematical Physics",
                                topics: [
                                    "Quantum Mechanics",
                                    "Relativity",
                                    "Statistical Mechanics",
                                    "Field Theory",
                                ],
                                color: "red",
                            },
                            {
                                area: "Computational Mathematics",
                                topics: [
                                    "Scientific Computing",
                                    "Algorithm Design",
                                    "High Performance Computing",
                                    "Modeling",
                                ],
                                color: "orange",
                            },
                            {
                                area: "Discrete Mathematics",
                                topics: [
                                    "Graph Theory",
                                    "Combinatorics",
                                    "Cryptography",
                                    "Logic",
                                ],
                                color: "teal",
                            },
                        ].map((research, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardHeader>
                                    <CardTitle
                                        className={`text-${research.color}-600`}
                                    >
                                        {research.area}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        {research.topics.map(
                                            (topic, topicIndex) => (
                                                <li
                                                    key={topicIndex}
                                                    className="flex items-center"
                                                >
                                                    <div
                                                        className={`w-2 h-2 bg-${research.color}-400 rounded-full mr-2`}
                                                    ></div>
                                                    {topic}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
