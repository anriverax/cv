export const skills: SkillItems = {
  frontend: [
    {
      parents: [
        {
          pathAlt: "html5",
          title: "HTML5",
          favorite: true
        }
      ],
      score: 85,
      children: []
    },
    {
      parents: [
        {
          pathAlt: "css3",
          title: "CSS",
          favorite: true
        },
        {
          pathAlt: "sass",
          title: "SASS",
          favorite: true
        }
      ],
      score: 85,
      children: [
        {
          parents: [
            {
              pathAlt: "tailwind",
              title: "TailwindCSS",
              favorite: true
            },
            {
              pathAlt: "bootstrap",
              title: "Bootstrap",
              favorite: false
            },
            {
              pathAlt: "mui",
              title: "Material UI",
              favorite: false
            }
          ],
          score: 85
        }
      ]
    },
    {
      parents: [
        {
          pathAlt: "js",
          title: "Javascript",
          favorite: true
        }
      ],
      score: 85,
      children: [
        {
          parents: [
            {
              pathAlt: "jquery",
              title: "Jquery",
              favorite: false
            },
            {
              pathAlt: "react",
              title: "React",
              favorite: true
            }
          ],
          score: 85
        },
        {
          parents: [
            {
              pathAlt: "ts",
              title: "TypeScript",
              favorite: true
            },
            {
              pathAlt: "next",
              title: "NextJS",
              favorite: true
            }
          ],
          score: 80
        },
        {
          parents: [
            {
              pathAlt: "angular",
              title: "Angular",
              favorite: false
            }
          ],
          score: 40
        }
      ]
    }
  ],
  backend: [
    {
      parents: [
        {
          pathAlt: "node",
          title: "Node",
          favorite: true
        }
      ],
      score: 85,
      children: [
        {
          parents: [
            {
              pathAlt: "nestjs",
              title: "NestJS",
              favorite: true
            }
          ],
          score: 60
        }
      ]
    },
    {
      parents: [
        {
          pathAlt: "c",
          title: "C#",
          favorite: false
        }
      ],
      score: 70,
      children: [
        {
          parents: [
            {
              pathAlt: "asp",
              title: "Asp.net",
              favorite: false
            }
          ],
          score: 65
        }
      ]
    },
    {
      parents: [
        {
          pathAlt: "php",
          title: "Php",
          favorite: false
        }
      ],
      score: 65,
      children: [
        {
          parents: [
            {
              pathAlt: "laravel",
              title: "Laravel",
              favorite: false
            }
          ],
          score: 60
        }
      ]
    }
  ],
  database: [
    {
      parents: [
        {
          pathAlt: "postgresql",
          title: "PostgreSQL",
          favorite: true
        },
        {
          pathAlt: "redis",
          title: "Redis",
          favorite: true
        },
        {
          pathAlt: "mongodb",
          title: "MongoDB",
          favorite: false
        },
        {
          pathAlt: "sql",
          title: "SQL Server",
          favorite: false
        }
      ],
      score: 75
    }
  ],
  cloudService: [
    {
      parents: [
        {
          pathAlt: "aws",
          title: "AWS",
          favorite: true
        },
        {
          pathAlt: "azure",
          title: "Azure",
          favorite: false
        }
      ],
      score: 35
    }
  ]
};

export const training: Training = {
  education: [
    {
      title: "Computer Systems Engineering",
      place: "Catholic University of El Salvador",
      description: [],
      years: "2009 - 2013"
    },
    {
      title: "Accounting Technique",
      place: "Walter T. Deninger National Institute",
      description: [],
      years: "2005 - 2007"
    },
    {
      title: "Elementary school and middle school",
      place: "Presbitero Marino Braspenning college",
      description: [],
      years: "1996 - 2004"
    }
  ],
  work: [
    {
      title: "Full Stack Developer",
      place: "Focus Services – ITO",
      description: [
        "Create an Admin application using Nextjs, TypeScript, TailwindCSS and NodeJS",
        "Create the API to serve data with NodeJS",
        "Support and refactoring of the code of other applications and creation of new functions with ReactJS, TypeScript and Sass"
      ],
      years: "Aug 2021 - Jun 2023"
    },
    {
      title: "Analyst Programmer",
      place: "University Francisco Gavidia",
      description: [
        "Create an Admin application using Jquery, Bootstrap and C# with .NetCore",
        "Develop and maintain mobile app using IONIC framework",
        "Provide support to the different areas of the Academic Registry of Francisco Gavidia University with their different types of procedures and processes.",
        "Refactorization of the code of other applications and build new features using Jquery and C# with asp.net"
      ],
      years: "Jul 2015 - Apr 2007"
    },
    {
      title:
        "Collaborator of the Information and Communication Technologies (TIC) Advisor – Internships",
      place: "Catholic University of El Salvador – Ilobasco Regional Center – CDMYPE",
      description: [
        "Provide advice and support to micro and small businesses on information technologies that can be implemented in business.",
        "Develop and maintain website using Jquery, Bootstrap and Php with laravel"
      ],
      years: "Mar 2014 - Aug 2014"
    }
  ]
};

