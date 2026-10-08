import {
  Award,
  Code,
  Cpu,
  FileText,
  GraduationCap,
} from "lucide-react";

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

interface CertificateLink {
  label: string;
  url: string;
  icon: "award" | "fileText";
}

interface DatabricksSubItem {
  title: string;
  certificate: CertificateLink;
}

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution?: string;
  description?: string;
  position: "right" | "left";
  logo?: {
    src: string;
    alt: string;
  };
  marker: {
    type: "icon" | "logo";
    iconName?: "GraduationCap" | "Code" | "Cpu";
    logoSrc?: string;
    logoAlt?: string;
    link?: string;
  };
  certificate?: CertificateLink;
  databricksItems?: DatabricksSubItem[];
  hasUpliftLink?: boolean;
}

const timelineItems: TimelineItem[] = [
  {
    id: "sliit",
    period: "2023 — 2027",
    title: "BSc (Hons) Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    description:
      "Pursuing a bachelor's degree in Software Engineering at the Sri Lanka Institute of Information Technology.",
    position: "right",
    logo: {
      src: "/education/sliit.png",
      alt: "SLIIT Logo",
    },
    marker: {
      type: "icon",
      iconName: "GraduationCap",
    },
  },
  {
    id: "uom",
    period: "2022 — 2023",
    title: "Trainee Full-Stack Developer",
    institution: "UOM Open Learning",
    description:
      "Developed web applications using modern JavaScript frameworks and full stack development practices.",
    position: "left",
    logo: {
      src: "/education/UOM.png",
      alt: "University of Moratuwa Logo",
    },
    marker: {
      type: "icon",
      iconName: "Code",
    },
    certificate: {
      label: "View Certificate",
      url: "/certificate/Python_for_Beginners_E-Certificate.pdf",
      icon: "award",
    },
  },
  {
    id: "ieu",
    period: "2024 — 2025",
    title: "AI/ML Engineer",
    institution: "SLIIT — Industry Engagement Unit (IEU)",
    description: "SLIIT — Industry Engagement Unit (IEU)",
    position: "right",
    logo: {
      src: "/education/IEU.png",
      alt: "SLIIT IEU Logo",
    },
    marker: {
      type: "icon",
      iconName: "Cpu",
    },
    certificate: {
      label: "View Stage 1 Certificate",
      url: "/certificate/Rushela Ekanayaka - 2025-07-05.pdf",
      icon: "award",
    },
  },
  {
    id: "databricks",
    period: "2025",
    title: "Databricks",
    position: "left",
    marker: {
      type: "logo",
      logoSrc: "/education/databrick.png",
      logoAlt: "Databricks Logo",
    },
    databricksItems: [
      {
        title: "Generative AI Fundamentals",
        certificate: {
          label: "View Certificate",
          url: "/certificate/certificate.pdf",
          icon: "award",
        },
      },
      {
        title: "Databricks Fundamentals Accreditation",
        certificate: {
          label: "View Certificate",
          url: "/certificate/2308_3_1118489_1751768498_Databricks - Generic.pdf",
          icon: "award",
        },
      },
    ],
  },
  {
    id: "uplift",
    period: "2025 — 2026",
    title: "Software Engineer Intern",
    institution: "Prosper Global Education (Pvt) Ltd",
    description:
      "Completed a Software Engineering internship at Prosper Global Education (Pvt) Ltd, contributing to the development and enhancement of the Uplift.lk platform.",
    hasUpliftLink: true,
    position: "right",
    marker: {
      type: "logo",
      logoSrc: "/education/uplift.png",
      logoAlt: "Uplift Logo",
      link: "https://uplift.lk/",
    },
    certificate: {
      label: "View Service Letter",
      url: "/certificate/SL.pdf",
      icon: "fileText",
    },
  },
];

function renderMarkerIcon(iconName?: "GraduationCap" | "Code" | "Cpu") {
  switch (iconName) {
    case "GraduationCap":
      return <GraduationCap className="timeline-marker-icon" />;
    case "Code":
      return <Code className="timeline-marker-icon" />;
    case "Cpu":
      return <Cpu className="timeline-marker-icon" />;
    default:
      return null;
  }
}

export function Education() {
  return (
    <section className="content-section education-section" id="experience">
      <div id="education" />
      <SectionHeading
        index="05"
        title="Education & Experience"
        subtitle="A timeline of my academic journey, professional experience, and certifications."
      />

      <div className="timeline-container">
        {/* Center vertical timeline track */}
        <div className="timeline-line" aria-hidden="true" />

        {timelineItems.map((item) => {
          const isRight = item.position === "right";

          return (
            <div
              key={item.id}
              className={`timeline-row ${isRight ? "timeline-row-right" : "timeline-row-left"}`}
            >
              {/* Content Column */}
              <div className="timeline-col timeline-col-content">
                <article className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-title">{item.title}</h3>

                  {item.institution ? (
                    <div className="timeline-institution">{item.institution}</div>
                  ) : null}

                  {/* Logo + Description for institutions */}
                  {item.logo ? (
                    <div className="timeline-logo-desc">
                      <img
                        src={item.logo.src}
                        alt={item.logo.alt}
                        className="timeline-institution-logo"
                      />
                      {item.description ? (
                        <p className="timeline-desc">{item.description}</p>
                      ) : null}
                    </div>
                  ) : null}

                  {/* Databricks sub-items */}
                  {item.databricksItems ? (
                    <div className="timeline-subitems">
                      {item.databricksItems.map((subItem) => (
                        <div key={subItem.title} className="timeline-subitem">
                          <div className="timeline-subitem-title">
                            {subItem.title}
                          </div>
                          <a
                            href={subItem.certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="timeline-cert-link"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>{subItem.certificate.label}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Uplift internship description with link */}
                  {item.hasUpliftLink ? (
                    <p className="timeline-desc">
                      Completed a Software Engineering internship at Prosper Global
                      Education (Pvt) Ltd, contributing to the development and
                      enhancement of the{" "}
                      <a
                        href="https://uplift.lk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-inline-link"
                      >
                        Uplift.lk
                      </a>{" "}
                      platform.
                    </p>
                  ) : null}

                  {/* Single Certificate / Service letter */}
                  {item.certificate ? (
                    <div className="timeline-actions">
                      <a
                        href={item.certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-cert-link"
                      >
                        {item.certificate.icon === "award" ? (
                          <Award className="w-3.5 h-3.5" />
                        ) : (
                          <FileText className="w-3.5 h-3.5" />
                        )}
                        <span>{item.certificate.label}</span>
                      </a>
                    </div>
                  ) : null}
                </article>
              </div>

              {/* Center Marker */}
              <div className="timeline-marker-wrapper">
                {item.marker.type === "logo" && item.marker.logoSrc ? (
                  item.marker.link ? (
                    <a
                      href={item.marker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-marker-link"
                      aria-label={`Visit ${item.marker.logoAlt || item.title}`}
                      title={`Visit ${item.marker.logoAlt || item.title}`}
                    >
                      <div className="timeline-marker">
                        <img
                          src={item.marker.logoSrc}
                          alt={item.marker.logoAlt || item.title}
                          className="timeline-marker-img"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="timeline-marker">
                      <img
                        src={item.marker.logoSrc}
                        alt={item.marker.logoAlt || item.title}
                        className="timeline-marker-img"
                      />
                    </div>
                  )
                ) : (
                  <div className="timeline-marker">
                    {renderMarkerIcon(item.marker.iconName)}
                  </div>
                )}
              </div>

              {/* Opposite Empty Column for alternating layout on desktop */}
              <div className="timeline-col timeline-col-empty" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
