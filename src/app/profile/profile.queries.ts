import groq from 'groq'

const preview = groq`
  _id,
  avatar,
  background,
  name,
  subtitle,
  summary,
  "skills": skills[]->{image, name},
  "projects": projects[]->{
    id,
    _key,
    name,
    desc,
    preview,
    "skills": skills[]->name,
    demo,
    source
  },
  "history": history[]{
    companyName,
    duration,
    workStyle,
    position,
    comments
  },
  "contactInfo": contactInfo { git, ln, mail, te, tw }
`

export const indexQuery = groq`
*[_type == "user" && _id == "84e9e9bf-152f-40d9-bbc3-1b88a5710008"] | order(_createdAt desc) {
  ${preview}
}
`

interface Project {
  id: string;
  _key: string;
  name: string;
  desc: string;
  preview: any;
  skills: string[];
  demo: string;
  source: string;
}

interface ContactInfo {
  git: string;
  ln: string;
  mail: string;
  te: string;
  tw: string;
}

interface Skills {
  image: any;
  name: string;
}

interface Duration {
  from: Date;
  to: Date;
}

interface History {
  companyName: string;
  duration: Duration;
  workStyle: string;
  position: string;
  comments: string[];
}

export interface Employee {
  _id: string;
  avatar: any;
  background: any;
  name: string;
  subtitle: string;
  summary: string[];
  skills: Skills[];
  projects: Project[];
  contactInfo: ContactInfo;
  history: History[];
}