export const info: Info[] = [
  {
    header: {
      name: "Email",
      id: "envelope-edit",
      d: "M14,11.51h2.42a1,1,0,0,0,.71-.29l4.58-4.58a1,1,0,0,0,0-1.42L19.29,2.8a1,1,0,0,0-1.42,0L13.29,7.38a1.05,1.05,0,0,0-.29.71v2.42A1,1,0,0,0,14,11.51Zm1-3,3.58-3.58,1,1L16,9.51H15Zm6,2a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.9l5.88,5.89a3,3,0,0,0,4.27,0,1,1,0,0,0,0-1.4,1,1,0,0,0-1.43,0,1,1,0,0,1-1.4,0L5.41,7.49H10a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-7A1,1,0,0,0,21,10.49Z"
    },
    link: {
      href: "mailto:anriverax@gmail.com",
      title: "anriverax@gmail.com",
      target: "_parent"
    }
  },
  {
    header: {
      name: "Whatsapp",
      id: "whatsapp",
      d: "M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
    },
    link: {
      href: "https://api.whatsapp.com/send/?phone=50360768296&text=Hello, more information!",
      title: "+503 60768296",
      target: "_blank"
    }
  },
  {
    header: {
      name: "Messager",
      id: "facebook-messenger-alt",
      d: "M11.99121,1.00044a10.61443,10.61443,0,0,0-11,10.70019,10.46132,10.46132,0,0,0,3.41406,7.86524L4.457,21.2563a1.79959,1.79959,0,0,0,1.79883,1.74316,1.81992,1.81992,0,0,0,.72656-.15234l1.9209-.84668a11.89548,11.89548,0,0,0,3.08789.40039,10.61525,10.61525,0,0,0,11.001-10.7002A10.61525,10.61525,0,0,0,11.99121,1.00044Zm0,19.40039a9.86205,9.86205,0,0,1-2.63476-.35059,1.79856,1.79856,0,0,0-1.19629.0918l-1.71387.75586-.04492-1.49316a1.80968,1.80968,0,0,0-.60157-1.27442,8.4876,8.4876,0,0,1-2.80859-6.42969,8.65949,8.65949,0,0,1,9-8.70019,8.70522,8.70522,0,1,1,0,17.40039ZM15.72559,8.5854l-2.3125,2.75488L10.06641,9.28364a.99809.99809,0,0,0-1.28907.21L5.72559,13.13032a.99955.99955,0,1,0,1.53125,1.28516l2.498-2.97559,3.34668,2.05567a.99823.99823,0,0,0,1.28906-.209l2.86622-3.416A.99955.99955,0,1,0,15.72559,8.5854Z"
    },
    link: {
      href: "https://m.me/anibal.rivera.3511",
      title: "@anibal.rivera.3511",
      target: "_blank"
    }
  }
];

export const CVHeader: CvHeader[] = [
  {
    path: "location",
    name: "El Salvasdor, San Salvador"
  },
  {
    path: "whatsapp",
    name: "+503 60768296"
  },
  {
    path: "email",
    name: "anriverax@gmail.com"
  },
  {
    path: "linkedin",
    name: "https://www.linkedin.com/in/anibal-antonio-rivera-480597164"
  }
];

export const Cvskills: string[] = [];
export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password"
}

export enum BtnType {
  BUTTON = "button",
  SUBMIT = "submit"
}

export enum StyleType {
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  CANCEL = "cancel",
  DISABLE = "disable"
}
