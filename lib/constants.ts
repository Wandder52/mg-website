export const BRAND = {
  logo: {
    src: "/images/mega_glass_logo.png",
    alt: "Mega Glass",
  },
} as const;

export const BRAND_COLORS = {
  yellow: "#FDB913",
  teal: "#4A9B9B",
  darkTeal: "#2C7A7B",
} as const;

export const HERO_CONTENT = {
  title: "CUSTOM GLASS & GLAZING SOLUTIONS FOR COMMERCIAL PROJECTS",
  subtitle:
    "Commercial glass solutions built on decades of expertise and a commitment to excellence.",
  image: {
    src: "/images/hero/hero_background_building.jpg",
    alt: "Modern commercial glass building showcasing Mega Glass projects",
  },
} as const;

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  // { label: 'FAQ', href: '/#faq' },
  { label: "Contact", href: "/#contact" },
] as const;

export const BRANDS = [
  {
    name: "Icopal",
    logoSrc: "/images/brands/brand_icopal.png",
    alt: "Icopal - Roofing Solutions Partner",
  },
  {
    name: "Decran",
    logoSrc: "/images/brands/brand_decran.png",
    alt: "Decran - Building Materials Partner",
  },
  {
    name: "Mastersystems",
    logoSrc: "/images/brands/brand_mastersystems.png",
    alt: "Mastersystems - Construction Partner",
  },
  {
    name: "Velux",
    logoSrc: "/images/brands/brand_velux.png",
    alt: "Velux - Skylight Solutions Partner",
  },
] as const;

export const ABOUT_CONTENT = {
  eyebrow: "OVER MEGA GLASS",
  heading: "Who We Are?",
  paragraphs: [
    "Mega Glass LLC is a Vienna, Virginia-based glazing contractor specializing in the design, supply, and installation of commercial glass and aluminum systems. With over 20 years of combined expertise in glass and facade work, we serve general contractors and developers across Virginia, Maryland, Washington DC, West Virginia, Pennsylvania, and Florida. We offer full-service capabilities—from CAD drawings and structural engineering with PE stamps to expert installation by our qualified in-house team.",
    "Our product range includes aluminum storefronts, curtain walls, frameless glass doors, fire-rated and ballistic glass, glass railings, and decorative panels. Founded by industry veterans with decades of international experience in glazing and business leadership, Mega Glass is built on precision, reliability, and a commitment to delivering projects on time and to spec.",
    "We specialize in the design, supply, and installation of aluminum storefronts, curtain walls, frameless doors, and specialty glass systems for commercial and government projects. With over 20 years of expertise and a team of certified professionals, we partner with general contractors across the Mid-Atlantic and Florida to deliver precision glazing—on time and to the highest standards.",
  ],
  experience: {
    years: 25,
    label: "YEARS EXPERIENCE",
  },
  cta: {
    text: "Learn More",
    href: "/about",
  },
  image: {
    src: "/images/about/about_construction_worker.jpg",
    alt: "Professional glass installation specialist working on commercial building facade",
  },
} as const;

export const PROJECTS_CONTENT = {
  eyebrow: "WHAT WE DO",
  heading: "Our Projects",
} as const;

