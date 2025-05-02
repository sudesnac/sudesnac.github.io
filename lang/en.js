// ---------- Navbar titles
const enNavbarData = {
  title: "Sudesna Chakraborty",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "CV",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "Sudesna Chakraborty",
  jobTitle: "Aoyama Gakuin University",
  home_title: "About me",
  home_content: `
  <div>
    <p> 
    </p>
  </div>
  `,
};


// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",
  type_one_items: [
    {
      title: "Multimodal gradients of basal forebrain connectivity across the neocortex.",
      writers: ["Chakraborty, S.", "Haast, R.A.M.", "Onuska, K.M.", "et al."],
      date: "2024",
      journal: "Nature Communications, 15",
      link: "https://doi.org/10.1038/s41467-024-53148-x",
      github: "https://github.com/sudesnac/HumanBF-Connectivity",
      abstract: "",
    },
    {
      title: "Focal acetylcholinergic modulation of the human midcingulo-insular network during attention: Meta-analytic neuroimaging and behavioral evidence.",
      writers: ["Chakraborty, S.", "Lee, S. K.", "Arnold, S. M.", "Haast, R. A. M.", "Khan, A. R.", "& Schmitz, T. W."],
      date: "2023",
      journal: "Journal of Neurochemistry",
      link: "https://doi.org/10.1111/jnc.15990",
      github: "",
      abstract: "",
    },
    // Add other journal papers similarly...
  ],

  type_two_title: "Conference Papers",
  type_two_items: [
    {
      title: "Household Task Planning with Multi-Objects State and Relationship Using Large Language Models Based Preconditions Verification.",
      writers: ["Aoyama, J.", "Chakraborty, S.", "Morita, T.", "Fukuda, K."],
      date: "2025",
      journal: "Proceedings of the 2025 International Conference on Artificial Intelligence",
      link: "https://www.researchgate.net/publication/123456789_Household_Task_Planning",
      github: "",
      abstract: "",
    },
    {
      title: "Entity Linking for Wikidata using Large Language Models and Wikipedia Links.",
      writers: ["Mitsuji, F.", "Chakraborty, S.", "Morita, T.", "Fukuda, K."],
      date: "2024",
      journal: "Proceedings of the 2024 Conference on Computational Linguistics",
      link: "https://www.researchgate.net/publication/987654321_Entity_Linking_for_Wikidata",
      github: "",
      abstract: "",
    },
    // Add other conference papers similarly...
  ],

  type_three_title: "Conference Presentations",
  type_three_items: [
    {
      title: "Multimodal gradients of the human basal forebrain.",
      writers: ["Chakraborty, S.", "Haast, R. A. M.", "Khan, A. R.", "& Schmitz, T. W."],
      date: "2023, July",
      journal: "Organization for Human Brain Mapping Annual Meeting, Montreal, Canada.",
      link: "",
      github: "",
      abstract: "",
    },
    // Add other conference presentations similarly...
  ],

  type_four_title: "PhD Thesis",
  type_four_items: [
    {
      title: "Multimodal connectivity of the human basal forebrain.",
      writers: ["Chakraborty, S."],
      date: "2023",
      journal: "Doctoral dissertation, Western University.",
      link: "https://ir.lib.uwo.ca/etd/9476/",
      github: "",
      abstract: "",
    },
  ],

  type_five_title: "Other",
  type_five_items: [
    {
      title: "Multimodal connectivity gradients of the human basal forebrain.",
      writers: ["Chakraborty, S.", "Haast, R. A. M.", "Khan, A. R.", "& Schmitz, T. W."],
      date: "2023, March",
      journal: "22nd Annual Imaging Network Ontario Symposium, London, Ontario, Canada.",
      link: "",
      github: "",
      abstract: "",
    },
    // Add other items similarly...
  ],
};


// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research .
        <img src='../files/images/research.png' />
        </p>
        <br />
        <h4 style="font-size: 1.1rem "> Awards and Funding </h4>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Curriculum Vitae",

  education: [
    {
      degree: "PhD in Neuroscience",
      institution: "Schulich School of Medicine and Dentistry, Western University (Canada)",
      duration: "Sep 2017 – Aug 2023",
      thesisTitle: "Multimodal connectivity of the human basal forebrain",
      supervisors: ["Dr. Ali Khan", "Dr. Taylor Schmitz"],
      link: "https://ir.lib.uwo.ca/etd/9476/",
    },
    {
      degree: "MS in Applied Cognition and Neuroscience",
      institution: "University of Texas at Dallas (USA)",
      duration: "Aug 2012 – Dec 2013",
    },
    {
      degree: "BS in Neuroscience (Minor: Chemistry)",
      institution: "University of Pittsburgh (USA)",
      duration: "Aug 2005 – Apr 2009",
    },
  ],

  recognitions: [
    {
      title: "BMI International Graduate Student Scholarship",
      description: "$15,000 annually for 4 years, University of Western Ontario",
    },
    {
      title: "CAIR Aids for young scientists to present at international conferences",
      description: "Center for Advanced Information technology Research, Aoyama Gakuin University",
    },
  ],

  grants: [
    {
      title: "KAKENHI Grant-in-Aid for Young Scientists",
      description: "Japan Society for the Promotion of Science, ¥4,810,000",
      duration: "2025 – 2028",
      link: "https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-25K18575/"
    },
  ],

  items: [
    {
      title: "Assistant Professor",
      company: "Aoyama Gakuin University, College of Science and Engineering",
      startData: "April 2024",
      endDate: null,
      location: "Japan",
      abstract: "",
      achievements: [],
    },
    {
      title: "Associated Research Staff (Honorary Position)",
      company: "Robarts Research Institute, Western University",
      startData: "Sep 2023",
      endDate: null,
      location: "Canada",
      abstract: "",
      achievements: [],
    },
    {
      title: "PhD Researcher",
      company: "Western University",
      startData: "May 2019",
      endDate: "Aug 2023",
      location: "Canada",
      abstract: "Multimodal connectivity of the human basal forebrain",
      achievements: ["Supervised by Dr. Ali Khan and Dr. Taylor Schmitz"],
    },
    {
      title: "Teaching Assistant",
      company: "Western University",
      startData: "Aug 2018",
      endDate: "Dec 2018",
      location: "Canada",
      abstract: "Applied Psychology (Psych 2035)",
      achievements: ["Office hours, student support, exam review preparation"],
    },
    {
      title: "Teaching Assistant",
      company: "Western University",
      startData: "Aug 2017",
      endDate: "Apr 2018",
      location: "Canada",
      abstract: "Introduction to Psychology (Psych 1000)",
      achievements: ["Office hours, grading, review sessions"],
    },
    {
      title: "PhD Researcher",
      company: "Western University",
      startData: "Aug 2017",
      endDate: "Apr 2019",
      location: "Canada",
      abstract: "Hippocampus plasticity in treatment of MDD with ECT",
      achievements: ["Supervised by Dr. Stefan Kohler and Dr. Ali Khan"],
    },
    {
      title: "Senior Consultant",
      company: "NTT DATA Institute of Management Consulting, Inc.",
      startData: "Apr 2016",
      endDate: "Jun 2017",
      location: "Japan",
      abstract: "Advised on neuroscience-informed product development",
      achievements: [],
    },
    {
      title: "Researcher",
      company: "Araya Brain Imaging Inc.",
      startData: "Aug 2015",
      endDate: "Mar 2016",
      location: "Japan",
      abstract: "MRI and DTI processing using MATLAB, FSL, FreeSurfer, SPM12",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "Northwestern University",
      startData: "Jan 2015",
      endDate: "Jul 2015",
      location: "USA",
      abstract: "Structural MRI for PPA and SuperAging (FreeSurfer, SPM8)",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "University of Texas at Dallas",
      startData: "Aug 2013",
      endDate: "Dec 2014",
      location: "USA",
      abstract: "DTI and structural MRI for aging studies",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "Chiba University",
      startData: "Jun 2011",
      endDate: "Jul 2012",
      location: "Japan",
      abstract: "fMRI studies on memory, anxiety, and mental rotation",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "National Institute of Radiological Science",
      startData: "Dec 2010",
      endDate: "Mar 2011",
      location: "Japan",
      abstract: "7T MRI operations for animal models",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "University of Pittsburgh",
      startData: "Sep 2008",
      endDate: "May 2010",
      location: "USA",
      abstract: "fMRI and behavioral studies on working memory and reading",
      achievements: [],
    },
    {
      title: "Volunteer Translator",
      company: "IEEE Japan Council Women in Engineering",
      startData: "May 2009",
      endDate: "May 2011",
      location: "Japan",
      abstract: "Translated English to Japanese for technical and non-technical documents",
      achievements: [],
    },
    {
      title: "Neurology Intern",
      company: "Iwate Medical University",
      startData: "May 2008",
      endDate: "Aug 2008",
      location: "Japan",
      abstract: "MRI and psychiatric evaluations for Alzheimer’s and Parkinson’s patients",
      achievements: [],
    },
  
    {
      title: "Library Assistant",
      company: "University of Pittsburgh, East Asian Library",
      startData: "Jun 2007",
      endDate: "Apr 2008",
      location: "USA",
      abstract: "Catalogued Japanese books and magazines",
      achievements: [],
    },
  ],
};
