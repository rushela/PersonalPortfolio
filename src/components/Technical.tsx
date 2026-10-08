import { useState } from "react";

interface SectionHeadingProps {
    index: string;
    title: string;
    subtitle?: string;
}

function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <span>{index}</span>
            <div>
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>
        </div>
    );
}

interface SkillCategory {
    title: string;
    items: string[];
}

const categories: SkillCategory[] = [
    {
        title: "Core Stack",
        items: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
        ],
    },
    {
        title: "Frameworks & Libraries",
        items: [
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "Bootstrap",
            "Framer Motion",
            "React Native",
            "Expo",
        ],
    },
    {
        title: "Backend & Data",
        items: [
            "MongoDB",
            "MySQL",
            "SQLite",
            "Supabase",
            "Firebase",
            "REST APIs",
            "Stripe",
            "Cloudflare",
        ],
    },
    {
        title: "Languages",
        items: [
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "C++",
            "PHP",
            "SQL",
            "Kotlin",
            "HTML",
            "CSS",
            "C",
        ],
    },
    {
        title: "Tools & Platforms",
        items: [
            "Git",
            "GitHub",
            "VS Code",
            "Figma",
            "Android Studio",
            "IntelliJ IDEA",
            "Eclipse",
            "Arduino IDE",
            "JIRA",
            "Trello",
            "Turborepo",
        ],
    },
    {
        title: "Areas of Expertise",
        items: [
            "Full-Stack Development",
            "Web Development",
            "Frontend Development",
            "Backend Development",
            "REST API Development",
            "Database Design",
            "Responsive UI Development",
            "UI/UX Implementation",
            "Cloud & Deployment",
        ],
    },
];

// Highlighted technologies that recruiters should notice first
const coreFeaturedSkills = new Set([
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
]);

const prioritySkills = new Set([
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
]);



export function Technical() {
    const [activeCategory, setActiveCategory] = useState(0);

    const currentCategory = (categories[activeCategory] ?? categories[0])!;
    const isCoreCategory = activeCategory === 0;

    return (
        <section className="content-section skills" id="skills">
            <SectionHeading
                index="03"
                title="Technical toolkit"
                subtitle="A focused stack for building reliable products."
            />

            {/* Category Navigation */}
            <div className="skills-nav-container">
                <nav
                    className="skills-nav-list"
                    aria-label="Skill categories"
                    role="tablist"
                >
                    {categories.map((cat, index) => {
                        const isActive = activeCategory === index;
                        return (
                            <button
                                key={cat.title}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCategory(index)}
                                className={`skills-nav-item ${isActive ? "active" : ""}`}
                            >
                                {cat.title}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Active Category Display */}
            <div key={activeCategory} className="skills-active-content">
                <div className="skills-tags-wrap">
                    {currentCategory.items.map((skill) => {
                        const isFeatured = isCoreCategory && coreFeaturedSkills.has(skill);
                        const isPrimary = !isFeatured && prioritySkills.has(skill);

                        let tagClass = "skill-tag skill-tag-standard";
                        if (isFeatured) {
                            tagClass = "skill-tag skill-tag-featured";
                        } else if (isPrimary) {
                            tagClass = "skill-tag skill-tag-primary";
                        }

                        return (
                            <span key={skill} className={tagClass}>
                                {isFeatured ? <i aria-hidden="true" /> : null}
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div>


        </section>
    );
}

export default Technical;
