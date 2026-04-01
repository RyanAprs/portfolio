"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";
import {
  getProjectTranslation,
  mapProjectToTranslationKey,
} from "@/lib/i18n/helper";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {translations["projects.badge"][language]}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {translations["projects.heading"][language]}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {translations["projects.subheading"][language]}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => {
            const key = mapProjectToTranslationKey(project.title);
            const description = key
              ? getProjectTranslation(key, language)
              : project.description;
            return (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 18 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
