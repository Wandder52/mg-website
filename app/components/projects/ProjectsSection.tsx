'use client';

import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Container } from "../ui/container";
import { PROJECTS_CONTENT, PROJECTS, FALLBACK_PROJECT_IMAGE } from "@/lib/constants";

type Project = typeof PROJECTS[number];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selected project to allow modal close animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          {/* Eyebrow with underline */}
          <div className="mb-4 inline-block">
            <p className="text-sm font-semibold uppercase tracking-wider text-mega-teal">
              {PROJECTS_CONTENT.eyebrow}
            </p>
            <div className="mt-2 h-0.5 w-full bg-mega-teal" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">{PROJECTS_CONTENT.heading}</h2>
        </div>

        {/* Projects Grid - 5 columns on large screens, 2 rows */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.images[0]?.image ?? FALLBACK_PROJECT_IMAGE}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
