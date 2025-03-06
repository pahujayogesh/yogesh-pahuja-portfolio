import { FaPython, FaDatabase, FaGithub, FaLinux } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiPandas, SiScikitlearn, } from "react-icons/si";

import python from './components/Certification/certificate_images/python.jpg';
import database from './components/Certification/certificate_images/database.jpg';
import react from './components/Certification/certificate_images/udemyreact.jpg';
import java from './components/Certification/certificate_images/java.jpg';
import AIML from './components/Certification/certificate_images/AI&ML.png';
import powerbi from './components/Certification/certificate_images/Power BI.jpg';
import DSML from './components/Certification/certificate_images/DS&ML.jpg';
import excel from './components/Certification/certificate_images/EXCEL.jpg';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Yogesh.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yogesh Pahuja',
  role: ' Data Engineer & Analyst',
  description:
    `A Data Engineer with over 1 year of experience in data automation, analysis, and optimization. 
    Skilled in Python, Pandas, SQL, scikit-learn
    and Power BI, with a proven track record of developing automated workflows, 
    improving data processing effciency, and creating actionable insights.`,
  social: {
    linkedin: 'https://www.linkedin.com/in/yogesh-pahuja-a452251b2',
    github: 'https://github.com/pahujayogesh',
  },
}
const experience =[
  {
    companyname: ' Rose Designer Chairs',
    role: 'Data Analyst',
    date: 'March 2024 – September 2024',
    description: [
      `➔ Successfully executed comprehensive data reconciliation processes across multiple e-commerce platforms, ensuring the accuracy and consistency 
of data utilized for reporting and analysis.`,
      `➔ Developed detailed reports for the e-commerce platforms, emphasizing key performance metrics and indicators that informed strategic business 
decisions.`,
      `➔ Optimized the reporting process through automation by using Python, Pandas, and OpenPyXL; accomplished a reduction in report generation time 
from 4 hours to just 30 minutes, improving efficiency by 87.5%, while maintaining a high accuracy rate of 90%, thereby ensuring delivery of 
reliable and timely reports. `,
      `➔ Developed visually compelling interactive dashboards in Power BI and Plotly Dash, effectively communicating complex data findings to stakeholders 
and streamline QRC (Query, Report, Complaint) Analysis. `,
    ],
  },
  {
    companyname: 'Samsung India Electronics Pvt ltd',
    role: 'MIS - Python Automation',
    date: 'October 2021 – February 2022',
    description: [
      `➔ Collaborated with MIS Teams to integrate data analytics solutions into existing business processes, developed an automation tool that greatly 
enhanced the report generation speed by 70% and streamlined overall operations.`,
      `➔ Developed automated Python scripts for data manipulation and analysis, achieving an impressive accuracy rate of 98% in data processing tasks.`,
      `➔ Conducted thorough testing and validation of automation tools to ensure reliability and performance, addressing any issues promptly to maintain 
operational continuity.`,
      `➔ Made pivotal contributions in providing technical support and training to over 4 team members on the use of automation tools.`,
    ],
  },

];

