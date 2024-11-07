function getServicePeriod(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export const jobs = [
  {
    id: 1,
    startDate: "01/11/2016",
    endDate: "01/01/2020",
    data: {
      company: "British Software Development",
      position: "Junior Web Developer",
      servicePeriod: `${getServicePeriod("01/11/2016", "01/01/20")} days`,
    },
    // why: "Working in an agency envrionment was the best place to grow my skillset",
    // what: "I was responsible for building and maintaining websites for clients",
    // contributions: [
    //   "Built a custom CMS for a client",
    //   "Built a custom CRM for a client",
    //   "Built a custom E-commerce platform for a client",
    // ],
    // technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Vue.js"],
    // takeaway:
    //   "I learned a lot about how to work with clients and how to manage my time effectively",
    colors: {
      primary: "#354A84",
      secondary: "#FFFFFF",
    },
    logo: "logo-british.png",
  },
  {
    id: 2,
    startDate: "01/11/2018",
    endDate: "01/01/2020",
    data: {
      company: "Pulselive",
      position: "Frontend Developer",
      servicePeriod: `${getServicePeriod("01/11/2018", "01/01/2020")} days`,
    },
    // why: "Working in an agency envrionment was the best place to grow my skillset",
    // what: "I was responsible for building and maintaining websites for clients",
    // contributions: [
    //   "Built a custom CMS for a client",
    //   "Built a custom CRM for a client",
    //   "Built a custom E-commerce platform for a client",
    // ],
    // technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Vue.js"],
    // takeaway:
    //   "I learned a lot about how to work with clients and how to manage my time effectively",
    colors: {
      primary: "#0059FF",
      secondary: "#002F87",
    },
    logo: "logo-pulselive.png",
  },
  {
    id: 3,
    startDate: "01/01/2020",
    endDate: "01/08/2021",
    data: {
      company: "Luxdeco",
      position: "Senior Frontend Developer",
      servicePeriod: `${getServicePeriod("01/01/2020", "01/08/2021")} days`,
    },

    // why: "Working in an agency envrionment was the best place to grow my skillset",
    // what: "I was responsible for building and maintaining websites for clients",
    // contributions: [
    //   "Built a custom CMS for a client",
    //   "Built a custom CRM for a client",
    //   "Built a custom E-commerce platform for a client",
    // ],
    // technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Vue.js"],
    // takeaway:
    //   "I learned a lot about how to work with clients and how to manage my time effectively",
    colors: {
      primary: "#030406",
      secondary: "#FFFFFF",
    },
    logo: "logo-luxdeco.png",
  },
  {
    id: 4,
    startDate: "01/03/2022",
    endDate: "01/02/2024",
    data: {
      company: "Mindful Chef",
      position: "Senior Frontend Engineer",
      servicePeriod: `${getServicePeriod("01/03/2022", "01/02/2024")} days`,
    },
    // why: "Working in an agency envrionment was the best place to grow my skillset",
    // what: "I was responsible for building and maintaining websites for clients",
    // contributions: [
    //   "Built a custom CMS for a client",
    //   "Built a custom CRM for a client",
    //   "Built a custom E-commerce platform for a client",
    // ],
    // technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Vue.js"],
    // takeaway:
    //   "I learned a lot about how to work with clients and how to manage my time effectively",
    colors: {
      primary: "#392D6E",
      secondary: "#FDF9EE",
    },
    logo: "logo-mc.png",
  },
];
