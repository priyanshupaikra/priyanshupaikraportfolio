export interface CommandData {
  title: string;
  content: string;
}

export const portfolioData: Record<string, CommandData> = {
  about: {
    title: "ABOUT ME",
    content: `
Name: Priyanshu Paikra
Role: Python Developer and AI/ML Student
Location: Dwarka, Sector 16C, New Delhi, 110078
Email: priyanshu.paikra@gmail.com

I'm a passionate Python developer with 1.5+ years of experience
building scalable web applications, data pipelines, and automation
tools and Ml models. I love clean code, elegant solutions, and continuous learning.

Core Skills:
• Programming: Python, Java, C++, JavaScript
• Python (Streamlit, Flask, FastAPI )
• Database Design (RDBMS, MySQL, NoSQL, PostgreSQL)
• DevOps (GoogleCloud, LLM, CI/CD)
• Python Libraries (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Keras, PySpark, Seaborn)
    `
  },
  education: {
    title: "EDUCATION",
    content: `
🎓 Bachelor of Technology in Information Technology
   USICT, GGSIPU (2022-2026)
   Specialization: Machine Learning, Data Science & AI
   GPA: 8.6

🎓 Senior Secondary Education 
   CBSE (2019-2021)
   94.6%

📚 Relevant Coursework:
   • Algorithms & Data Structures
   • Machine Learning & Deep Learning
   • Database Systems & Design
   • Operating System
   • Computer Networks
   • Software Engineering
    `
  },
  projects: {
    title: "FEATURED PROJECTS",
    content: `
🚀 Personal Finance Tracker
   ├── Tech: Python, Flask, SQLite, Tailwind CSS, HTML, Git
   ├── Features: full-stack web application to help users track income, expenses, and manage personal budgets
   └── <a href="https://github.com/priyanshupaikra/finance_tracker" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/ai-task-manager</a>

📊 AI Resume Analyzer
   ├── Tech: Python, Flask, HTML5, Google Gemini API, Tailwind CSS
   ├── Features: AI-powered resume and job analyzer
   └── <a href="https://github.com/priyanshupaikra/AI-resume-analyzer" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/analytics-dashboard</a>

🤖 Calories Burnt Prediction Model
   ├── Tech: Python, Pandas, Scikit-learn, Flask, HTML5, Tailwind CSS
   ├── Features: A web application that uses a machine learning model to predict calories burned based on inputs like exercise duration, type, age, and weight.
   └── <a href="" target="_blank" class="text-blue-400 hover:text-blue-300 underline"></a>

🌐 Bank Management System
   ├── Tech: Python, Flask, React, MySQL, Stripe API, Docker
   ├── Features: A web platform simulating a banking system with user accounts, balance viewing, fund transfers, and transaction history. The Stripe API is integrated for processing card deposits.
   └── <a href="" target="_blank" class="text-blue-400 hover:text-blue-300 underline"></a>

📊 Hostel Face Recognition System
   ├── Tech: Python, OpenCV, face_recognition (library), Flask, HTML5
   ├── Features: A system that uses computer vision for real-time face detection and recognition to automate and track student attendance in a hostel.
   └── <a href="" target="_blank" class="text-blue-400 hover:text-blue-300 underline"></a>
    `
  },
  experience: {
    title: "WORK EXPERIENCE",
    content: `
💼 Python Developer Intern | Innobyte Services
   📅 July 2025 - Present
   📍 Remote


💼 IBM Skill Build Internshhip | CSRBOX
   📅 Aug 2024 - Sep 2024
   📍 Remote
   • Leveraged Python, SQL and Tableau to clean, analyze and visualize datasets.
   • Developed predictive models using machine learning techniques to forecast trends and optimize processes of movie recognition. 
   • Conducted in-depth exploratory data analysis to uncover hidden patterns and insights.
   • Created interactive dashboards to effectively communicate findings to stakeholders.
   • Gained hands on experience in data cleaning, visualization, and analysis, contributing to project success.


💼 ML Research Intern | GGV
   📅 Sep 2025 - Nov 2024
   📍 Remort
   • Worked on Calories Burnt Prediction using real-world datasets from the professor and Kaggle.
   • Pre-processed data to ensure clean, structured input for model training.
   • Selected Linear Regression and Random Forest as the best algorithms based on performance. Developed models with RMSE: 8.5 (Linear Regression) and 6.2 (Random Forest).
   • Random Forest showed better accuracy due to its ability to handle non-linearity.
   • Gained experience in data analysis, model evaluation, and refining machine learning algorithms.

    `
  },
  certifications: {
    title: "CERTIFICATIONS",
    content: ` 
🏅 <a href="https://www.coursera.org/account/accomplishments/verify/Z6893D5S9V56?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Introduction to Statistics</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/J0RMPFIQ858I?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Introduction to Retrieval Augmented Generation (RAG)</a>
   Issued: 2024

🏅 <a href="https://www.linkedin.com/learning/certificates/7c7dbaeff47b67853e43c814c5a54cae77db9d74bfc3f1b95f68a153676248cd?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BaBdUZv7WRCSS7v5EzP8KSg%3D%3D" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Introduction to Artificial Intelligence</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/QA9ZMWMUKVB4" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Gemini for Data Scientists and Analysts</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/0VGUQQIADFD2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GenAI Basics - How LLMs Work</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/Z6893D5S9V56?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Data Analytics - IBM Internship</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/Z6893D5S9V56?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Google Analytics for Beginners</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/HGQS22AGU0XZ" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Calculus for Machine Learning and Data Science</a>
   Issued: 2024

🏅 <a href="https://www.udacity.com/certificate/e/d60ddad0-5228-11ef-89fa-9fd59621171f" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Gemini API by Google</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/7E6ME5EUQV9M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Behavioral Finance</a>
   Issued: 2024

🏅 <a href="https://www.coursera.org/account/accomplishments/verify/VZ4GJXCR3AB9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Foundations of User Experience (UX) Design</a>
   Issued: 2024
    `
  },
  social: {
    title: "CONNECT WITH ME",
    content: `
   ┌─────────────────────────────────────────────────────────┐
   │                    SOCIAL CONNECTIONS                   │
   └─────────────────────────────────────────────────────────┘
🔗 Professional Links:
   • <a href="https://github.com/priyanshupaikra" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/priyanshupaikra</a>
   • <a href="https://linkedin.com/in/priyanshupaikra" target="_blank" class="text-blue-400 hover:text-blue-300 underline">LinkedIn: linkedin.com/in/priyanshupaikra</a>
   
🐦 Social Media:
   • <a href="https://twitter.com/priyanshupyr" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Twitter: @priyanshupyr</a>
   • <a href="https://medium.com/@priyanshupaikra" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Medium: medium.com/@priyanshupaikra</a>

💬 Let's connect and discuss Python Development, web development with python and machine learning,
   or any interesting tech topics!
    `
  },
    help: {
    title: "AVAILABLE COMMANDS",
    content: `
📖 Command Reference:

about         - Personal information and skills overview
education     - Academic background and coursework
projects      - Featured projects and GitHub repositories  
experience    - Professional work history
certifications- Industry certifications and credentials
social        - Social media links and contact information
help          - Display this help menu
clear         - Clear the terminal screen

    `
  }
};

export const asciiArt = `
 ____       _                         _          
|  _ \\ _ __(_)_   _  __ _ _ __  ___| |__  _   _ 
| |_) | '__| | | | |/ _\` | '_ \\/ __| '_ \\| | | |
|  __/| |  | | |_| | (_| | | | \\__ \\ | | | |_| |
|_|   |_|  |_|\\__, |\\__,_|_| |_|___/_| |_|\\__,_|
              |___/                             
                                                
    Python Developer & Code Enthusiast
    =====================================
`;

export const availableCommands = ['about', 'education', 'projects', 'experience', 'certifications', 'social', 'help', 'clear'];
