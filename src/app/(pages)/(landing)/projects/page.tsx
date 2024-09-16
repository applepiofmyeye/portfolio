import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Project = {
  name: string;
  image: string;
  description: string;
  skills: string[];
  status: "deployed" | "wip" | "not maintained";
  link?: string;
};

export default function page() {
  const projects: Project[] = [
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
      description:
        "A website for my small business, lil ben's universe, built with React and Stripe API. The components were built with pure CSS, and the Stripe API endpoint was created using an Express Node.js server.",
      skills: ["React", "Stripe API", "Express", "Node.js"],
      status: "not maintained",
      link: "https://tiktok.com/@lilbenuniverse/video/7327104521048444161",
    },
  ];
  return (
    <div className="space-y-8 py-8">
      <Typography variant={"display-md"} weight={"semibold"}>
        my projects!
      </Typography>
      <Typography variant={"body-md"} className="opacity-80">
        some of my passion projects over the past few years. click on each card
        title for more info!(some are publicly viewable on{" "}
        <Link
          href="https://github.com/applepiofmyeye"
          className="hover:underline"
        >
          my github here
        </Link>
        )
      </Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <section key={project.name}>
            <Card className="p-6 space-y-6 flex flex-col align-center h-[100%]">
              <div className="space-y-2">
                <div className="flex justify-between align-baseline">
                  <Link
                    href={project.link === "" ? "/projects" : project.link!}
                    className="text-[#46688d] text-lg"
                  >
                    <Typography
                      variant={"title-lg"}
                      weight={"semibold"}
                      className={cn(
                        "text-[#46688d]",
                        project.link === ""
                          ? "cursor-default"
                          : "hover:underline"
                      )}
                    >
                      {project.name}
                    </Typography>
                  </Link>
                  <Badge
                    className={cn(
                      project.status === "deployed"
                        ? "bg-green-200"
                        : project.status === "wip"
                        ? "bg-yellow-200"
                        : "bg-red-200",
                      "text-[#46688d] h-fit"
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>
                <Typography variant={"body-sm"} className="text-gray-400">
                  {project.description}
                </Typography>
                <div className="space-x-2 space-y-2">
                  {project.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className={cn(
                        "text-[#46688d] h-fit bg-gray-200",
                        project.skills.length === 1 ? "w-full" : "w-fit"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="w-auto h-[40vh]">
                <img
                  src={project.image === "" ? "/mochi.png" : project.image}
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
