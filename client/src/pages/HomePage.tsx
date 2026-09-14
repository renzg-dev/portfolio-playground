import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import profileImage from "@/assets/images/me3.png";
import cleveroLogo from "@/assets/images/clevero.jpeg";
import dxcLogo from "@/assets/images/dxc2.jpg";
import { Link } from "react-router-dom";

const experiences = [
  {
    company: "Clevero",
    role: "Support Specialist",
    period: "June 2024 — June 2025",
    description:
      "Supporting customers, building workflows, and working with integrations and automation.",
    logo: cleveroLogo,
    alt: "CL",
  },
  {
    company: "DXC Technology",
    role: "Business Analyst",
    period: "August 2020 — October 2023",
    description:
      "Developing and maintaining web applications, collaborating with cross-functional teams, and implementing new features.",
    logo: dxcLogo,
    alt: "DXC",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Postgres",
  "SQL",
  "HTML",
  "CSS",
];

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* Test Routes */}
      <section className="flex flex-col gap-4 rounded-md bg-accent p-4 text-accent-foreground">
        <div className="text-2xl font-bold">Test Routes</div>

        <div>
          <Link
            to="/about"
            className="text-primary transition-colors hover:text-primary/80"
          >
            About
          </Link>
          <Link
            to="/playground"
            className="ml-4 text-primary transition-colors hover:text-primary/80"
          >
            Playground
          </Link>
          <Link
            to="/login"
            className="ml-4 text-primary transition-colors hover:text-primary/80"
          >
            Login
          </Link>
          <Link
            to="/typescript"
            className="ml-4 text-primary transition-colors hover:text-primary/80"
          >
            Typescript
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="pb-5 text-3xl font-bold">Hi, I'm Renz</div>
          <div className="text-lg text-muted-foreground">
            I'm a software engineer and web developer. I love building web
            applications and exploring new technologies.
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Renz"
          className="size-40 shrink-0 rounded-2xl object-cover"
        />
      </section>

      {/* Work Experience */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>

        {experiences.map((experience) => (
          <div className="flex justify-between">
            {/* Work Experience - Avatar, Role, Company, Period */}

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={experience.logo} alt={experience.alt} />
                <AvatarFallback>{experience.alt}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{experience.role}</h3>

                <p className="text-sm text-muted-foreground">
                  {experience.company}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
