export const siteConfig = {
  name: "Momentum Lab",
  title: "Professor Jeffrey Ichnowski's Robotics Lab",
  description: "Professor Jeffrey Ichnowski's Robotics Lab",
  accentColor: "#1d4ed8",
  social: {
    // email: "your-email@example.com",
    // linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/jeff_ichnowski",
    github: "https://github.com/momentum-robotics-lab",
  },
  aboutMe:
    "The Momentum Lab at Carnegie Mellon University's Robotics Institute focuses on advancing robotics research through innovative approaches to manipulation, learning, and human-robot interaction. Our research spans soft robotics, computer vision, machine learning, and multi-agent systems, with applications in healthcare, manufacturing, and everyday assistance.",
  skills: ["Computer Vision", "Dexterity", "Bimanual Manipulation", "Deformable Objects", "Soft Robotics", "Dynamic Movement"],
  projects: [
    {
      name: "Soft and Compliant Contact-Rich Hair Manipulation and Care",
      description:
        "Research on soft and compliant contact-rich manipulation for hair care applications, exploring novel approaches to gentle robotic manipulation in personal care scenarios.",
      link: "https://momentum-robotics-lab.github.io/",
      skills: ["Soft Robotics", "Manipulation", "Contact-Rich Control", "Python"],
    },
    {
      name: "Cloth-Splatting: 3D Cloth State Estimation from RGB Supervision",
      description:
        "Novel approach to 3D cloth state estimation using RGB supervision, advancing computer vision techniques for fabric manipulation and understanding.",
      link: "https://momentum-robotics-lab.github.io/",
      skills: ["Computer Vision", "3D Reconstruction", "Deep Learning", "Cloth Manipulation"],
    },
    {
      name: "Work Smarter Not Harder: Simple Imitation Learning with CS-PIBT",
      description:
        "Research demonstrating that simple imitation learning with CS-PIBT outperforms large-scale imitation learning for Multi-Agent Path Finding (MAPF) problems.",
      link: "https://momentum-robotics-lab.github.io/",
      skills: ["Imitation Learning", "Multi-Agent Systems", "Path Planning", "Machine Learning"],
    },
    {
      name: "State-to-Visual DAGGER vs Visual Reinforcement Learning",
      description:
        "Comparative study on when to prefer state-to-visual DAGGER over visual reinforcement learning in robotic applications.",
      link: "https://momentum-robotics-lab.github.io/",
      skills: ["Reinforcement Learning", "Computer Vision", "Robotics", "Deep Learning"],
    },
  ],
  members: {
    principalInvestigator: {
      name: "Jeffrey Ichnowski",
      title: "Assistant Professor at CMU Robotics Institute",
      email: "jichnowobfuscate@cmu.edu",
      website: "https://ichnow.ski/",
      photo: "/photos/jeffrey_ichnowski.jpg", // Placeholder - add actual photo
      education: [
        "B.A. Computer Science and Asian Studies, University of California at Berkeley",
        "Ph.D. Computational Robotics, University of North Carolina at Chapel Hill, 2019"
      ],
      postdoc: "Researcher in RISE lab, University of California at Berkeley, 2019-2022",
      links: {
        googleScholar: "https://scholar.google.com/citations?user=example"
      }
    },
    phdStudents: [
      {
        name: "Hongyi Chen",
        research: "Dexterous Manipulation",
        email: "hongyicobfuscate@andrew.cmu.edu",
        photo: "/photos/hongyi_chen.jpg" // Placeholder - add actual photo
      },
      {
        name: "Bardienus P. Duisterhof",
        research: "Vision foundation models for scalable automation",
        email: "bduisterobfuscate@andrew.cmu.edu",
        photo: "/photos/bardenius_duisterhof.jpg"
      },
      {
        name: "Adam Hung",
        research: "Robotics Research",
        email: "ahungobfuscate@andrew.cmu.edu",
        photo: "/photos/adam_hung.png"
      },
      {
        name: "Yuemin Mao",
        research: "Dynamic Manipulation",
        email: "yueminmobfuscate@andrew.cmu.edu",
        photo: "/photos/yuemin_mao.png"
      },
      {
        name: "Uksang Yoo",
        research: "Dexterous in-hand manipulation",
        email: "uyooobfuscate@andrew.cmu.edu",
        photo: "/photos/uksang_yoo.png"
      }
    ],
    mastersStudents: [
      {
        name: "Arthur Jakobsson",
        research: "ML-based Manipulation of Textiles",
        email: "ajakobssobfuscate@cmu.edu",
        photo: "/photos/arthur_jakobsson.jpg" // Placeholder - add actual photo
      },
      {
        name: "Jeffrey Ke",
        research: "Demonstration learning for deformable object manipulation",
        email: "jke3obfuscate@cs.cmu.edu",
        photo: "/photos/jeffery_ke.jpg"
      }
    ],
    undergraduateStudents: [
      // Currently no undergraduate students listed
    ],
    alumni: [
      {
        name: "Aviral Agrawal",
        degree: "Master Student",
        research: "3D multimodal future with the fusion of 3D representation and Vision Language Models",
        email: "aviral@example.com", // Placeholder
        photo: "/photos/aviral_agrawal.jpg"
      },
      {
        name: "Yatharth Ahuja",
        degree: "Master Student",
        research: "Failure Recovery in Manipulation Tasks",
        email: "yahujaobfuscate@cs.cmu.edu",
        photo: "/photos/yatharth_ahuja.jpg"
      },
      {
        name: "Yunchao Yao",
        degree: "Master Student",
        research: "Learning from demonstrations, Reinforcement learning",
        email: "yunchaoyobfuscate@andrew.cmu.edu",
        photo: "/photos/yunchao_yao.jpg"
      },
      {
        name: "Jan Oberst",
        degree: "Master Student",
        research: "Dense Scene Flow of Deformable Scenes",
        email: "joberstobfuscate@andrew.cmu.edu",
        photo: "/photos/jan_oberst.jpg"
      }
    ]
  },
  education: [
    {
      school: "Stanford University",
      degree: "PhD in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Specialized in Robotics and Artificial Intelligence",
        "Dissertation on Advanced Robotic Manipulation",
        "Published multiple papers in top-tier conferences",
        "Received NSF Graduate Research Fellowship",
      ],
    },
    {
      school: "Carnegie Mellon University",
      degree: "Master of Science in Robotics",
      dateRange: "2012 - 2014",
      achievements: [
        "Focused on robotic manipulation and control",
        "Graduated with distinction",
        "Research assistant in Robotics Institute",
        "Developed novel control algorithms for robotic systems",
      ],
    },
    {
      school: "Massachusetts Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2008 - 2012",
      achievements: [
        "Graduated Magna Cum Laude with 3.9 GPA",
        "Dean's List all semesters",
        "President of Robotics Club",
        "Undergraduate research in computer vision",
      ],
    },
  ],
};
