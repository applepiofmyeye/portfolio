import { Typography } from "@/components/typography";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="text-[#46688d] container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-20 lg:space-y-0 h-screen">
        <Image
          src="/profile.jpg"
          alt="girl leaning on the railing smiling"
          className="rounded-lg max-h-[80vh] max-w-[50vh] w-auto h-auto object-cover"
          width={1000}
          height={1000}
        />
        <Typography
          variant={"display-sm"}
          weight={"semibold"}
          className="lg:-mt-60 text-5xl text-[#46688d] mobile:text-3xl mobile-heading"
        >
          hi, my name&apos;s joey!
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-20 lg:space-y-0 h-screen">
        <Typography
          variant={"display-sm"}
          weight={"semibold"}
          className="lg:-mt-60 text-5xl text-[#466688d] max-w-4xl text-center mobile:text-2xl mobile-heading body-text"
        >
          i&apos;m a final year CS student at NUS, and a software engineer
          intern at PayPal. i&apos;m also a big fan of music, travel, and food!
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <Typography
          variant={"display-sm"}
          weight={"semibold"}
          className="lg:-mt-60 text-5xl text-[#466688d] max-w-4xl text-center mobile:text-2xl mobile-heading"
        >
          contact me at
        </Typography>
        <Typography
          variant={"body-lg"}
          weight={"semibold"}
          className="lg:-mt-60 text-5xl text-[#466688d] max-w-4xl text-center mobile:text-xl body-text contact-text"
        >
          👩🏻‍💻 Github:{" "}
          <a
            href="https://github.com/applepiofmyeye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/applepiofmyeye
          </a>
          <br />
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/joeylleyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/joeylleyi
          </a>
          <br />
          📮 Email:{" "}
          <a
            href="mailto:joeyleeleyi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            joeyleeleyi@gmail.com
          </a>
        </Typography>
      </div>
    </div>
  );
}
