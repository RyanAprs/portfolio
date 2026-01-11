import { AchieviementCertificationCard } from "@/components/achieviement-certification-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function AchievementSection() {
  return (
    <section id="achievement">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                Achievement & Certification
              </h2>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.achievementAndCertifications.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 20 + id * 0.05}
            >
              <AchieviementCertificationCard
                key={project.title}
                title={project.title}
                dates={project.dates}
                issuer={project.issuer}
                image={project.image}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
