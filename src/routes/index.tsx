import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gavindu Rushela Ekanayaka | Software Engineer" },
      { name: "description", content: "Portfolio of Gavindu Rushela Ekanayaka, a Software Engineer focused on modern web development, full-stack applications, and scalable software solutions." },
      { property: "og:title", content: "Gavindu Rushela Ekanayaka | Software Engineer" },
      { property: "og:description", content: "Software Engineer building modern web applications, scalable systems, and clean user experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
