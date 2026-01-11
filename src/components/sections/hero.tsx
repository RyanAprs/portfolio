import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        {/* Update Bagian Tombol Disini */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-fit">
            <Button
              variant="default"
              size="lg"
              className="group flex items-center gap-2 transition-all hover:bg-primary/90"
              asChild
            >
              <a href={DATA.url} target="_blank" rel="noopener noreferrer">
                <span>My CV</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group flex items-center gap-2"
              asChild
            >
              <Link href="/services">
                <span>Services</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