const education = {
  postgradute:{
    collegelogo:'https://d30mzt1bxg5llt.cloudfront.net/public/uploads/images/_signatoryLogo/VES-logo.png',
    collegename:`Vivekanand Education Society’s of Technology`,
    course:`Master’s in Computer Applications`,
    duration:'2021-2023'
  },
  graduate:{
    collegelogo:'https://i1.rgstatic.net/ii/institution.image/AS%3A267475592122373%401440782558590_l',
    collegename:`Smt. Chandibai Himathmal Mansukhani College`,
    course:`B.Sc computer science`,
    duration:'2017-2020'
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Customer Churn Prediction Dashboard',
    description:
      `This project predicts customer churn using Logistic Regression and Random Forest. It provides detailed insights into customer retention through 
Exploratory Data Analysis, Feature Importance Analysis, and Churn Prediction Modeling.
Created an interactive Power BI dashboard to visualize both clean and prediction datasets. `,

    stack: ['Python', 'Pandas','Numpy', 'Matplotlib', 'scikit-learn', 'seaborn', 'Jupyter Notebook','SQL','SQLAlchemy','Power BI'],
    sourceCode: 'https://github.com/pahujayogesh/customer_churn_analysis_prediction',
  },
  {
    name: 'Zeotap Data Science Assignment',
    description:
      `This repository contains the Zeotap Data Science Assignment, which involves data processing, analysis, and visualization using Python and relevant libraries. The project demonstrates data manipulation techniques, feature engineering, and insights extraction.`,
    stack: ['Python', 'Pandas','Numpy', 'Matplotlib', 'scikit-learn', 'seaborn', 'Jupyter Notebook'],
    sourceCode: 'https://github.com/pahujayogesh/Zeotap_DS_Assignment',
  },
  {
    name: 'Titanic Survival Analysis Dashboard',
    description:
      `This interactive dashboard analyzes the survival patterns of Titanic passengers using machine learning. The app provides
comprehensive insights through Exploratory data analysis, Survival pattern visualization, Statistical correlation analysis,
Predictive modeling using Logistic Regression.`,
    stack: ['Python', 'Pandas','Numpy', 'Matplotlib', 'scikit-learn', 'seaborn', 'streamlit'],
    sourceCode: 'https://github.com/pahujayogesh/Titanic_app',
    livePreview:'https://yogesh-titanic-app.streamlit.app/'
  },
  {
    name: 'ETL project on food claims dataset',
    description:
      `This project focuses on the Extract, Transform, and Load (ETL) process for the Kaggle Food Claims dataset. The goal is to efficiently
      extract data from the Kaggle platform, apply necessary transformations using Python and SQL, and finally load the cleansed and
      structured data into a PostgreSQL database.`,
    stack: ['Python', 'Pandas','Numpy', 'Matplotlib', 'SQL', 'sqlalchemy', 'psycopg2','PostgreSQL', 'PgAdmin4'],
    sourceCode: 'https://github.com/pahujayogesh/Python-SQL-ETL-project-on-Food-Claims-data/tree/main',
  },
  {
    name: 'SQL Music Store Data Analysis',
    description:
      `The SQL Music Store Data Analysis project aims to delve into a comprehensive analysis of a music store database, unraveling valuable
      insights into music sales, customer behavior, artist performance, and track popularity. Through a series of SQL queries and data
      manipulation techniques`,
    stack: ['PostgreSQL', 'PgAdmin4','DML', 'DDL', 'Aggregate functions', 'Subqueries', 'JOINS', 'CTE'],
    sourceCode: 'https://github.com/pahujayogesh/SQL_Music_Store_Data_Analysis/tree/main',
  },
  {
    name: 'Cinematic Data Dive: Python-Powered Movie Analysis ',
    description:
      `project that explores a comprehensive dataset containing information on the 1,000 most popular movies released on IMDB between 2006
      and 2016. Through Python-based data analysis, this project aims to uncover insightful trends, patterns, and valuable insights in the world of
      cinema, offering a deeper understanding of the movie industry's evolution over the past decade.`,
    stack: ['Python', 'Pandas', 'Matplotlib', 'Google Colab'],
    sourceCode: 'https://github.com/pahujayogesh/Data-Analysis-With-Python-Pandas/tree/master',
  },
  {
    name: 'Voice-Activated Web Search: Navigating the Internet with Speech Recognition',
    description:
      `A desktop application for web search through voice commands & using mouse events to control the browser’s searched page with voice
      command with an accuracy of 80% automated the manual Functioning of web search on desktop.`,
    stack: [' Python', 'Tkinter', 'PyAutoGUI', 'PyAudio', 'webbrowser','Google Text to speech API'],
    sourceCode: 'https://github.com/pahujayogesh/Web-search-with-voice-recognition',
  },
  {
    name: 'Criminal Detection using Face Recognition',
    description:
      `A Application for Detecting and identifying the saved database of faces, to recognise
      the criminal and fetch data for that criminal. Detection can be done with Image
      surveillance and Video Surveillance. The new date record can be saved in database.`,
    stack: ['python','Tkinter', 'OpenCV', 'OS', 'Image module', 'numpy', 'pymysql', 'Haar Cascade Library'],
    sourceCode: 'https://github.com/pahujayogesh/Criminal-Detection-Using-Face-Recognition',
  },
  {
    name: 'Library Management System',
    description:
      `The Library Management System built with MERN tech stack makes library operations easier by providing admin/user registration,
      a thorough book catalog, Book recommendations, Messages, and overview into books that are currently out, all within a simple to use
      interface that improves administrative control and user experience.`,
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'JavaScript ES6', 'React Js', 'Axios', 'Node Js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/pahujayogesh/MERN-Library-Management-System',
  },
  {
    name: 'Fantasy Footbal Card',
    description:
      `Football Card: A dynamic React project showcasing football player profiles, featuring player names, jersey numbers, and comprehensive details including team, position, salary, and performance points.`,
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'JavaScript ES6', 'React Js', 'Axios'],
    sourceCode: 'https://github.com/pahujayogesh/Football-Card',
    livePreview:'https://pahujayogesh.github.io/Fantasy-Football/'
  },
  {
    name: 'React Book Library',
    description:
      `A Web App for books library that fetches data from open book Library API, includes two sections sidebar and main container
      Sidebar contains all the trending books and the main container contains tabulated
      formats of all books details Title, Author, Cover ID, First Publish Year.`,
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'JavaScript ES6', 'React Js', 'Axios','Open Books Library API','Vercel'],
    sourceCode: 'https://github.com/pahujayogesh/React-Books-Library-App',
    livePreview:'https://books-library-app-brown.vercel.app/'
  },
  {
    name: 'Landscape',
    description:
      `A Frontend responsive Garden care project, implemented features like navbar, css Grid, Flexbox,Footer and slideshow`,
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/pahujayogesh/Landscape.github.io',
    livePreview:'https://pahujayogesh.github.io/Landscape.github.io/'
  },
]


