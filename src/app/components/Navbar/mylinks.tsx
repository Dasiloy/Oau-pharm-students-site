export const links = [
    {
      name: "About Us",
      route:"about-us",
      submenu: true,
      sublinks:[
        {
          Head: "about us",
          sublink: [
            { name: "PANS OAU Structure", link: "/" },
            { name: "Leadership", link: "/" },
            { name: "Lecturers/Advisers", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Activities",
      route: "activities",
      submenu: true,
      sublinks:[
        {
          Head: "activities",
          sublink: [
            { name: "Academic Activities", link: "/" },
            { name: "Award and Recongnition", link: "/" },
            { name: "Debate And Competiton", link: "/" },
            { name: "Health Outreaches", link: "/" },
            { name: "Sport Activities", link: "/" },
          ],
        },
      ],
    },

    {
      name: "Articles",
      route : "articles",
      submenu: true,
      sublinks:[
        {
          Head: "articles",
          sublink: [
            { name: "PANS National", link: "/" },
            { name: "Pans Week", link: "/" },
            { name: "Pans Politics", link: "/" },
            { name: "Social Events", link: "/" },
            { name: "Event Varities", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Projects",
      route: "projects",
      submenu: true,
      sublinks:[
        {
          Head: "projects",
          sublink: [
            { name: "PANSITE Project", link: "/" },
            { name: "Feed A pansite", link: "/" },
            { name: "Suggestion Box", link: "/" },
          ],
        },
      ]
    },
  ];