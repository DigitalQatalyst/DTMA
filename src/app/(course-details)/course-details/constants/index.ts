interface Course {
  id: number;
  title: string;
  subtitles: Subs[];
}

interface Subs {
  id: number;
  subtitle: string;
  type: string;
}
export const coursecontent: Course[] = [
    {
      id: 1,
      title: "Intro to streamlining procurement processes.",
      subtitles: [
        {
          id: 1,
          subtitle: "Course Intro",
          type: "video",
        },
        {
          id: 3,
          subtitle: "How to streamline procurement.",
          type: "Resources",
        },
        {
          id: 4,
          subtitle: "Inforgraphic",
          type: "Resources",
        },
        {
          id: 5,
          subtitle: "Inforgraphic",
          type: "Quiz",
        },
      ],
    },
    {
      id: 1,
      title: "Intro to Programming.",
      subtitles: [
        {
          id: 1,
          subtitle: "Course Intro",
          type: "video",
        },
        {
          id: 3,
          subtitle: "How to streamline procurement.",
          type: "Resources",
        },
        {
          id: 4,
          subtitle: "Inforgraphic",
          type: "Resources",
        },
        {
          id: 5,
          subtitle: "Inforgraphic",
          type: "Quiz",
        },
      ],
  },
    {
      id: 1,
      title: "Enhancing Supplier Collaboration.",
      subtitles: [
        {
          id: 1,
          subtitle: "Course Intro",
          type: "video",
        },
        {
          id: 3,
          subtitle: "How to streamline procurement.",
          type: "Resources",
        },
        {
          id: 4,
          subtitle: "Inforgraphic",
          type: "Resources",
        },
        {
          id: 5,
          subtitle: "Inforgraphic",
          type: "Quiz",
        },
      ],
    },
];
  

export const sampleData = [
  {
    title: 'Intro to TypeScript',
    numberOfLearners: 1200,
    credits: 3,
    category: 'Programming',
    image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600%27"
  },
  {
    title: 'Advanced React Patterns',
    numberOfLearners: 800,
    credits: 4,
    category: 'Frontend Development',
    image:"https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: 'Data Analytics Basics',
    numberOfLearners: 1500,
    credits: 2,
    category: 'Data Science',
    image:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
];