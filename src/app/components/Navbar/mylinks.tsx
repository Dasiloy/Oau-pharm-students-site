export const links = [
    {
      name: "About Us",

      submenu: true,
      sublinks:[
        {
          Head: "about us",
          sublink: [
            { name: "PANS OAU Structure", link: "/About-us/Structure", segment :"Structure" },
            { name: "Leadership", link:  "/About-us/Leadership" , segment :"Leadership"},
            { name: "Lecturers/Advisers", link:  "/About-us/advisers" , segment :"advisers" },
          ],
        },
      ],
    },
    {
      name: "Activities",

      submenu: true,
      sublinks:[
        {
          Head: "activities",
          sublink: [
            { name: "Academic Activities", link: "/" , segment :"/" },
            { name: "Award and Recongnition", link: "/", segment :"/"  },
            { name: "Debate And Competiton", link: "/", segment :"/"  },
            { name: "Health Outreaches", link: "/", segment :"/"  },
            { name: "Sport Activities", link: "/", segment :"/"  },
          ],
        },
      ],
    },
    {
      name: "Projects",

      submenu: true,
      sublinks:[
        {
          Head: "projects",
          sublink: [
            { name: "PANSITE Project", link: "/projects/Pansproject", segment :"Pansproject" },
            { name: "Feed A pansite", link: "/projects/Feedapansite", segment :"Feedapansite"},
            { name: "Suggestion Box", link: "/projects/Suggestions", segment :"Suggestions"},
          ],
        },
      ]
    },
  ];