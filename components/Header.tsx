"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Faculty", href: "/faculty" },
        { name: "Students", href: "/students" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.header
            className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/" className="flex items-center space-x-3">
                            <motion.div
                                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-white font-bold text-xl">
                                    ∑
                                </span>
                            </motion.div>
                            <div>
                                <motion.h1
                                    className="text-xl font-bold text-gray-900"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Department of Mathematics
                                </motion.h1>
                                <motion.p
                                    className="text-sm text-gray-600"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Chittagong College, Chittagong
                                </motion.p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-1">
                        {navigation.map((item, index) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-gray-700 px-4 py-2 text-sm font-medium transition-all duration-200 relative group hover:text-blue-600 hover:bg-blue-50 ${
                                            isActive
                                                ? "text-blue-700 bg-blue-50 font-semibold shadow-sm rounded-t-lg"
                                                : "rounded-lg"
                                        }`}
                                    >
                                        {item.name}
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left"
                                            initial={{ scaleX: 0 }}
                                            animate={{
                                                scaleX: isActive ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-6 w-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-6 w-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="lg:hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50/80 backdrop-blur-sm rounded-lg mb-4">
                                {navigation.map((item, index) => {
                                    const isActive =
                                        item.href === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(item.href);
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-white ${
                                                    isActive
                                                        ? "text-blue-700 bg-blue-100 font-semibold shadow-sm"
                                                        : "text-gray-700"
                                                }`}
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
