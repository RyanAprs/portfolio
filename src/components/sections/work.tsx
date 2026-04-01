"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";
import { getWorkTranslation, mapWorkToTranslationKey } from "@/lib/i18n/helper";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  const { language } = useLanguage();

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold">
            {translations["section.work"][language]}
          </h2>
        </BlurFade>
        {DATA.work.map((work, id) => {
          const key = mapWorkToTranslationKey(work.company);
          const title = key
            ? getWorkTranslation(key, "title", language)
            : work.title;
          const description = key
            ? getWorkTranslation(key, "description", language)
            : work.description;
          return (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${
                  work.end ?? translations["work.present"][language]
                }`}
                description={description}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
