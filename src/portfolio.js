/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Splash"; // Rename to your file name for custom animation
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { 
  SiLaravel, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiNpm, 
  SiMysql, 
  SiPhp,
  SiGit,
  SiInertia,
  SiTailwindcss,
  SiComposer,
  SiJquery,
  SiCpanel
} from 'react-icons/si';  // Note: changed from simple-icons-react to react-icons/si

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chasan Ali",
  title: "Hi all, I'm Chasan Ali",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Laravel / Inertiajs / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chasanalim",
  linkedin: "https://www.linkedin.com/in/chasanss/",
  gmail: "chasanalim07@gmail.com",
  // gitlab: "https://gitlab.com/chasanalim",
  // facebook: "https://www.facebook.com/sanskuy21",
  // medium: "https://medium.com/@chasanalim",
  instagram: "https://www.instagram.com/chasanss/",
  telegram: "https://www.t.me/chasanss",
  discord: "https://discord.gg/2BF8ekwU6F",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle: "Passionate Full Stack Developer eager to explore and master every tech stack.",
  skills: [
    emoji(
      "⚡ Building responsive, and beautiful front-end experiences for the modern web."
    ),
    emoji(
      "⚡ Building powerful Information and Management Systems for your services."
    ),
    emoji(
      "⚡ Analyzing and designing efficient application business processes."
    )
  ],



  softwareSkills: [
    {
      skillName: "Laravel",
      icon: <SiLaravel />
    },
    {
      skillName: "PHP",
      icon: <SiPhp />
    },
    {
      skillName: "HTML5",
      icon: <SiHtml5 />
    },
    {
      skillName: "CSS3", 
      icon: <SiCss3 />
    },
    {
      skillName: "Sass",
      icon: <SiSass />
    },
    {
      skillName: "Bootstrap",
      icon: <SiBootstrap />
    },
    {
      skillName: "Tailwind",
      icon: <SiTailwindcss />
    },
    {
      skillName: "JavaScript",
      icon: <SiJavascript />
    },
    {
      skillName: "Reactjs",
      icon: <SiReact />
    },
    {
      skillName: "Inertiajs",
      icon: <SiInertia />
    },
    {
      skillName: "Jquery",
      icon: <SiJquery />
    },
    {
      skillName: "Node.js",
      icon: <SiNodedotjs />
    },
    {
      skillName: "NPM",
      icon: <SiNpm />
    },
    // {
    //   skillName: "Composer",
    //   icon: <SiComposer />
    // },
    {
      skillName: "Git",
      icon: <SiGit />
    },
    {
      skillName: "MySQL",
      icon: <SiMysql />
    },
    {
      skillName: "Cpanel",
      icon: <SiCpanel />
    }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "State Senior High School 1 Gemolong",
    //   logo: require("./assets/images/gemolong.jpg"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2012 - April 2015",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    {
      schoolName: "Brawijaya University",
      logo: require("./assets/images/ub.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2015 - February 2020",
      desc: "Majoring in Informatics Engineering, specifically focusing on Software Engineering.",
      descBullets: [
        "Researching and developing a web-based event management application for the Indonesian Bonsai Community",
      ],
      graduationLink:"https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/-Xd9FXU8PEFRqSx5lmjEDAharCOYNr143R5Reopv5g_9U2YD_0NURnRacXxO0UPbaI48_w==",
      journalLink: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/6833"
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Analyst ",
      company: "Dinas Komunikasi dan Informatika",
      companylogo: require("./assets/images/kominfo.png"),
      date: "May 2024 – Present",
      desc: "Designing and analyzing the business processes of all applications developed by the Department of Communication and Informatics, while also contributing to the implementation and coding of several systems, including the following:",
      descBullets: [
        "PPID (Pejabat Pengelola Informasi dan Dokumentasi) application for public information management and documentation.",
        "SIAPMBAK (Sistem Informasi Antrian Pelayanan Masyarakat Laboratorium Kesehatan Daerah) for managing public service queues at the Regional Health Laboratory.",
        "SIE (Sistem Informasi Eksekutif) for monitoring and reporting the performance of regional government agencies.",
        "Banmod dan Pelatihan application for managing training and certification programs for civil servants in the region.",
        "etc."
      ]
    },
    {
      role: "Software Engineer",
      company: "RSU BANYUMANIK 2 SEMARANG",
      companylogo: require("./assets/images/rs.png"),
      date: "November 2020 – April 2024",
      desc: "Developing the Khanza Hospital Information System (SIMRS) for Electronic Medical Record (EMR) management using Java Swing in NetBeans IDE, integrated with multiple healthcare institution applications.",
      descBullets: [
        "Integrated with BPJS Kesehatan systems, including VClaim, Mobile JKN, and Online Queue services to streamline patient administration and health insurance processes.",
        "Connected with Ministry of Health platforms such as SIRS Online and Satu Sehat to support standardized hospital reporting and national health data synchronization.  "
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Monster Group.",
      companylogo: require("./assets/images/monster.jpg"),
      date: "September 2025 – Oktober 2025",
      desc: "Creating a modern web application that highlights front-end development skills through the use of Vue.js.",
      descBullets: [
        "Designed and built the front-end of an employee performance evaluation system for corporate use.",
      ]
      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ppid.png"),
      projectName: "PPID",
      projectDesc: "Pejabat Pengelola Informasi dan Dokumentasi",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://ppid.kedirikota.go.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dinkes.jpg"),
      projectName: "SIAPMBAK",
      projectDesc: "Sistem Informasi Antrian Pelayanan Masyarakat Laboratorium Kesehatan Daerah",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://siapmbak.kedirikota.go.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kominfo.png"),
      projectName: "SIE",
      projectDesc: "Sistem Informasi Eksekutif",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://sie.kedirikota.go.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rs.png"),
      projectName: "RSU BANYUMANIK 2",
      projectDesc: "Website Profile for Hospital and online reservation",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://rsubanyumanik2.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/disperdagin.png"),
      projectName: "Banmod dan Pelatihan",
      projectDesc: "An application for registering government training programs and business capital assistance.",
      footerLink: [
        {
          name: "Still In Development",
          // url: "-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/yaski.png"),
      projectName: "SIMRS Khanza Costum",
      projectDesc: "Developed an open-source electronic medical record (EMR) system that was customized and enhanced internally to support the hospital’s operational requirements.",
      footerLink: [
        {
          name: "Desktop Version",
          // url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
