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
    ArrowRight,
    Award,
    BookOpen,
    Calendar,
    Quote,
    Star,
    TrendingUp,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import faisalSirImg from "../public/faculty-images/faisal-sir.jpg";
import jesminMamImg from "../public/faculty-images/jesmin-madam.jpg";
import deptHeadImg from "../public/faculty-images/laila-madam.jpg";
import sorwarSirImg from "../public/faculty-images/sorwar-sir.jpg";

export default function HomePage() {
    const mathematicalQuotes = [
        {
            quote: "Mathematics is the language with which God has written the universe.",
            author: "Galileo Galilei",
        },
        {
            quote: "Pure mathematics is, in its way, the poetry of logical ideas.",
            author: "Albert Einstein",
        },
        {
            quote: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
            author: "William Paul Thurston",
        },
        {
            quote: "The essence of mathematics lies in its freedom.",
            author: "Georg Cantor",
        },
        {
            quote: "Mathematics is the most beautiful and most powerful creation of the human spirit.",
            author: "Stefan Banach",
        },
        {
            quote: "Go down deep enough into anything and you will find mathematics.",
            author: "Dean Schlicter",
        },
        {
            quote: "In mathematics, the art of proposing a question must be held of higher value than solving it.",
            author: "Georg Cantor",
        },
        {
            quote: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.",
            author: "David Hilbert",
        },
        {
            quote: "The only way to learn mathematics is to do mathematics.",
            author: "Paul Halmos",
        },
        {
            quote: "To understand mathematics is to understand the universe.",
            author: "Bertrand Russell",
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    // Fix hydration error: generate animated background elements only on client
    type BgElement = {
        x: number;
        y: number;
        rotate: number;
        symbol: string;
        duration: number;
    };
    const [bgElements, setBgElements] = useState<BgElement[]>([]);
    useEffect(() => {
        const symbols = ["∑", "∫", "π", "∞", "α", "β", "γ", "δ", "∆", "Ω"];
        const elements: BgElement[] = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            duration: 20 + Math.random() * 10,
        }));
        setBgElements(elements);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Enhanced Hero Section */}
            <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Mathematics and equations"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {bgElements.map((el, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10 text-6xl font-bold"
                            initial={{
                                x: el.x,
                                y: el.y,
                                rotate: el.rotate,
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                rotate: Math.random() * 360,
                            }}
                            transition={{
                                duration: el.duration,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                        >
                            {el.symbol}
                        </motion.div>
                    ))}
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[56px] leading-[1] md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Department of Mathematics
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-2xl md:text-3xl mb-8 text-blue-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Exploring the Beauty and Power of Mathematical Sciences
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/programs">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
                                >
                                    Explore Programs
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/faculty">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white bg-blue-900/50 text-white hover:bg-blue-900 hover:text-white text-lg px-8 py-4 duration-300"
                                >
                                    Meet Our Faculty
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Mathematical Quotes Carousel */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Words of Wisdom
                        </h2>
                        <p className="text-lg text-gray-600">
                            Inspiring quotes from legendary mathematicians
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="flex space-x-8"
                            animate={{
                                x: [0, -100 * mathematicalQuotes.length],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            {[...mathematicalQuotes, ...mathematicalQuotes].map(
                                (quote, index) => (
                                    <Card
                                        key={index}
                                        className="min-w-96 bg-white/80 backdrop-blur-sm border-l-4 border-l-blue-600 shadow-lg"
                                    >
                                        <CardContent className="p-6">
                                            <Quote className="h-8 w-8 text-blue-600 mb-4" />
                                            <blockquote className="text-lg text-gray-700 italic mb-4">
                                                "{quote.quote}"
                                            </blockquote>
                                            <cite className="text-blue-600 font-semibold">
                                                — {quote.author}
                                            </cite>
                                        </CardContent>
                                    </Card>
                                )
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                number: "58+",
                                label: "Years of Excellence",
                                icon: <Star className="h-8 w-8" />,
                            },
                            {
                                number: "500+",
                                label: "Students Enrolled",
                                icon: <Users className="h-8 w-8" />,
                            },
                            {
                                number: "25+",
                                label: "Expert Faculty",
                                icon: <Award className="h-8 w-8" />,
                            },
                            {
                                number: "95%",
                                label: "Job Placement",
                                icon: <TrendingUp className="h-8 w-8" />,
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex justify-center mb-4 text-blue-300">
                                    {stat.icon}
                                </div>
                                <motion.div
                                    className="text-4xl font-bold mb-2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 * index,
                                        duration: 0.6,
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-blue-200">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Rest of the sections with animations... */}
            {/* Short History */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Legacy
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Established in 1965, the Department of
                                Mathematics has been at the forefront of
                                mathematical education and research for over
                                five decades. What began as a small department
                                with just three faculty members has grown into a
                                vibrant academic community.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Today, we pride ourselves on our commitment to
                                excellence in teaching, groundbreaking research,
                                and fostering the next generation of
                                mathematical minds.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/about">
                                    <Button variant="outline">
                                        Learn More About Us
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </motion.div>
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
                                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Historic university building"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Mission & Vision
                        </h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="border-l-4 border-l-blue-600">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-600">
                                        Our Mission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        To provide exceptional mathematical
                                        education, conduct innovative research,
                                        and serve our community through the
                                        advancement of mathematical knowledge
                                        and its applications across diverse
                                        fields.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="border-l-4 border-l-green-600">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-green-600">
                                        Our Vision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        To be recognized as a leading center of
                                        mathematical excellence, fostering
                                        critical thinking, innovation, and
                                        discovery that contributes to the global
                                        advancement of science and technology.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* HOD Message */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-1"
                        >
                            <div className="relative w-64 h-80 mx-auto">
                                <Image
                                    src={deptHeadImg}
                                    alt="Head of Department"
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Message from the Head
                            </h2>
                            <blockquote className="text-lg text-gray-700 italic mb-6">
                                "Welcome to the Department of Mathematics, where
                                curiosity meets discovery. Our department stands
                                as a beacon of mathematical excellence,
                                committed to nurturing analytical minds and
                                advancing the frontiers of mathematical
                                knowledge. We invite you to join our community
                                of scholars, researchers, and innovators as we
                                explore the infinite possibilities that
                                mathematics offers."
                            </blockquote>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Laila Arjuman Banu
                                </p>
                                <p className="text-gray-600">
                                    Head of Department
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Academic Programs Preview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Academic Programs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Comprehensive mathematical education at every level
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                                    <CardTitle>BSc Mathematics</CardTitle>
                                    <CardDescription>
                                        Undergraduate Program
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        A comprehensive foundation in
                                        mathematical principles, preparing
                                        students for careers in education,
                                        industry, and further study.
                                    </p>
                                    <Button variant="outline" size="sm">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Award className="h-8 w-8 text-green-600 mb-2" />
                                    <CardTitle>Honours Program</CardTitle>
                                    <CardDescription>
                                        Advanced Undergraduate
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        An intensive program for exceptional
                                        students, emphasizing research and
                                        advanced mathematical concepts.
                                    </p>
                                    <Button variant="outline" size="sm">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Users className="h-8 w-8 text-purple-600 mb-2" />
                                    <CardTitle>MSc Mathematics</CardTitle>
                                    <CardDescription>
                                        Graduate Program
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Advanced graduate study with
                                        specialization opportunities in pure and
                                        applied mathematics.
                                    </p>
                                    <Button variant="outline" size="sm">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link href="/programs">
                            <Button size="lg">
                                View All Programs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Faculty Highlight */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Featured Faculty
                        </h2>
                        <p className="text-lg text-gray-600">
                            Meet some of our distinguished faculty members
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                name: "Jesmin Akter",
                                title: "Assistant Professor",
                                image: jesminMamImg,
                            },
                            {
                                name: "Faisal Mohammad Mainol Quader",
                                title: "Assistant Professor",
                                image: faisalSirImg,
                            },
                            {
                                name: "Sorowar Imran",
                                title: "Lecturer",
                                image: sorwarSirImg,
                            },
                        ].map((faculty, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <motion.div
                                            className="relative w-32 h-32 mx-auto mb-4"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Image
                                                src={
                                                    faculty.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={faculty.name}
                                                fill
                                                className="object-cover rounded-full bg-gray-50"
                                            />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {faculty.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-2">
                                            {faculty.title}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link href="/faculty">
                            <Button variant="outline">
                                Meet All Faculty
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Student Achievements */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Student Achievements
                        </h2>
                        <p className="text-lg text-gray-600">
                            Celebrating our students' remarkable accomplishments
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "International Math Olympiad",
                                description: "Gold Medal Winner 2023",
                                icon: "🏆",
                            },
                            {
                                title: "Research Publication",
                                description: "Undergraduate research in Nature",
                                icon: "📚",
                            },
                            {
                                title: "Graduate Fellowship",
                                description: "NSF Graduate Research Fellowship",
                                icon: "🎓",
                            },
                            {
                                title: "Industry Recognition",
                                description: "Best Intern at Tech Company",
                                icon: "💼",
                            },
                        ].map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <motion.div
                                            className="text-4xl mb-4"
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                            }}
                                        >
                                            {achievement.icon}
                                        </motion.div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {achievement.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Events & News Preview */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Latest Events & News
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stay updated with our department activities
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-5 w-5 text-blue-600" />
                                        <span className="text-sm text-blue-600 font-medium">
                                            Upcoming Event
                                        </span>
                                    </div>
                                    <CardTitle>
                                        Annual Mathematics Symposium 2024
                                    </CardTitle>
                                    <CardDescription>
                                        March 15-17, 2024
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Join us for three days of cutting-edge
                                        mathematical research presentations,
                                        workshops, and networking opportunities
                                        with leading mathematicians.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Award className="h-5 w-5 text-green-600" />
                                        <span className="text-sm text-green-600 font-medium">
                                            Recent News
                                        </span>
                                    </div>
                                    <CardTitle>
                                        Department Receives Research Grant
                                    </CardTitle>
                                    <CardDescription>
                                        February 28, 2024
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Our department has been awarded a $2.5M
                                        NSF grant to advance research in
                                        computational mathematics and machine
                                        learning applications.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link href="/events">
                            <Button>
                                View All Events & News
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Department Life
                        </h2>
                        <p className="text-lg text-gray-600">
                            Glimpses of our vibrant academic community
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link href="/gallery">
                            <Button variant="outline">
                                View Full Gallery
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Quick Access
                        </h2>
                        <p className="text-lg text-gray-300">
                            Essential resources for students and faculty
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Student Portal",
                                href: "/students",
                                icon: "👨‍🎓",
                            },
                            {
                                title: "Course Materials",
                                href: "/programs",
                                icon: "📖",
                            },
                            {
                                title: "Research Papers",
                                href: "/research",
                                icon: "🔬",
                            },
                            {
                                title: "Contact Us",
                                href: "/contact",
                                icon: "📞",
                            },
                        ].map((link, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href={link.href}>
                                    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors text-center cursor-pointer">
                                        <CardContent className="pt-6">
                                            <motion.div
                                                className="text-3xl mb-3"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatDelay: 1,
                                                }}
                                            >
                                                {link.icon}
                                            </motion.div>
                                            <h3 className="text-white font-semibold">
                                                {link.title}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
