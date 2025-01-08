"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const faqs = [
    {
        id: 1,
        question: "What is a Cloud Contact Center?",
        answer:
            "Cloud contact centers serve as a centralized hub, unifying customer interactions across diverse communication channels without having to build out and maintain an on-premise footprint. Contact centers enhance customer communications, providing features like interactive voice response (IVR), and advanced analytics to optimize engagement.",
    },
    {
        id: 2,
        question: "Why Cloud Contact Center is Right For my Business?",
        answer:
            "Cloud contact center solutions improve customer experiences with omnichannel engagement, optimized calls, and agent management. They enhance security compliance and boost agent performance.",
    },
    {
        id: 3,
        question: "What is Workforce Management?",
        answer:
            "Workforce management involves strategies and technologies for maximizing employee productivity. In a contact center, it ensures scheduling the appropriate number of skilled agents at the right times.",
    },
    {
        id: 4,
        question: "What are the benefits of Multitenant Solution?",
        answer:
            "Multi-tenant contact center solution allows multiple organizations to share contact center infrastructure while maintaining data separation and individual configurations. It offers cost efficiency, scalability, rapid deployment, centralized management, resource optimization, security, high availability, integration, and collaborative opportunities. This approach streamlines operations, reduces costs, and enhances overall efficiency in managing customer interactions.",
    },
];

const InViewMotion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); 

    return (
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
            {children}
        </motion.div>
    );
};

const Faq = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    return (
        <div>
            <div className="space-y-6">
                <h1 className="uppercase text-xl text-orange-500 text-center ">FAQ's</h1> 
                <div className="flex justify-center items-center">
                <Image src={'https://via.placeholder.com/400X500'} className="md:w-1/3 hidden md:block md:h-96 rounded-md" width={500} height={400} alt="" />
                <div className="md:w-2/3 w-full max-w-7xl mx-auto  p-6 space-y-6">
                    {faqs.map((faq, index) => (
                        <InViewMotion key={faq.id}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className={`bg-bgLight dark:bg-bgDark text-lightText dark:text-darkText rounded-lg shadow`}
                            >
                                <div
                                    className="p-4 cursor-pointer font-semibold flex justify-between items-center"
                                    onClick={() => toggleAccordion(faq.id)}
                                >
                                    <h3 className="text-lg">{faq.question}</h3>
                                    <motion.span
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: expanded === faq.id ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-xl"
                                    >
                                        &gt;
                                    </motion.span>
                                </div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: expanded === faq.id ? "auto" : 0 }}
                                    transition={{ duration: 0.4, ease: "linear" }}
                                    className={`overflow-hidden bg-white text-gray-700 rounded-b-lg ${
                                        expanded === faq.id ? "p-4" : "p-0"
                                    }`}
                                >
                                    {expanded === faq.id && <p>{faq.answer}</p>}
                                </motion.div>
                            </motion.div>
                        </InViewMotion>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
