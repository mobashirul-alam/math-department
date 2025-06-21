"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
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
                        About the Department
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our rich history, mission, and commitment to
                        mathematical excellence
                    </p>
                </motion.div>

                {/* Detailed History */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our History
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    The Department of Mathematics was
                                    established in 1965 with a vision to create
                                    a center of excellence in mathematical
                                    education and research. Founded by Dr.
                                    Robert Anderson, the department began with
                                    just three faculty members and 25
                                    undergraduate students.
                                </p>
                                <p>
                                    Throughout the 1970s and 1980s, the
                                    department experienced significant growth,
                                    expanding its faculty to include specialists
                                    in various mathematical disciplines. The
                                    introduction of graduate programs in 1978
                                    marked a pivotal moment in our development
                                    as a research institution.
                                </p>
                                <p>
                                    The 1990s brought technological advancement
                                    and international collaboration. We
                                    established partnerships with leading
                                    universities worldwide and integrated
                                    computational mathematics into our
                                    curriculum. Today, we stand as one of the
                                    premier mathematics departments in the
                                    region.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative h-96"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Historic mathematics classroom"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Expanded Mission & Vision */}
                <motion.section
                    className="mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants}>
                            <Card className="border-l-4 border-l-blue-600">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-600 flex items-center">
                                        <BookOpen className="mr-2 h-6 w-6" />
                                        Our Mission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-700">
                                        To provide exceptional mathematical
                                        education that prepares students for
                                        successful careers in academia,
                                        industry, and public service while
                                        advancing the frontiers of mathematical
                                        knowledge through innovative research.
                                    </p>
                                    <p className="text-gray-700">
                                        We are committed to fostering critical
                                        thinking, problem-solving skills, and
                                        mathematical literacy that serves our
                                        students and society throughout their
                                        lives.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="border-l-4 border-l-green-600">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-green-600 flex items-center">
                                        <Globe className="mr-2 h-6 w-6" />
                                        Our Vision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-700">
                                        To be recognized globally as a leading
                                        center of mathematical excellence, where
                                        innovative research, exceptional
                                        teaching, and community engagement
                                        converge to address the world's most
                                        challenging problems.
                                    </p>
                                    <p className="text-gray-700">
                                        We envision a future where our graduates
                                        become leaders in their fields,
                                        contributing to scientific advancement
                                        and societal progress through
                                        mathematical innovation.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Full HOD Message */}
                <motion.section
                    className="mb-16 bg-blue-50 rounded-lg p-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <div className="relative w-64 h-64 mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Dr. Sarah Johnson - Head of Department"
                                    fill
                                    className="object-cover rounded-full shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Message from the Head
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg italic">
                                    "Dear Students, Faculty, and Visitors,
                                </p>
                                <p>
                                    Welcome to the Department of Mathematics,
                                    where curiosity meets discovery and
                                    theoretical beauty intersects with practical
                                    application. For nearly six decades, our
                                    department has been a beacon of mathematical
                                    excellence, committed to nurturing
                                    analytical minds and advancing the frontiers
                                    of mathematical knowledge.
                                </p>
                                <p>
                                    Mathematics is not merely a subject we
                                    teach; it is the language through which we
                                    understand the universe. From the elegant
                                    proofs of pure mathematics to the powerful
                                    applications in science, technology, and
                                    industry, our discipline continues to shape
                                    the modern world.
                                </p>
                                <p>
                                    Our faculty members are not only
                                    accomplished researchers but also dedicated
                                    educators who are passionate about sharing
                                    their knowledge. Our students, both
                                    undergraduate and graduate, consistently
                                    demonstrate excellence in their academic
                                    pursuits and go on to make significant
                                    contributions in their chosen fields.
                                </p>
                                <p>
                                    I invite you to explore our programs, meet
                                    our faculty, and discover the infinite
                                    possibilities that mathematics offers.
                                    Whether you are a prospective student, a
                                    current member of our community, or simply
                                    someone interested in mathematical sciences,
                                    you will find a warm welcome here.
                                </p>
                                <p className="italic">
                                    Together, let us continue to explore,
                                    discover, and innovate."
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="font-semibold text-gray-900">
                                    Dr. Sarah Johnson
                                </p>
                                <p className="text-gray-600">
                                    Head of Department
                                </p>
                                <p className="text-gray-600">
                                    Professor of Applied Mathematics
                                </p>
                                <p className="text-gray-600">
                                    Ph.D. Mathematics, MIT
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Key Milestones */}
                <motion.section
                    className="mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Key Milestones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                year: "1965",
                                title: "Department Founded",
                                description:
                                    "Established with 3 faculty members",
                                icon: (
                                    <Users className="h-8 w-8 text-blue-600" />
                                ),
                            },
                            {
                                year: "1978",
                                title: "Graduate Programs",
                                description: "Launched MSc Mathematics program",
                                icon: (
                                    <BookOpen className="h-8 w-8 text-green-600" />
                                ),
                            },
                            {
                                year: "1995",
                                title: "Research Excellence",
                                description: "First major NSF research grant",
                                icon: (
                                    <Award className="h-8 w-8 text-purple-600" />
                                ),
                            },
                            {
                                year: "2010",
                                title: "International Recognition",
                                description: "Ranked among top 50 departments",
                                icon: (
                                    <Globe className="h-8 w-8 text-orange-600" />
                                ),
                            },
                        ].map((milestone, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <div className="flex justify-center mb-4">
                                            {milestone.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {milestone.year}
                                        </h3>
                                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                            {milestone.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {milestone.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Departmental Highlights */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Departmental Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Academic Excellence
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>
                                            • 25+ distinguished faculty members
                                        </li>
                                        <li>• 500+ undergraduate students</li>
                                        <li>• 100+ graduate students</li>
                                        <li>• 95% job placement rate</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Research Impact
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>
                                            • $15M+ in active research grants
                                        </li>
                                        <li>• 200+ publications annually</li>
                                        <li>
                                            • 10+ international collaborations
                                        </li>
                                        <li>• 5 research centers</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Community Engagement
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Math outreach programs</li>
                                        <li>• High school partnerships</li>
                                        <li>• Public lecture series</li>
                                        <li>• Industry collaborations</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
