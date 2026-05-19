export const profile = {
  name: "Adwait Mali",
  tagline: "CS Master's @ Stony Brook · ML / Distributed Systems / Computer Vision",
  blurb:
    "I build systems at the intersection of machine learning and distributed computing — from consensus protocols in Go to deep-learning pipelines for sports analytics and planetary science.",
  location: "Stony Brook, NY",
  email: "adwaitmali2003@gmail.com",
  phone: "(934) 221-0988",
  links: {
    linkedin: "https://www.linkedin.com/in/adwait-mali/",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
  },
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  period: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    school: "Stony Brook University",
    location: "Stony Brook, New York",
    degree: "M.S. in Computer Science",
    period: "Aug 2025 — May 2027",
    coursework: [
      "Data Science Fundamentals",
      "Computer Vision",
      "Distributed Systems",
      "Database Systems",
      "Human-Centered AI",
    ],
  },
  {
    school: "Vishwakarma Institute of Technology",
    location: "Pune, MH, India",
    degree: "B.Tech. in Information Technology",
    period: "Dec 2021 — May 2025",
    coursework: [
      "Design & Analysis of Algorithms",
      "Data Structures",
      "Database Management Systems",
      "Systems Programming",
      "Operating Systems",
      "Software Design Methodologies",
      "Image Processing & Computer Vision",
      "Machine Learning & Deep Learning",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Tech Mahindra",
    role: "Green IT Intern — LLM",
    location: "Pune, MH, India",
    period: "Aug 2024 — Dec 2024",
    bullets: [
      "Built a code refiner on the Sustainability team that uses fine-tuned LLMs to rewrite Java and C++ source for energy efficiency.",
      "Experimented with multiple pre-trained LLMs, fine-tuning each on a curated dataset of paired inefficient/efficient code samples.",
      "Used retrieval-augmented generation to keep generated code aligned with CISQ quality standards.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: "Paxos & PBFT Consensus",
    subtitle: "Distributed Systems coursework (CSE535, SBU)",
    period: "Aug — Dec 2025",
    tags: ["Go", "Distributed Systems", "Consensus", "Sharding"],
    bullets: [
      "Implemented Paxos and PBFT in Go with log replication, leader election, and fault-tolerance.",
      "Scaled the system using distributed sharding with 2PC layered on top of Paxos to guarantee intra-shard replication.",
    ],
  },
  {
    title: "Deep Learning for Badminton Tracking",
    subtitle: "Player motion tracking & action prediction",
    period: "Jan — Mar 2025",
    tags: ["YOLOv8n", "ResNet50", "r3d_18", "PyQt5", "OpenCV"],
    bullets: [
      "Built an end-to-end sports-video analysis pipeline using YOLOv8n for player detection and tracking, reaching 85.3% mAP.",
      "Trained a ResNet50 for court keypoint detection at 92.5% accuracy and an r3d_18 model that classifies player shots at 88.0%.",
      "Shipped a PyQt5 GUI on top of the pipeline, segmenting rallies and analysing video at 27 FPS on GPU.",
    ],
  },
  {
    title: "Lunar Ejecta Detection",
    subtitle: "Faster R-CNN + GAN augmentation",
    period: "Oct 2023 — Jan 2024",
    tags: ["Faster R-CNN", "VanillaGAN", "Computer Vision", "Published"],
    bullets: [
      "Automated detection of lunar craters with ejecta patterns by fine-tuning Faster R-CNN on high-resolution lunar imagery.",
      "Augmented the dataset with VanillaGAN-generated lunar terrain to improve generalisation across surface types.",
      "Achieved 85.35% detection accuracy and 0.853 Average Precision; published at IEEE Confluence 2024.",
    ],
  },
  {
    title: "MLOps Pipeline — Housing Prices",
    subtitle: "End-to-end deployment",
    period: "Dec 2023",
    tags: ["Python", "Docker", "GitHub Actions", "Heroku"],
    bullets: [
      "Built a full MLOps pipeline for a linear-regression housing-price predictor in Python.",
      "Containerised the service with Docker and automated deploys to Heroku via GitHub Actions.",
    ],
  },
];

export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
};

export const publications: Publication[] = [
  {
    authors: "Ghadekar, P., Rathad, C., Jangral, S., Unde, R., Mali, A., Karande, A.",
    year: "2024",
    title:
      "Lunar ejecta pattern detection and analysis using faster R-CNN and GAN augmentation",
    venue:
      "14th International Conference on Cloud Computing, Data Science & Engineering (Confluence), IEEE, pp. 652–656",
  },
  {
    authors: "Ghadekar, P., Borude, O., Gavali, V., Gholap, D., Mali, A., Rathad, C.",
    year: "2024",
    title:
      "Artificial Intelligence-Guided Telescope Control System using Jetson-Nano",
    venue:
      "2nd International Conference on Advances in Computation, Communication and Information Technology (ICAICCIT), Vol. 1, pp. 54–59, IEEE",
  },
  {
    authors: "Suryawanshi, R., Mahajan, N., Mali, T., Mali, A., Rathad, C.",
    year: "2025",
    title:
      "DriveAssist — An innovative semi-autonomous driving system for enhanced road safety",
    venue:
      "AIP Conference Proceedings, Vol. 3227, No. 1, p. 040004, AIP Publishing LLC",
  },
  {
    authors: "Bhatele, P., Mali, S., Mali, A., Chrungoo, M., Mali, A., Makode, R.",
    year: "2022",
    title: "Energy Generation Via Footsteps Using Piezoelectric Sensor",
    venue: "International Research Journal of Engineering and Technology, pp. 9–12",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Go", "Java", "C", "C++", "R", "SQL", "MATLAB"],
  },
  {
    label: "ML & DL",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "TensorFlow Lite",
      "LangChain",
      "vLLMs",
      "Explainable AI",
      "Generative AI",
      "Agentic AI",
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Seaborn",
      "Plotly",
      "ETL Pipelines",
      "A/B Testing",
      "Feature Extraction",
    ],
  },
  {
    label: "Web & Apps",
    items: ["Streamlit", "Flask", "PyQt5"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (S3, Lambda, Translate)",
      "GCP Dialogflow",
      "Firebase",
      "Twilio",
      "Apache Spark",
      "GitHub Copilot",
    ],
  },
];
