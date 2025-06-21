"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
    Award,
    BookOpen,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Users,
    X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        {
            id: "all",
            name: "All Photos",
            icon: <BookOpen className="h-4 w-4" />,
        },
        {
            id: "events",
            name: "Events",
            icon: <Calendar className="h-4 w-4" />,
        },
        {
            id: "campus",
            name: "Campus Life",
            icon: <Users className="h-4 w-4" />,
        },
        {
            id: "achievements",
            name: "Achievements",
            icon: <Award className="h-4 w-4" />,
        },
    ];

    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Mathematics Symposium 2024",
            description:
                "Annual symposium featuring leading mathematicians from around the world",
            category: "events",
            date: "March 2024",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Student Research Presentations",
            description:
                "Undergraduate students presenting their research projects",
            category: "events",
            date: "February 2024",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Mathematics Library",
            description:
                "Students studying in our state-of-the-art mathematics library",
            category: "campus",
            date: "January 2024",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Graduation Ceremony",
            description: "Mathematics graduates celebrating their achievements",
            category: "achievements",
            date: "December 2023",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Mathematics Building",
            description: "Our historic mathematics building on campus",
            category: "campus",
            date: "November 2023",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Faculty Research Lab",
            description: "Advanced computational mathematics research facility",
            category: "campus",
            date: "October 2023",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Mathematical Modeling Competition",
            description:
                "Students competing in the international mathematical modeling contest",
            category: "events",
            date: "September 2023",
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Award Ceremony",
            description:
                "Recognition ceremony for outstanding student achievements",
            category: "achievements",
            date: "August 2023",
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classroom Learning",
            description: "Interactive learning session in advanced calculus",
            category: "campus",
            date: "July 2023",
        },
        {
            id: 10,
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Guest Lecture Series",
            description: "Renowned mathematician delivering a special lecture",
            category: "events",
            date: "June 2023",
        },
        {
            id: 11,
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Study Groups",
            description: "Students collaborating on problem-solving sessions",
            category: "campus",
            date: "May 2023",
        },
        {
            id: 12,
            src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "International Conference",
            description:
                "Department hosting international mathematics conference",
            category: "events",
            date: "April 2023",
        },
    ];

    const filteredImages =
        selectedCategory === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % filteredImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                selectedImage === 0
                    ? filteredImages.length - 1
                    : selectedImage - 1
            );
        }
    };

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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
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
                        Department Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore moments from our vibrant academic community,
                        events, and campus life
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant={
                                    selectedCategory === category.id
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() => setSelectedCategory(category.id)}
                                className="flex items-center space-x-2"
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={selectedCategory} // Re-animate when category changes
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-64">
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                        <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-center p-4">
                                            <h3 className="font-semibold text-lg mb-2">
                                                {image.title}
                                            </h3>
                                            <p className="text-sm">
                                                {image.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                                        {image.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {image.description}
                                    </p>
                                    <p className="text-blue-600 text-xs mt-2 font-medium">
                                        {image.date}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeLightbox}
                        >
                            <motion.div
                                className="relative max-w-4xl max-h-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative">
                                    <Image
                                        src={
                                            filteredImages[selectedImage]
                                                ?.src || "/placeholder.svg"
                                        }
                                        alt={
                                            filteredImages[selectedImage]
                                                ?.title || ""
                                        }
                                        width={800}
                                        height={600}
                                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                    />

                                    {/* Close button */}
                                    <motion.button
                                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                                        onClick={closeLightbox}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.button>

                                    {/* Navigation buttons */}
                                    {filteredImages.length > 1 && (
                                        <>
                                            <motion.button
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                                                onClick={prevImage}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </motion.button>
                                            <motion.button
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                                                onClick={nextImage}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </motion.button>
                                        </>
                                    )}
                                </div>

                                {/* Image info */}
                                <motion.div
                                    className="bg-white rounded-lg p-4 mt-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {filteredImages[selectedImage]?.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        {
                                            filteredImages[selectedImage]
                                                ?.description
                                        }
                                    </p>
                                    <p className="text-blue-600 text-sm font-medium">
                                        {filteredImages[selectedImage]?.date}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Gallery Statistics */}
                <motion.section
                    className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Gallery Highlights
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                number: "500+",
                                label: "Photos",
                                color: "text-blue-600",
                            },
                            {
                                number: "50+",
                                label: "Events Covered",
                                color: "text-green-600",
                            },
                            {
                                number: "10+",
                                label: "Years of Memories",
                                color: "text-purple-600",
                            },
                            {
                                number: "1000+",
                                label: "Happy Moments",
                                color: "text-orange-600",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.6,
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div
                                    className={`text-3xl font-bold mb-2 ${stat.color}`}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-gray-700">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
