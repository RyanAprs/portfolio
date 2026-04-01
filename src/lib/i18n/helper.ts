import {
  workTranslations,
  projectTranslations,
  educationTranslations,
  achievementTranslations,
} from "./data-translations";
import { Language } from "@/context/LanguageContext";
import { TranslationKey, translations } from "./Translations";

/**
 * Get translation for a given key
 */
export function getTranslation(
  key: TranslationKey,
  language: Language,
): string {
  return translations[key]?.[language] || key;
}

/**
 * Get work experience translation
 */
export function getWorkTranslation(
  key: keyof typeof workTranslations,
  field: "title" | "description",
  language: Language,
): string {
  return workTranslations[key]?.[field]?.[language] || "";
}

/**
 * Get project translation
 */
export function getProjectTranslation(
  key: keyof typeof projectTranslations,
  language: Language,
): string {
  return projectTranslations[key]?.description?.[language] || "";
}

/**
 * Get education translation
 */
export function getEducationTranslation(
  key: keyof typeof educationTranslations,
  language: Language,
): string {
  return educationTranslations[key]?.degree?.[language] || "";
}

/**
 * Get achievement translation
 */
export function getAchievementTranslation(
  key: keyof typeof achievementTranslations,
  language: Language,
): string {
  return achievementTranslations[key]?.title?.[language] || "";
}

/**
 * Map work company name to translation key
 */
export function mapWorkToTranslationKey(
  company: string,
): keyof typeof workTranslations | null {
  if (company.includes("Winnicode")) return "fullstack_winnicode";
  if (company.includes("Muhammadiyah Magelang"))
    return "lecturer_assistant_unimma";
  if (company.includes("Regional Secretariat")) return "fullstack_magelang";
  if (company.includes("Serenade")) return "serenade_story";
  if (company.includes("Hello Friday")) return "hello_friday";
  if (company.includes("Ailesh")) return "ailesh";
  return null;
}

/**
 * Map project title to translation key
 */
export function mapProjectToTranslationKey(
  title: string,
): keyof typeof projectTranslations | null {
  const projectMap: Record<string, keyof typeof projectTranslations> = {
    PRBCare: "prbcare",
    Cartify: "cartify",
    TickeTix: "ticketix",
    "Jelajah Nusantara": "jelajah_nusantara",
  };

  return projectMap[title] || null;
}

/**
 * Map education school to translation key
 */
export function mapEducationToTranslationKey(
  school: string,
): keyof typeof educationTranslations | null {
  if (school.includes("Muhammadiyah Magelang")) {
    return "unimma";
  }
  if (school.includes("Hacktiv8")) {
    return "hacktiv8";
  }
  return null;
}

/**
 * Map achievement title to translation key
 */
export function mapAchievementToTranslationKey(
  title: string,
): keyof typeof achievementTranslations | null {
  if (title.includes("Intro to Software")) {
    return "intro_se";
  }
  if (title.includes("Backend Development")) {
    return "backend_apis";
  }
  if (title.includes("MSIB")) {
    return "msib_hacktiv8";
  }
  if (title.includes("3rd Winner")) {
    return "web_design_winner";
  }
  return null;
}
