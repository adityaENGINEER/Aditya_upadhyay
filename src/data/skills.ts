import { Code2, Database, BrainCircuit, Terminal, Compass } from 'lucide-react';

export const skills = [
  {
    category: "Programming and Web Foundations",
    icon: Code2,
    items: [
      { name: "Python", description: "Foundational scripting and logic" },
      { name: "C", description: "Systems programming fundamentals" },
      { name: "HTML", description: "Structural web development" },
      { name: "CSS", description: "Styling and layout" },
      { name: "JavaScript", description: "Interactive web elements" },
      { name: "Java", description: "Object-oriented programming" }
    ]
  },
  {
    category: "Data Analytics",
    icon: Database,
    items: [
      { name: "NumPy", description: "Numerical computing" },
      { name: "pandas", description: "Data manipulation and analysis" },
      { name: "SQL", description: "Database querying" },
      { name: "Microsoft Excel", description: "Spreadsheet analysis" },
      { name: "Power BI", description: "Data visualization" },
      { name: "Matplotlib", description: "Plotting library" },
      { name: "Seaborn", description: "Statistical data visualization" }
    ]
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    items: [
      { name: "Basic Machine Learning Concepts", description: "Understanding ML principles" },
      { name: "Data Preprocessing", description: "Cleaning and preparing data" },
      { name: "Feature Encoding", description: "Transforming categorical variables" },
      { name: "Exploratory Data Analysis", description: "Analyzing data sets to summarize their main characteristics" },
      { name: "Introductory Predictive Modeling", description: "Building basic predictive models" }
    ]
  },
  {
    category: "Development Tools",
    icon: Terminal,
    items: [
      { name: "Jupyter Notebook", description: "Interactive computing environment" },
      { name: "PyCharm", description: "Python IDE" },
      { name: "MySQL Workbench", description: "Visual database design tool" },
      { name: "Git", description: "Version control system" },
      { name: "GitHub", description: "Code hosting platform" }
    ]
  },
  {
    category: "Areas of Exploration",
    icon: Compass,
    items: [
      { name: "Artificial Intelligence", description: "Exploring intelligent systems" },
      { name: "Generative AI", description: "Understanding GenAI concepts" },
      { name: "Large Language Models", description: "Exploring capabilities of LLMs" },
      { name: "Cloud Computing", description: "Cloud infrastructure basics" },
      { name: "AWS", description: "Amazon Web Services fundamentals" },
      { name: "Computer Vision", description: "Image and video analysis concepts" }
    ]
  }
];
