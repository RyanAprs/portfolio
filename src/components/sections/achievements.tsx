"use client";

import { AchieviementCertificationCard } from "@/components/achieviement-certification-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";
import {
  getAchievementTranslation,
  mapAchievementToTranslationKey,
} from "@/lib/i18n/helper";

const BLUR_FADE_DELAY = 0.04;

export function AchievementSection() {
  const { language } = useLanguage();

  return (
    <section id="achievement">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                {translations["section.achievements"][language]}
              </h2>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.achievementAndCertifications.map((item, id) => {
            const key = mapAchievementToTranslationKey(item.title);
            const title = key
              ? getAchievementTranslation(key, language)
              : item.title;
            return (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 20 + id * 0.05}
              >
                <AchieviementCertificationCard
                  key={item.title}
                  title={title}
                  dates={item.dates}
                  issuer={item.issuer}
                  image={item.image}
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