export const FALLBACK_PROJECT_IMAGE = {
  src: "/images/placeholder-building-image.png",
  alt: "Project placeholder image",
} as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Silver Diner - Loundon Crossroads",
    location: "44050 Pointe Plaza, Chantilly, VA 20152",
    scope:
      "This project involved the supply and installation of YKK exterior aluminum windows alongside the installation of various glass doors and associated architectural hardware",
    images: [
      {
        image: {
          src: "/images/projects/project-1-img-1.png",
          alt: "Silver Diner - Loundon Crossroads",
        },
      },
    ],
    href: "/projects/1",
  },
  {
    id: 2,
    title: "Guapos – Merrifield",
    location: "3052 Gatehouse Plaza, Falls Church, VA 22031",
    scope:
      "The team supplied and installed YKK AP aluminum storefront windows and doors. They also managed the full design, supply, and installation of a custom Honey Onyx backlit bar wall.",
    images: [
      {
        image: {
          src: "/images/projects/project-2-img-1.jpg",
          alt: "Guapos – Merrifield",
        },
      },
      {
        image: {
          src: "/images/projects/project-2-img-2.jpg",
          alt: "Guapos – Merrifield",
        },
      },
      {
        image: {
          src: "/images/projects/project-2-img-3.png",
          alt: "Guapos – Merrifield",
        },
      },
    ],
    href: "/projects/2",
  },
  {
    id: 3,
    title: "Keller Williams – Tysons",
    location: "1775 Tysons Blvd., Suite 1450, Tysons, VA 22102",
    scope:
      "The project scope included the supply and installation of Dorma sliding doors and office fronts to create modern workspaces. Additionally, white glass panels were supplied and installed as part of the interior design.",
    images: [
      {
        image: {
          src: "/images/projects/project-3-img-1.jpg",
          alt: "Keller Williams – Tysons",
        },
      },
      {
        image: {
          src: "/images/projects/project-3-img-2.png",
          alt: "Keller Williams – Tysons",
        },
      },
      {
        image: {
          src: "/images/projects/project-2-img-3.png",
          alt: "Keller Williams – Tysons",
        },
      },
    ],
    href: "/projects/3",
  },
  {
    id: 4,
    title: "GDIT (General Dynamics) – Springfield",
    location: "7770 Backlick Rd, Springfield, VA 22150",
    scope: `The project featured the supply and installation of frameless CRL doors and curtain walls for the facility's interior. The scope also covered the installation of glass panels, mirrors, and metal panels.`,
    images: [
      {
        image: {
          src: "/images/projects/project-4-img-1.jpg",
          alt: "GDIT (General Dynamics) – Springfield",
        },
      },
      {
        image: {
          src: "/images/projects/project-4-img-2.jpg",
          alt: "GDIT (General Dynamics) – Springfield",
        },
      },
      {
        image: {
          src: "/images/projects/project-4-img-3.jpg",
          alt: "GDIT (General Dynamics) – Springfield",
        },
      },
    ],
    href: "/projects/4",
  },
  {
    id: 5,
    title: "University of Florida Honors Village",
    location: "1512 Museum Rd, Gainesville, FL 32612",
    scope:
      "For this new undergraduate residential complex, the project required the supply and installation of various interior glass systems and protective guardrails.",
    images: [],
    href: "/projects/5",
  },
  {
    id: 6,
    title: `St Joseph's Nursing Home`,
    location: "331 South Seton Avenue, Emmitsburg, MD 21727",
    scope:
      "During the renovation of the C-wing, the team focused on the supply and installation of SAFTI FIRST fire-rated doors to enhance life safety.",
    images: [
      {
        image: {
          src: "/images/projects/project-6-img-2.jpg",
          alt: `St Joseph's Nursing Home`,
        },
      },
    ],
    href: "/projects/6",
  },
  {
    id: 7,
    title: "Pinnacle Towers",
    location: "1751 Pinnacle Drive, McLean, VA 22102",
    scope: `This project centered on the high-level supply and installation of aluminum curtain wall elevations for the tower's facade.`,
    images: [
      {
        image: {
          src: "/images/projects/project-7-img-1.jpg",
          alt: `Pinnacle Towers`,
        },
      },
    ],
    href: "/projects/7",
  },
  {
    id: 8,
    title: "Shake Shack Pike 7",
    location: "8361A Leesburg Pike, Vienna, VA 22182",
    scope:
      "The scope included installing external Kawneer Trifab 451 T VersaGlaze and aluminum storefronts with a black anodize finish. Additionally, the team installed exterior doors, vision glass, and LED backlit mirrors.",
    images: [
      {
        image: {
          src: "/images/projects/project-8-img-1.jpg",
          alt: `Shake Shack Pike 7'`,
        },
      },
    ],
    href: "/projects/8",
  },
  {
    id: 9,
    title: "Hen Quarter – Riverpoint",
    location: "2121 1st St SW, Washington, DC 20024",
    scope:
      "This waterfront project involved the supply and installation of exterior aluminum storefronts and curtain walls, plus interior frameless glass doors. It also featured the installation of specialized low-iron windows at the backbar divider wall.",
    images: [
      {
        image: {
          src: "/images/projects/project-9-img-1.jpg",
          alt: `Hen Quarter – Riverpoint`,
        },
      },
    ],
    href: "/projects/9",
  },
  {
    id: 10,
    title: "One Life Fitness – Tenleytown",
    location: "4000 Wisconsin Avenue NW, Washington, DC 20016",
    scope:
      "The work included the supply and installation of YKK AP aluminum storefronts and glass doors with aluminum frames. The project also required the installation of large-scale mirrors throughout the gym facility.",
    images: [
      {
        image: {
          src: "/images/projects/project-10-img-1.png",
          alt: `One Life Fitness – Tenleytown`,
        },
      },
    ],
    href: "/projects/10",
  },
] as const;

