export type Category =
  | "Support"
  | "Careers"
  | "Education"
  | "Wellness"
  | "Community"
  | "Business";

export interface Resource {
  id: string;
  title: string;
  category: Category;
  description: string;
  url: string;
  featured?: boolean;
  urgent?: boolean;
  img?: string;
}

export const categories: {
  name: Category;
  icon: string;
  description: string;
  img: string;
}[] = [
  {
    name: "Support",
    icon: "Heart",
    description: "Crisis support, counseling, and safety resources",
    img: "https://images.unsplash.com/photo-1636986905406-758b0e280f49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBzdXBwb3J0fGVufDB8fDB8fHww",
  },
  {
    name: "Careers",
    icon: "Briefcase",
    description: "Job boards, mentorship, and career development",
    img: "https://images.unsplash.com/photo-1659353218140-7f8f9da943fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwY2FyZWVyc3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Education",
    icon: "GraduationCap",
    description: "Scholarships, courses, and learning platforms",
    img: "https://images.unsplash.com/photo-1747836504167-e01b0dea4bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwRWR1Y2F0aW9ufGVufDB8fDB8fHwy",
  },
  {
    name: "Wellness",
    icon: "Leaf",
    description: "Mental health, fitness, and self-care tools",
    img: "https://images.unsplash.com/photo-1687180948607-9ba1dd045e10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBXZWxsbmVzc3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Community",
    icon: "Users",
    description: "Networks, forums, and women-led organizations",
    img: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBDb21tdW5pdHl8ZW58MHx8MHx8fDI%3D",
  },
  {
    name: "Business",
    icon: "Rocket",
    description: "Funding, tools, and startup resources for founders",
    img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBCdXNpbmVzc3xlbnwwfHwwfHx8Mg%3D%3D",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "National Domestic Violence Hotline",
    category: "Support",
    description:
      "24/7 confidential support for individuals affected by domestic violence. Call, chat, or text for help.",
    url: "https://www.thehotline.org",
    featured: true,
    urgent: true,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmZSUyMHdvcmxkfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    title: "Crisis Text Line",
    category: "Support",
    description:
      "Free, 24/7 crisis support via text message. Text HOME to 741741 to connect with a counselor.",
    url: "https://www.crisistextline.org",
    urgent: true,
  },
  {
    id: "3",
    title: "Fairygodboss",
    category: "Careers",
    description:
      "Career community for women with job listings, company reviews, salary insights, and practical workplace advice.",
    url: "https://fairygodboss.com",
    featured: true,
  },
  {
    id: "4",
    title: "Coursera for Women in STEM",
    category: "Education",
    description:
      "Free and affordable online courses from top universities, with scholarships for women in tech and science.",
    url: "https://www.coursera.org",
    featured: true,
  },
  {
    id: "5",
    title: "Headspace for Women",
    category: "Wellness",
    description:
      "Guided meditation and mindfulness exercises tailored for stress, anxiety, and women's health.",
    url: "https://www.headspace.com",
    featured: true,
  },
  {
    id: "6",
    title: "Lean In Circles",
    category: "Community",
    description:
      "Small peer groups that meet regularly to learn and grow together. Join or start a Circle near you.",
    url: "https://leanin.org/circles",
    featured: true,
  },
  {
    id: "7",
    title: "SheEO / Coralus",
    category: "Business",
    description:
      "A radically generous community supporting women-led ventures with funding and mentorship.",
    url: "https://www.coralus.world",
    featured: true,
  },
  {
    id: "8",
    title: "RAINN",
    category: "Support",
    description:
      "The nation's largest anti-sexual violence organization. Free, confidential 24/7 support.",
    url: "https://www.rainn.org",
    urgent: true,
  },
  {
    id: "9",
    title: "Girls Who Code",
    category: "Education",
    description:
      "Programs and clubs working to close the gender gap in tech through free coding education.",
    url: "https://girlswhocode.com",
  },
  {
    id: "10",
    title: "The Women's Network",
    category: "Community",
    description:
      "A networking community connecting women through local chapters, events, mentorship, and professional resources.",
    url: "https://www.thewomens.network",
  },
  {
    id: "11",
    title: "IFundWomen",
    category: "Business",
    description:
      "A funding platform and coaching system built by women, for women entrepreneurs and founders.",
    url: "https://ifundwomen.com",
  },
  {
    id: "12",
    title: "PowerToFly",
    category: "Careers",
    description:
      "Connecting women with companies that value diversity, inclusion, and work-life integration.",
    url: "https://powertofly.com",
  },
];
