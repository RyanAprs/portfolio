"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n/Translations";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {translations["section.contact"][language]}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {translations["contact.getInTouch"][language]}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {language === "en" ? (
                <>
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on email
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </>
              ) : language === "id" ? (
                <>
                  Ingin mengobrol? Kirimkan pesan langsung dengan pertanyaan
                  melalui{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    email
                  </Link>{" "}
                  dan saya akan merespons sesegera mungkin. Saya tidak akan
                  merespons promosi.
                </>
              ) : (
                <>
                  話しかけたいですか？メールで直接質問を{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    送ってください
                  </Link>
                  。できる限り返信します。勧誘メッセージは無視します。
                </>
              )}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
