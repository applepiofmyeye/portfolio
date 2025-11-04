import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  image: string;
  description: string;
  skills: string[];
  status: "deployed" | "wip" | "not maintained" | "stealth mode";
  link?: string;
  video?: string;
};

export default function page() {
  const projects: Project[] = [
    {
      name: "ember",
      image: "/projects/ember.png",
      description:
        "A Telegram bot deployment platform that allows users to deploy their own Telegram bots with a few clicks, built with React and AWS.",
      skills: [
        "React",
        "AWS",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS S3",
        "AWS DynamoDB",
        "AWS IAM",
        "AWS Route 53",
        "Docker",
      ],
      status: "deployed",
      link: "https://emberhost.vercel.app",
    },
    {
      name: "Vucar inspection report",
      image: "/projects/vucar-inspection-report.png",
      description: `An inspection report dashboard for car inspection officers to keep track of inspections.
        A project focused on how to deploy a front end and back end application to an AWS EC2 instance, using NGINX.
        `,
      skills: [
        "React",
        "Node.js",
        "Express",
        "SQLite",
        "Sequelize",
        "AWS EC2",
        "NGINX",
      ],
      status: "deployed",
      link: "https://github.com/applepiofmyeye/inspection-report",
    },
    {
      name: "NUSWhere",
      image: "/projects/NUSWhere.png",
      description:
        "A navigation app for NUS students to navigate from specific classrooms to other classrooms, providing sheltered routes and bus routes, built with React Native and Firebase.",
      skills: [
        "React Native",
        "Firebase Firestore",
        "Firebase Auth",
        "Google Cloud",
        "HTML/CSS",
        "Expo Go",
        "Google MapsAPI",
      ],
      status: "not maintained",
      link: "https://github.com/applepiofmyeye/NUSWhere",
    },
    {
      name: "melos",
      image: "/projects/melos.jpeg",
      description:
        "A telegram bot that would take in a Youtube URL and return it as an MP3 file, for people who listen to music or covers on Youtube and would like to have them store locally, easily accessible without internet. Built with Python and Telegram Bot API.",
      skills: ["Telegram Bot API", "Python"],
      status: "not maintained",
      link: "",
    },
    {
      name: "lil ben shop",
      image: "",
      video:
        "https://www.tiktok.com/player/v1/7327104521048444161?controls=0&loop=1&autoplay=1&native_context_menu=0",
      description:
        "A website for my small business, lil ben's universe, built with React and Stripe API. The components were built with pure CSS, and the Stripe API endpoint was created using an Express Node.js server.",
      skills: ["React", "Stripe API", "Express", "Node.js"],
      status: "not maintained",
      link: "https://tiktok.com/@lilbenuniverse/video/7327104521048444161",
    },
  ];
  return (
    <div className="space-y-8 py-8 text-[#46688d] container mx-auto px-4 sm:px-6 lg:px-8">
      <Typography
        variant={"display-md"}
        weight={"semibold"}
        className="text-[#46688d] mobile:text-2xl lg:text-5xl"
      >
        my projects!
      </Typography>
      <Typography variant={"body-md"} className="opacity-80 text-[#46688d] mobile:text-sm lg:text-lg">
        Some of my passion projects over the years. Click a title or the button
        to view more. Many are also on{" "}
        <Link
          href="https://github.com/applepiofmyeye"
          className="hover:underline"
        >
          my github here
        </Link>
      </Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <section key={project.name}>
            <Card className="flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="p-6 pb-0">
                {/* Media */}
                {project.video ? (
                  <div className="relative w-full overflow-hidden rounded-md border aspect-[9/16] bg-white">
                    <iframe
                      className="absolute left-0 top-0 h-full w-full"
                      src={project.video}
                      title={`${project.name} demo`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative w-full overflow-hidden rounded-md border aspect-[4/3] bg-white">
                    <Image
                      src={project.image === "" ? "/mochi.png" : project.image}
                      alt={`${project.name} cover image`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain p-4"
                      priority={false}
                    />
                  </div>
                )}
              </div>

              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  {project.link && project.link !== "" ? (
                    <Link
                      href={project.link}
                      className="group"
                      aria-label={`Open ${project.name}`}
                    >
                      <Typography
                        variant={"title-lg"}
                        weight={"semibold"}
                        className="text-[#46688d] group-hover:underline"
                      >
                        {project.name}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      variant={"title-lg"}
                      weight={"semibold"}
                      className="text-[#46688d]"
                    >
                      {project.name}
                    </Typography>
                  )}

                  <Badge
                    className={cn(
                      "h-fit border",
                      project.status === "deployed" &&
                        "bg-emerald-100 text-emerald-700 border-emerald-200",
                      project.status === "wip" &&
                        "bg-amber-100 text-amber-700 border-amber-200",
                      project.status === "not maintained" &&
                        "bg-rose-100 text-rose-700 border-rose-200",
                      project.status === "stealth mode" &&
                        "bg-slate-100 text-slate-700 border-slate-200"
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>

                <Typography variant={"body-sm"} className="text-[#46688d]/80">
                  {project.description}
                </Typography>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="h-fit border bg-gray-100 text-[#46688d]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto">
                {project.link && project.link !== "" ? (
                  <Button
                    asChild
                    variant="outline"
                    className="gap-1 text-[#46688d]"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      View project
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <div className="text-xs text-[#46688d]/60">
                    No public link available
                  </div>
                )}
              </CardFooter>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
