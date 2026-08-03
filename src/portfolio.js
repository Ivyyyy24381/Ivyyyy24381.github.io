/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ivy He's Portfolio",
  description:
    "Portfolio of Ivy He – researcher and artist working on human-robot interaction, cognition, and creative systems.",
  og: {
    title: "Ivy X. He Portfolio",
    type: "website",
    url: "Ivyyyy24381.github.io", // Replace with your actual URL if hosted
  },
};

//Home Page
const greeting = {
  title: "Ivy X. He",
  logo_name: "IvyHe",
  nickname: "何筱 - Xiao He",
  subTitle: "Robotics Researcher, Engineer & Dancer",
  resumeLink: "https://ivyyyy24381.github.io/Ivy_He_CV_2026.pdf",
  portfolio_repository: "https://github.com/Ivyyyy24381/Ivyyyy24381.github.io",
  githubProfile: "https://github.com/Ivyyyy24381", // Replace with your actual GitHub URL
};

const socialMediaLinks = [
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=5uK35CcAAAAJ&hl=en",
    fontAwesomeIcon: "fas fa-graduation-cap",
    backgroundColor: "#4285F4",
  },
  {
    name: "Github",
    link: "https://github.com/Ivyyyy24381",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ivyhe24381/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:xiao_he@brown.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/IvyXHe",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/hxivyyyy/",
  //   fontAwesomeIcon: "fa-instagram",
  //   backgroundColor: "#E4405F",
  // },
];

