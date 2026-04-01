"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";

const BLUR_FADE_DELAY = 0.04;

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">
          {translations["section.about"][language]}
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {translations["hero.summary"][language]}
        </Markdown>
      </BlurFade>
    </section>
  );
}
