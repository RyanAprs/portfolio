"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";

const BLUR_FADE_DELAY = 0.04;

export function SkillsSection() {
  const { language } = useLanguage();

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <h2 className="text-xl font-bold">
            {translations["section.skills"][language]}
          </h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