const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "OOPS", icon: "🧠" }, // No direct icon available, using an emoji
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Data Handling & Operations",
    skills: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", },
      { name: "Matplotlib", icon: "📊" }, // No icon available
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Excel", icon: "📑" },
      {
        name: "Power BI",
        icon: (
          <img
            src="https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000"
            alt="Power BI"
            width="30"
          />
        ),
      },
    ],
  },
  {
    category: "Database Management Systems",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MSSQL", icon: "🗄️" }, // No direct icon available
    ],
  },
  {
    category: "Big Data Technologies",
    skills: [
      { name: "PySpark"},
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Azure",},
    ],
  },
  {
    category: "Data Integration & ETL",
    skills: [
      { name: "Azure Data Factory"  }, // No icon available
    ],
  },
  {
    category: "Data Storage & Management",
    skills: [
      { name: "Azure Data Lake"},
      { name: "Azure Data Warehouse"},
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "🔗" },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "VS Code",  },
      { name: "Jupyter Notebook"},
    ],
  },
];

const certifactes = [
  { 
    title: 'Python Programming', 
    link: '', 
    alt: 'Python Programming Certificate', 
    image: python 
  },
  { 
    title: 'Database', 
    link: '', 
    alt: 'Database Certificate', 
    image: database 
  },
  { 
    title: 'AIML', 
    link: '', 
    alt: 'Database Certificate', 
    image: AIML 
  },
  { 
    title: 'Power Bi', 
    link: '', 
    alt: 'Database Certificate', 
    image: powerbi
  },
  { 
    title: 'Data Science and Machine Learning', 
    link: '', 
    alt: 'Database Certificate', 
    image: DSML
  },
  { 
    title: 'Excel', 
    link: '', 
    alt: 'Database Certificate', 
    image: excel
  },
  { 
    title: 'React Js', 
    link: '', 
    alt: 'React Certificate', 
    image: react
  },
  { 
    title: 'Java Programming', 
    link: '', 
    alt: 'Java Programming Certificate', 
    image: java
  }
];
const activities=[
  {title:'Attended Techfest at VESIT',description:` Vihaan'18 (VESIT,Chembur) Inter-Collegiate Techfest Participated in a Quiriosity Competition.`},
  {title:'Project Demonstration For NAAC Event',link:'https://drive.google.com/file/d/1An3DDG2X6uZemIGzY4Eh8CmporrJfRtq/view'}  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pahujayogesh.s@gmail.com',
  linkedin:'https://www.linkedin.com/in/yogesh-pahuja-a452251b2',
  github:'https://github.com/pahujayogesh'
}

export { header, about, experience,education, projects, skills, certifactes,activities, contact }