export const SECTORS_CONTENT = {
  eyebrow: "WHAT WE BUILD",
  heading: "Our Services",
} as const;

export const SECTORS = [
  {
    id: 1,
    imageSrc: "/images/sectors/sectors_building.png",
    imageAlt: "Retail & Offices",
    title: "Retail & Offices",
    description:
      "We design and install high-performance aluminum storefronts, curtain walls, and frameless glass partitions tailored for professional corporate environments.",
    featured: true,
  },
  {
    id: 2,
    imageSrc: "/images/sectors/sectors_restaurant.png",
    imageAlt: "Restaurants",
    title: "Restaurants",
    description:
      "We provide high-clarity exterior glazing and bespoke interior features, such as backlit onyx walls, to enhance brand identity and dining atmosphere.",
    featured: false,
  },
  {
    id: 3,
    imageSrc: "/images/sectors/sectors_hospital_school.png",
    imageAlt: "Educational & Hospitality",
    title: "Educational & Hospitality",
    description:
      "We specialize in safety-critical glazing, including protective glass guardrails and fire-rated door systems, for institutional and healthcare facilities.",
    featured: false,
  },
] as const;

export const STATS = [
  {
    id: 1,
    value: "9+",
    label: "Years Of Experience",
  },
  {
    id: 2,
    value: "24",
    label: "Hours Available",
  },
  {
    id: 3,
    value: "20+",
    label: "Locations",
  },
  {
    id: 4,
    value: "5k",
    label: "Projects",
  },
] as const;

export const LEARN_ABOUT_CONTENT = {
  eyebrow: "ABOUT MEGA GLASS",
  heading: {
    before: "Learn About Our",
    highlight1: "Mega Glass",
    middle: "Custom Glass And Glazing",
    highlight2: "Solutions",
  },
  paragraphs: [
    "Mega Glass brings over two decades of glazing expertise to every commercial project. From aluminum storefronts and curtain walls to specialty fire-rated and ballistic glass, we deliver end-to-end solutions design, supply, and installation tailored to meet the specific demands of your build.",
    "We work directly with general contractors and architects to provide CAD drawings, structural calculations, and PE-stamped engineering. Our in-house team and trusted installers ensure every project is completed with precision, on schedule, and built to last.",
  ],
  bullets: [
    "Full Design-Supply-Install Capabilities",
    "Nationwide Project Support",
    "Headquartered In Virginia",
  ],
  cta: {
    text: "Read More",
    href: "/about",
  },
  image: {
    src: "/images/learn-about/learn_about_building.jpg",
    alt: "Modern glass building facade showcasing architectural glazing",
  },
} as const;

export const CONTACT_CONTENT = {
  eyebrow: "SEND US MESSAGE",
  heading: "Contact Us!",
  description:
    "If you have some questions you can send us a message and we will respond to you as soon as posible.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Full Name",
    emailLabel: "E-Mail",
    emailPlaceholder: "example@gmail.com",
    messageLabel: "Message",
    messagePlaceholder: "Write Message Here",
    submitText: "Send Message",
  },
  image: {
    src: "/images/contact/contact_building.jpg",
    alt: "Modern glass building facade",
  },
} as const;

export const FOOTER_CONTENT = {
  logo: {
    text: "mega glass",
    alt: "Mega Glass Logo",
  },
  socials: [
    /* disabled */
    // {
    //   name: 'Facebook',
    //   href: 'https://facebook.com/megaglass',
    //   icon: 'facebook',
    // },
    // {
    //   name: 'Twitter',
    //   href: 'https://twitter.com/megaglass',
    //   icon: 'twitter',
    // },
    // {
    //   name: 'Instagram',
    //   href: 'https://instagram.com/megaglass',
    //   icon: 'instagram',
    // },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/megaglass",
      icon: "linkedin",
    },
  ],
} as const;
