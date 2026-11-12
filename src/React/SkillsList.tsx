import { useState, type ReactNode } from "react";

const categoryIcons: Record<string, ReactNode> = {
  "Frontend development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01M10 8h.01M14 8h.01" />
    </svg>
  ),
  "Backend development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  "Tools & testing": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)]"
      aria-hidden="true"
    >
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

const skills = {
  "Frontend development": [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "TanStack Query",
    "TanStack Table",
    "Zustand",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  "Backend development": [
    "Node.js",
    "Express.js",
    "NestJS",
    "SQL",
    "TypeORM",
    "REST APIs",
  ],
  "Tools & testing": [
    "Vitest",
    "React Testing Library",
    "HERE Maps API",
    "Firebase",
    "Git",
    "Docker",
    "CI/CD",
  ],
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full pt-3 text-left md:pt-9">
      <h2 className="text-3xl font-semibold text-[var(--white)] md:mb-6 md:text-4xl">
        Skills &amp; tools
      </h2>
      <ul className="mt-4 space-y-3 text-lg">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          const panelId = `skills-${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;

          return (
            <li key={category} className="w-full">
              <div className="overflow-hidden rounded-2xl border border-[var(--white-icon-tr)] bg-[#1414149c] transition-colors hover:bg-opacity-80 md:w-[400px]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenItem(isOpen ? null : category)}
                  className="flex w-full items-center gap-3 p-4 text-left"
                >
                  {categoryIcons[category]}
                  <span className="flex-grow text-[var(--white)]">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-6 w-6 flex-shrink-0 text-[var(--white)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="px-4 pb-4"
                >
                  <ul className="flex flex-wrap gap-2 text-sm text-[var(--white-icon)]">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[var(--white-icon-tr)] px-3 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
