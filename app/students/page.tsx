"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Bell,
    Calendar,
    Clock,
    Download,
    FileText,
    Trophy,
    Users,
} from "lucide-react";

export default function StudentsPage() {
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
                        Student Corner
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your central hub for academic information, resources,
                        and student life
                    </p>
                </motion.div>

                {/* Latest Notices */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Bell className="h-6 w-6 text-blue-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Latest Academic Notices
                        </h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Mid-Semester Examination Schedule",
                                date: "March 10, 2024",
                                content:
                                    "Mid-semester examinations will be held from March 25-30, 2024. Please check your individual timetables for specific dates and venues.",
                                priority: "high",
                            },
                            {
                                title: "Registration for Summer Courses",
                                date: "March 8, 2024",
                                content:
                                    "Registration for summer semester courses is now open. Deadline for registration is March 20, 2024.",
                                priority: "medium",
                            },
                            {
                                title: "Guest Lecture Series",
                                date: "March 5, 2024",
                                content:
                                    "Dr. Alan Turing Memorial Lecture Series begins March 15. All students are encouraged to attend.",
                                priority: "low",
                            },
                            {
                                title: "Library Extended Hours",
                                date: "March 3, 2024",
                                content:
                                    "Mathematics library will have extended hours during examination period. Open 24/7 from March 20-April 5.",
                                priority: "medium",
                            },
                        ].map((notice, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                    className={`hover:shadow-lg transition-shadow ${
                                        notice.priority === "high"
                                            ? "border-l-4 border-l-red-500"
                                            : notice.priority === "medium"
                                            ? "border-l-4 border-l-yellow-500"
                                            : "border-l-4 border-l-green-500"
                                    }`}
                                >
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg">
                                                {notice.title}
                                            </CardTitle>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    notice.priority === "high"
                                                        ? "bg-red-100 text-red-800"
                                                        : notice.priority ===
                                                          "medium"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-green-100 text-green-800"
                                                }`}
                                            >
                                                {notice.priority.toUpperCase()}
                                            </span>
                                        </div>
                                        <CardDescription>
                                            {notice.date}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700">
                                            {notice.content}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Class Routine */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Calendar className="h-6 w-6 text-green-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Class Routine
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>
                                    Weekly Timetable - Spring 2024
                                </CardTitle>
                                <CardDescription>
                                    Current semester class schedule
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="border p-3 text-left font-semibold">
                                                    Time
                                                </th>
                                                <th className="border p-3 text-left font-semibold">
                                                    Monday
                                                </th>
                                                <th className="border p-3 text-left font-semibold">
                                                    Tuesday
                                                </th>
                                                <th className="border p-3 text-left font-semibold">
                                                    Wednesday
                                                </th>
                                                <th className="border p-3 text-left font-semibold">
                                                    Thursday
                                                </th>
                                                <th className="border p-3 text-left font-semibold">
                                                    Friday
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-3 font-medium">
                                                    9:00-10:00
                                                </td>
                                                <td className="border p-3">
                                                    Calculus I<br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 101
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Linear Algebra
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 203
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Calculus I<br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 101
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Statistics
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 105
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Tutorial
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 301
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-3 font-medium">
                                                    10:00-11:00
                                                </td>
                                                <td className="border p-3">
                                                    Abstract Algebra
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 205
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Real Analysis
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 102
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Abstract Algebra
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 205
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Linear Algebra
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 203
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Seminar
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 401
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-3 font-medium">
                                                    11:00-12:00
                                                </td>
                                                <td className="border p-3 bg-gray-50">
                                                    Break
                                                </td>
                                                <td className="border p-3 bg-gray-50">
                                                    Break
                                                </td>
                                                <td className="border p-3 bg-gray-50">
                                                    Break
                                                </td>
                                                <td className="border p-3 bg-gray-50">
                                                    Break
                                                </td>
                                                <td className="border p-3 bg-gray-50">
                                                    Break
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-3 font-medium">
                                                    12:00-1:00
                                                </td>
                                                <td className="border p-3">
                                                    Differential Equations
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 104
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Complex Analysis
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 201
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Differential Equations
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 104
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Real Analysis
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Room 102
                                                    </span>
                                                </td>
                                                <td className="border p-3">
                                                    Lab Session
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        Computer Lab
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button size="sm">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Full Timetable
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.section>

                {/* Exam Schedules */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Clock className="h-6 w-6 text-purple-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Examination Schedule
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-purple-600">
                                        Mid-Semester Exams
                                    </CardTitle>
                                    <CardDescription>
                                        March 25-30, 2024
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                subject: "Calculus I",
                                                date: "March 25",
                                                time: "9:00 AM",
                                                venue: "Hall A",
                                            },
                                            {
                                                subject: "Linear Algebra",
                                                date: "March 26",
                                                time: "2:00 PM",
                                                venue: "Hall B",
                                            },
                                            {
                                                subject: "Abstract Algebra",
                                                date: "March 27",
                                                time: "9:00 AM",
                                                venue: "Hall A",
                                            },
                                            {
                                                subject: "Real Analysis",
                                                date: "March 28",
                                                time: "2:00 PM",
                                                venue: "Hall C",
                                            },
                                            {
                                                subject: "Statistics",
                                                date: "March 30",
                                                time: "9:00 AM",
                                                venue: "Hall B",
                                            },
                                        ].map((exam, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                                            >
                                                <div>
                                                    <div className="font-semibold">
                                                        {exam.subject}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {exam.date} at{" "}
                                                        {exam.time}
                                                    </div>
                                                </div>
                                                <div className="text-sm font-medium text-purple-600">
                                                    {exam.venue}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-blue-600">
                                        Final Exams
                                    </CardTitle>
                                    <CardDescription>
                                        May 15-25, 2024
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                                            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                            <p className="text-gray-700 mb-3">
                                                Final examination schedule will
                                                be published on April 15, 2024
                                            </p>
                                            <Button size="sm" variant="outline">
                                                Get Notified
                                            </Button>
                                        </div>
                                        <div className="text-sm text-gray-600 space-y-2">
                                            <p>• Exam duration: 3 hours each</p>
                                            <p>
                                                • Venue assignments will be
                                                posted 1 week before exams
                                            </p>
                                            <p>
                                                • Students must bring valid ID
                                                cards
                                            </p>
                                            <p>
                                                • Calculator policy varies by
                                                subject
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Student Activities */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Users className="h-6 w-6 text-orange-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Student Activities & Clubs
                        </h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                name: "Mathematics Society",
                                description:
                                    "Student-led organization promoting mathematical culture and organizing academic events",
                                activities: [
                                    "Weekly seminars",
                                    "Math competitions",
                                    "Peer tutoring",
                                    "Social events",
                                ],
                                contact: "mathsoc@university.edu",
                            },
                            {
                                name: "Problem Solving Club",
                                description:
                                    "Focused on mathematical problem solving and preparation for competitions",
                                activities: [
                                    "Problem sessions",
                                    "Competition training",
                                    "Guest lectures",
                                    "Study groups",
                                ],
                                contact: "problemsolving@university.edu",
                            },
                            {
                                name: "Applied Math Group",
                                description:
                                    "Exploring real-world applications of mathematics in various fields",
                                activities: [
                                    "Industry visits",
                                    "Research projects",
                                    "Workshops",
                                    "Internship support",
                                ],
                                contact: "appliedmath@university.edu",
                            },
                        ].map((club, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-orange-600">
                                            {club.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {club.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-semibold text-gray-700 mb-2">
                                                    Activities:
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    {club.activities.map(
                                                        (
                                                            activity,
                                                            actIndex
                                                        ) => (
                                                            <li
                                                                key={actIndex}
                                                                className="flex items-center"
                                                            >
                                                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                                                                {activity}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="pt-3 border-t">
                                                <Button
                                                    size="sm"
                                                    className="w-full"
                                                >
                                                    Join Club
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Student Achievements */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Recent Student Achievements
                        </h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                student: "Alice Chen",
                                achievement:
                                    "International Mathematical Olympiad Gold Medal",
                                year: "2024",
                                description:
                                    "Represented the country at IMO 2024 and secured gold medal with perfect score",
                            },
                            {
                                student: "David Rodriguez",
                                achievement:
                                    "Best Undergraduate Research Paper",
                                year: "2024",
                                description:
                                    "Published research on 'Applications of Graph Theory in Network Security' in peer-reviewed journal",
                            },
                            {
                                student: "Sarah Kim",
                                achievement: "NSF Graduate Research Fellowship",
                                year: "2024",
                                description:
                                    "Awarded prestigious fellowship for graduate studies in Applied Mathematics",
                            },
                            {
                                student: "Michael Johnson",
                                achievement: "Dean's List Recognition",
                                year: "2023-2024",
                                description:
                                    "Maintained perfect GPA throughout academic year while leading Mathematics Society",
                            },
                            {
                                student: "Emma Wilson",
                                achievement:
                                    "Industry Internship Excellence Award",
                                year: "2024",
                                description:
                                    "Outstanding performance during summer internship at leading tech company",
                            },
                            {
                                student: "James Lee",
                                achievement:
                                    "Mathematical Modeling Competition Winner",
                                year: "2024",
                                description:
                                    "First place in national mathematical modeling competition with innovative solution",
                            },
                        ].map((achievement, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <Trophy className="h-8 w-8 text-yellow-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {achievement.student}
                                                </h3>
                                                <h4 className="text-blue-600 font-medium mb-2">
                                                    {achievement.achievement}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    {achievement.description}
                                                </p>
                                                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                                    {achievement.year}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}
