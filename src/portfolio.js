const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/pahujayogesh',
  title: 'Yogesh.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yogesh Pahuja',
  role: ' Data Engineer & Developer',
  description:
    `Data Engineer with 5 months of experience in writing automated Python scripts Skilled in the areas of Python, Pandas, NumPy,
    Openpyxl, Excel and SQL. Other than that I'm passionate about working with React Js, Node Js, MongoDb and MySQL Tech Stack. I'm also exploring cloud technologies such as AWS and Jenkins.`,
  resume: 'https://drive.google.com/file/d/114iUcUbFLmTTrjZXRLIzLLDRIbe6YvO8/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/yogesh-pahuja-a452251b2',
    github: 'https://github.com/pahujayogesh',
  },
}
const experience ={
  
    companyname:'Samsung India Electronics Pvt ltd',
    role:'Python Automation',
    date:'October 2021–February 2022',
    description:{Task1:`Individually worked to reduce the MIS team's manual efforts on large data files by developing an automation executable (.exe) tool
    with an accuracy of 98% using Python Pandas and Numpy modules. This reduced the manual data operation and processing effort
    from 48 hours to a few minutes.`,
    Task2:`Data Handling and Processing of DataFrame with Pandas :-
    ➔ Indexing, manipulating, renaming, sorting, merging data frame, Flash fill, Data Concatenation, Data Filtering.
    ➔ Update, Add, Delete columns from a data frame.
    ➔ Impute missing files, handle missing data or NANs.
    ➔ Pivot operation, VlookUp operation, Countif, Count.`
},
  }

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
    livePreview:'https://pahujayogesh.github.io/Football-Card/'
  },
  {
    name: 'React Book Library',
    description:
      `A Web App for books library that includes two sections sidebar and main container
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
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'pandas',
  'Matplotlib',
  'sqlalchemy',
  'psycopg2',
  'MySQL',
  'PostgreSQL',
  'OOPS',
  'HTML',
  'CSS',
  'JavaScript',
  'React Js',
  'Node Js',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'Java',
  'Git',
  'GitHub',
]

const certifactes =[
  {title:'React Js',link:'https://drive.google.com/thumbnail?id=1n7za-l_2QshADLXw8_uVuu-eyC41W_SK',alt:'react Certificate'},
  {title:'Python Programming',link:'https://drive.google.com/thumbnail?id=1Aw7NbV-ky2DsR3fw5FkbKmum4Ooiy659',alt:'Python Programming Certificate'},
  {title:'Java Programming',link:'https://drive.google.com/thumbnail?id=18i8YnLmrEUb81Y9Rm4c1g7aU9fV-u8x8',alt:'Java Programming Certificate'},
  {title:'Database',link:'https://drive.google.com/thumbnail?id=1de5ziSnXRjS32yxbuwKvhS9LFAngrNww',alt:'Database Certificate'}]

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