const skills = {
  data: [
    {
      title: "",
      skills: [
        "I am Ivy X. He, a Ph.D. candidate in Computer Science at Brown University advised by Prof. Stefanie Tellex. My research focuses on multimodal human-robot interaction, embodied AI, and probabilistic decision-making (POMDP), with interdisciplinary work combining art, robotics, and cognitive science. Recent projects include FetchHound (learning dog-like social attention for object search), UMBRA (an NEA-supported multi-robot shadow performance system), and LEGS-POMDP (language- and gesture-guided object search). My background includes a B.S. in Mechanical Engineering with an additional major in Robotics from Carnegie Mellon University, and internships at Argo AI and RE2 Robotics.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Brown Univeristy",
      subtitle: "Ph.D. in Computer Science",
      logo_path: "brown_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - Now",
      descriptions: ["advised by Prof Stefanie Tellex"],
      // website_link: "http://iiitk.ac.in",
    },
    {
      title: "Carnegie Mellon University",
      subtitle: "B.S. in Mechanical Engineering, Additional Major in Robotics",
      logo_path: "CMU_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2023",
      descriptions: [],
      // descriptions: [
      //   "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
      //   "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
      //   "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      // ],
      // website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page (currently hidden from navigation)
const experience = {
  title: "Experience",
  subtitle: "Research, Internships and Mentorship",
  description:
    "I am a Ph.D. candidate at Brown University's Human to Robot Lab (H2R), working on multimodal human-robot interaction, embodied AI, and POMDP-based decision-making. Before Brown, I studied Mechanical Engineering and Robotics at Carnegie Mellon University and interned in the autonomous vehicle and defense robotics industries.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research",
      work: true,
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Human to Robot Lab (H2R), Brown University",
          company_url: "https://h2r.cs.brown.edu/",
          logo_path: "brown_logo.png",
          duration: "2023 - Present",
          location: "Providence, RI, USA",
          description:
            "Ph.D. research advised by Prof. Stefanie Tellex on multimodal human-robot interaction and object search: LEGS-POMDP (HRI 2026), FetchHound (ICRA 2026 Learning-HRI workshop), UMBRA multi-robot shadow art (NEA-supported), UniTac whole-robot touch sensing (RSS 2025 HRCM workshop), and Find it Like a Dog (CogSci 2024).",
          color: "#4c2b91",
        },
        {
          title: "Undergraduate Researcher, Social Navigation & Simulation",
          company: "Carnegie Mellon University",
          company_url: "https://www.cmu.edu/",
          logo_path: "CMU_logo.png",
          duration: "2021 - 2023",
          location: "Pittsburgh, PA, USA",
          description:
            "Worked with Profs. Henny Admoni and Aaron Steinfeld on SEAN 2.0: built interactive social-navigation scenarios in ROS/Unity with real-world pedestrian datasets, and designed dynamic environments and legibility metrics for evaluating robot behavior.",
          color: "#a6192e",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Integration & Testing Engineer Intern",
          company: "Argo AI",
          company_url: "https://en.wikipedia.org/wiki/Argo_AI",
          logo_path: "argo_ai_logo.png",
          duration: "Summer 2022",
          location: "Pittsburgh, PA, USA",
          description:
            "Designed, conducted, and analyzed Lidar Probability of Detection tests to evaluate lidar performance over time, plus testing for radar and camera sensors, the calibration system, and the sensor-cleaning system.",
          color: "#0071C5",
        },
        {
          title: "Mechanical Engineering Intern",
          company: "RE2 Robotics",
          company_url: "https://www.sarcos.com/",
          logo_path: "re2_logo.png",
          duration: "Summer 2020",
          location: "Pittsburgh, PA, USA",
          description:
            "Compiled the initial release of the user manuals; inspected and assembled prototype robotic-arm joints for testing.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Mentorship & Outreach",
      experiences: [
        {
          title: "Research Mentor",
          company: "Veritas AI Fellowship",
          company_url: "https://www.veritasai.com/",
          logo_path: "veritas_logo.png",
          duration: "2023 - Present",
          location: "Remote",
          description:
            "Mentoring high school students through AI research projects, from problem formulation to final write-ups.",
          color: "#181717",
        },
        {
          title: "Technical Mentor",
          company: "MindMatters",
          company_url: "https://ivyyyy24381.github.io/",
          logo_path: "mindmatters_logo.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Technical mentor for an LLM-powered teen wellness support platform.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Research and creative systems I have been building recently — from robot learning and human-robot interaction to multi-robot performance art.",
  avatar_image_path: "projects_image.svg",
};

const recentNews = [
  {
    date: "June 2026",
    text:
      "Preliminary results of FetchHound — learning a dog-like social attention policy for human-robot object search — were presented at the ICRA 2026 Learning-HRI workshop.",
    links: [
      { label: "Website", url: "https://gregjones11235.github.io/fetchhound/" },
    ],
  },
  {
    date: "March 2026",
    text:
      "Our paper LEGS-POMDP is accepted at HRI 2026! We present a framework for multimodal object search under partial observability — combining language, gesture, and visual perception with VLMs.",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2603.04705" },
      { label: "Website", url: "https://ivyyyy24381.github.io/LEGS/" },
      { label: "Code", url: "https://github.com/h2r/LEGS-POMDP" },
      {
        label: "Brown News",
        url: "https://www.brown.edu/news/2026-03-13/robot-fetch",
      },
    ],
  },
];

const publicationsHeader = {
  title: "Selected Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "choreographic-improvisational",
      name:
        "Choreographic and Improvisational Approaches To Interrogating Robotic Systems",
      createdAt: "2026-03-11T00:00:00Z",
      description:
        "Proceedings of the 10th International Conference on Movement and Computing (MOCO '26), Montpellier, France, pp. 1-9",
      url: "https://dl.acm.org/doi/10.1145/3802842.3802876",
    },
    {
      id: "legs-pomdp",
      name:
        "LEGS-POMDP: Language and Gesture-Guided Object Search in Partially Observable Environments",
      createdAt: "2026-03-03T00:00:00Z",
      description:
        "To appear in ACM/IEEE International Conference on Human-Robot Interaction (HRI) 2026",
      url: "https://ivyyyy24381.github.io/LEGS/",
      arxivUrl: "https://arxiv.org/abs/2603.04705",
    },
    {
      id: "unitac",
      name: "UniTac: Whole-Robot Touch Sensing Without Tactile Sensors",
      createdAt: "2025-07-10T00:00:00Z",
      description: "arXiv preprint arXiv:2507.07980",
      url: "https://arxiv.org/abs/2507.07980",
    },
    {
      id: "find-it-like-a-dog",
      name: "Find it like a dog: Using Gesture to Improve Object Search",
      createdAt: "2024-07-01T00:00:00Z",
      description:
        "Proceedings of the Annual Meeting of the Cognitive Science Society, 46",
      url: "https://escholarship.org/uc/item/0nk6w9fd",
    },
    {
      id: "fungal-morphology-simulation",
      name:
        "Exploring Fungal Morphology Simulation and Dynamic Light Containment from a Graphics Generation Perspective",
      createdAt: "2024-09-08T00:00:00Z",
      description: "SIGGRAPH Asia 2024 Art Papers",
      url: "https://arxiv.org/abs/2409.05171",
    },
    {
      id: "ultrahigh-evaporative-heat-transfer",
      name:
        "Ultrahigh Evaporative Heat Transfer Measured Locally in Submicron Water Films",
      createdAt: "2022-12-26T00:00:00Z",
      description: "Scientific Reports, 12(1):22353",
      url: "https://www.nature.com/articles/s41598-022-26182-2",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_avatar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Research",
    subtitle:
      "Read more about my research on Google Scholar, or reach out for collaborations at the intersection of robotics, cognition, and art.",
    link: "https://scholar.google.com/citations?user=5uK35CcAAAAJ&hl=en",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  competitiveSites,
  certifications,
  experience,
  recentNews,
  publicationsHeader,
  publications,
  projectsHeader,
  contactPageData,
};
