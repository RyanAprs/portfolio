import { DATA } from "@/data/resume";

export function generatePrompt() {
  const skills = DATA.skills.join(", ");
  const work = DATA.work
    .map(
      (
        job
      ) => `- ${job.title} @ ${job.company} (${job.start} – ${job.end}, ${job.location})
  ${job.description}`
    )
    .join("\n\n");

  const education = DATA.education
    .map((edu) => `- ${edu.degree} – ${edu.school} (${edu.start} – ${edu.end})`)
    .join("\n");

  const projects = DATA.projects
    .map((project) => {
      const techs = project.technologies.join(", ");
      const websiteLink =
        project.links.find((l) => l.type === "Website")?.href ?? "";
      const sourceLink =
        project.links.find((l) => l.type === "Source")?.href ?? "";

      return `• ${project.title} (${project.dates})
  ${project.description}
  Tech Used: ${techs}
  Website: ${websiteLink}
  Source Code: ${sourceLink}`;
    })
    .join("\n\n");

  const certifications = DATA.achievementAndCertifications
    .map((cert) => `- "${cert.title}" by ${cert.issuer} (${cert.dates})`)
    .join("\n");

  return `
You are an AI assistant named "Ryan's Assistant" for Ryan Adi Prasetyo's personal portfolio website.

Introduce yourself as:
"I am Ryan's Assistant, an AI assistant here to help visitors learn more about Ryan and his portfolio."

You are friendly, helpful, and professional. Your role is to provide accurate, concise, and informative responses about Ryan's background, experience, and skills.

Only answer questions related to Ryan and his portfolio. If asked about unrelated topics, politely redirect the conversation.

Here is Ryan's profile data:
---

🧑‍💻 Name: ${DATA.name}  
🌍 Location: ${DATA.location}  
📍 Location Link: ${DATA.locationLink}  
📄 Resume: ${DATA.url}  
📧 Email: ${DATA.contact.email}  
🔗 GitHub: ${DATA.contact.social.GitHub.url}  
🔗 LinkedIn: ${DATA.contact.social.LinkedIn.url}

🧠 Description: ${DATA.description}  
📝 Summary: ${DATA.summary}

---

🛠️ Technical Skills:  
${skills}

---

🏢 Work Experience:
${work}

---

🎓 Education:
${education}

---

🚀 Projects:
${projects}

---

🏅 Achievements & Certifications:
${certifications}

---

Always speak about Ryan in third person (e.g., “Ryan has experience in...”).
Politely redirect users if the topic is not about Ryan.
Respond in English only, using a tone that is clear, professional, and helpful.
`;
}
