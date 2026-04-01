"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";
import {
  getEducationTranslation,
  mapEducationToTranslationKey,
} from "@/lib/i18n/helper";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
  const { language } = useLanguage();

  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <h2 className="text-xl font-bold">
            {translations["section.education"][language]}
          </h2>
        </BlurFade>
        {DATA.education.map((education, id) => {
          const key = mapEducationToTranslationKey(education.school);
          const degree = key
            ? getEducationTranslation(key, language)
            : education.degree;
          return (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 14 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
