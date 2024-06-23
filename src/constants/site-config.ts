const environmentUrl = process.env.NEXT_PUBLIC_URL;

export const baseUrl = environmentUrl
  ? `https://${environmentUrl}`
  : `http://localhost:3000`;

export const domain = environmentUrl ?? "http://localhost:3000";

export const Routes = {
  PROJECTS: "projects",
  PHOTOJOURNAL: "photo-journal",
  HAPPYTHOUGHTS: "happy-thoughts",
} as const;

export const siteConfig = {
  title: "Joey's Portfolio: Software Developer and Computer Science Undergraduate",
  description:"i'm joey, a year 3 computer science student!",
url: "https://localhost:3000/",
};
