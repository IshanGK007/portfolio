// import { useState, useEffect } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import './App.css'

// function SpinningTorus() {
//   return (
//     <mesh rotation={[0.5, 0.5, 0]}>
//       <torusKnotGeometry args={[1, 0.3, 100, 16]} />
//       <meshStandardMaterial color="hotpink" />
//     </mesh>
//   )
// }

// function App() {
//   const [text, setText] = useState("")
//   const fullText = "<Im Ishan />"

//   useEffect(() => {
//     let index = 0
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index))
//       index++
//       if (index > fullText.length) clearInterval(interval)
//     }, 100)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="font-sans bg-gray-100 text-gray-900">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//           <span className="text-lg font-bold text-2xl">My Portfolio</span>
//           <ul className="flex space-x-6">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#education">Education</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#cv">CV</a></li>
//             <li><a href="#domain">Dream Company</a></li>
//             <li><a href="#business">Business Ideas</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center relative px-4">
//         <h1 className="text-5xl font-bold text-center mb-4 shadow-lg">{text}</h1>
//         <div className="w-72 h-72 mt-8">
//           <Canvas>
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[0, 0, 5]} />
//             <SpinningTorus />
//             <OrbitControls enableZoom={false} />
//           </Canvas>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white text-gray-900">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
//           <p className="text-lg leading-relaxed mb-8">I am a passionate developer with a love for creating intuitive user experiences. I specialize in front-end development and constantly strive to learn new technologies.</p>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600">Education</h2>
//           <p className="text-lg">Bachelor of Technology in Computer Science - XYZ University</p>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-blue-600">Skills</h2>
//           <p className="text-lg">JavaScript, React, Tailwind CSS, Node.js, Python, Git, Figma</p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600">Projects</h2>
//           <ul className="text-lg space-y-4">
//             <li>🔹 Virtual Health Assistant</li>
//             <li>🔹 Research Paper Summarizer</li>
//             <li>🔹 Car Rental SaaS Platform</li>
//           </ul>
//         </div>
//       </section>

//       {/* CV Section */}
//       <section id="cv" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-blue-600">CV</h2>
//           <a href="/cv.pdf" target="_blank" className="text-indigo-600 underline">Download My CV</a>
//         </div>
//       </section>

//       {/* Dream Company Section */}
//       <section id="domain" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600">Dream Company</h2>
//           <p className="text-lg">My dream is to work at Adobe and contribute to creative software products used by millions worldwide.</p>
//         </div>
//       </section>

//       {/* Business Ideas Section */}
//       <section id="business" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-blue-600">Innovative Business Ideas</h2>
//           <p className="text-lg">I am constantly exploring new tech-based ideas in healthtech, edtech, and AI-driven productivity tools.</p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600">Contact</h2>
//           <p className="text-lg">Email: yourname@example.com</p>
//           <p className="text-lg">LinkedIn: linkedin.com/in/yourprofile</p>
//         </div>
//       </section>
//     </div>
//   )
// }
// export default App;

// #--------------------------


import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import './App.css'

function Banner() {
  const [text, setText] = useState('')
  const messages = ['Welcome to my portfolio', "I\'m Ishan Kulkarni"]
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < messages[messageIndex].length) {
        setText((prev) => prev + messages[messageIndex][charIndex])
        setCharIndex(charIndex + 1)
      } else {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setCharIndex(0)
        setText('')
      }
    }, 100)
    return () => clearInterval(interval)
  }, [charIndex, messageIndex])

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 shadow-lg text-white">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

function Model() {
  const { scene } = useGLTF('../laptop_model.glb') // Replace with your model path
  return <primitive object={scene} scale={1.5} />
}

function SectionCard({ title, children }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 mx-auto mb-8 max-w-4xl hover:shadow-2xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-600">{title}</h2>
      <div className="text-lg text-gray-800">{children}</div>
    </motion.div>
  )
}

function ProjectCard({ title, description, link, techStack }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 mb-4 w-full max-w-4xl mx-auto hover:shadow-2xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-2 text-blue-600">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <p className="font-semibold text-gray-800 mb-4">Tech Stack: {techStack}</p>
      <a href={link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
        View Project
      </a>
    </motion.div>
  )
}

function App() {
  const projects = [
    {
      title: 'Vision-Based Billing System',
      description: 'A computer vision-based system for automatic billing using YOLOv5 and Python.',
      link: 'https://github.com/yourusername/vision-based-billing',
      techStack: 'Python, YOLOv5, OpenCV',
    },
    {
      title: 'Car Rental System',
      description: 'A car rental system with payment integration using React, Node.js, and Razorpay.',
      link: 'https://github.com/yourusername/car-rental-system',
      techStack: 'React, Node.js, MongoDB, Razorpay',
    },
    {
      title: 'EDA on Thyroid Dataset',
      description: 'Exploratory Data Analysis and predictive modeling on the Thyroid dataset.',
      link: 'https://github.com/yourusername/eda-thyroid-dataset',
      techStack: 'Python, Pandas, Scikit-learn, Gradient Boosting',
    },
  ]

  const educationDetails = [
    {
      degree: 'B.Tech. in Computer Science',
      institution: 'KLE Technological University, Hubli',
      year: '2021',
      grade: '8.86 CGPA',
    },
    {
      degree: 'PUC',
      institution: 'ICS Mahesh PU College, Dharwad',
      year: '2017',
      grade: '86.16%',
    },
    {
      degree: 'SSLC',
      institution: 'Pavan English Medium School',
      year: '2015',
      grade: '73.6%',
    },
  ]

  const skills = ['JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'PyTorch', 'OpenCV', 'YOLO', 'Git', 'Postman']

  return (
    <div className="font-sans bg-gradient-to-r from-blue-600 to-indigo-700 text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-bold">My Portfolio</span>
          <ul className="hidden md:flex space-x-6">
            {["home", "about", "education", "skills", "projects", "cv", "domain", "business", "contact"].map(section => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth
                  duration={500}
                  className="cursor-pointer text-white font-semibold hover:text-yellow-300 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-12 pt-24 pb-12">
        <div className="w-full flex flex-col md:flex-row items-center justify-around">
          {/* Banner Text */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0" style={{ minWidth: '1300px' }}> {/* Added minWidth */}
            <Banner />
          </div>

          {/* Model Canvas */}
          <div className="md:w-1/2 h-72 md:h-96">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 2]}
              legacy={false}
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              gl={{ alpha: true, antialias: true, clearColor: [0, 0, 0, 0] }}
            >
              <color attach="background" args={['transparent']} />
              <ambientLight intensity={0.6} />
              <directionalLight position={[0, 0, 5]} intensity={0.5} />
              <Model />
              <OrbitControls
                // enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <SectionCard title="About Me">
          I am a passionate developer with a love for creating intuitive user experiences.
          I specialize in front-end development and constantly strive to learn new technologies.
        </SectionCard>
      </section>

      {/* Education Section */}
      <section id="education" className="py-10">
        <SectionCard title="Education">
          {educationDetails.map((education, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 mb-4 w-full max-w-4xl mx-auto hover:shadow-2xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-600">{education.degree}</h3>
              <p className="text-lg text-gray-700 mb-4">{education.institution}</p>
              <p className="font-semibold text-gray-800">{education.year}</p>
              <p className="text-gray-700">{education.grade}</p>
            </motion.div>
          ))}
        </SectionCard>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10">
        <SectionCard title="Skills">
          <ul className="list-disc pl-6 space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-800">{skill}</li>
            ))}
          </ul>
        </SectionCard>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10">
        <SectionCard title="Projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
            />
          ))}
        </SectionCard>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-10">
        <SectionCard title="CV">
          <p>📧 <a href="mailto:ikishankulkarni16@gmail.com" className="underline text-indigo-600">ikishankulkarni16@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/ishan-kulkarni-42361832a/" className="underline text-indigo-600" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
          <a href="/ishan_cv.pdf" download className="bg-indigo-600 text-white px-6 py-2 mt-4 inline-block rounded-lg shadow hover:bg-indigo-700 transition">Download My CV</a>
        </SectionCard>
      </section>

      {/* Dream Company Section */}
      <section id="domain" className="py-10">
        <SectionCard title="Dream Company">
          My dream is to work at Adobe and contribute to creative software products used by millions worldwide.
        </SectionCard>
      </section>

      {/* Business Ideas Section */}
      <section id="business" className="py-10">
        <SectionCard title="Innovative Business Ideas">
          I am constantly exploring new tech-based ideas in healthtech, edtech, and AI-driven productivity tools.
        </SectionCard>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10">
        <SectionCard title="Contact">
          <p>Email: <a href="mailto:ikishankulkarni16@gmail.com" className="underline text-indigo-600">ikishankulkarni16@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ishan-kulkarni-42361832a/" className="underline text-indigo-600" target="_blank" rel="noreferrer">ishan-kulkarni-42361832a</a></p>
        </SectionCard>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6 text-center">
        <p className="text-sm">© 2025 Ishan Kulkarni. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

// ---------------------------------------------

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Link as ScrollLink } from 'react-scroll';
// import { Banner } from '@/components/Banner';
// import { Model } from '@/components/Model';
// import { SectionCard } from '@/components/SectionCard';
// import { ProjectCard } from '@/components/ProjectCard';

// const projects = [
//   {
//     title: 'Vision-Based Billing System',
//     description: 'A computer vision-based system for automatic billing using YOLOv5 and Python.',
//     link: 'https://github.com/yourusername/vision-based-billing',
//     techStack: 'Python, YOLOv5, OpenCV',
//   },
//   {
//     title: 'Car Rental System',
//     description: 'A car rental system with payment integration using React, Node.js, and Razorpay.',
//     link: 'https://github.com/yourusername/car-rental-system',
//     techStack: 'React, Node.js, MongoDB, Razorpay',
//   },
//   {
//     title: 'EDA on Thyroid Dataset',
//     description: 'Exploratory Data Analysis and predictive modeling on the Thyroid dataset.',
//     link: 'https://github.com/yourusername/eda-thyroid-dataset',
//     techStack: 'Python, Pandas, Scikit-learn, Gradient Boosting',
//   },
// ];

// const educationDetails = [
//   {
//     degree: 'B.Tech. in Computer Science',
//     institution: 'KLE Technological University, Hubli',
//     year: '2021',
//     grade: '8.86 CGPA',
//   },
//   {
//     degree: 'PUC',
//     institution: 'ICS Mahesh PU College, Dharwad',
//     year: '2017',
//     grade: '86.16%',
//   },
//   {
//     degree: 'SSLC',
//     institution: 'Pavan English Medium School',
//     year: '2015',
//     grade: '73.6%',
//   },
// ];

// const skills = ['JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'PyTorch', 'OpenCV', 'YOLO', 'Git', 'Postman'];

// const App = () => {
//   return (
//     <div className="font-sans bg-gradient-to-r from-blue-600 to-indigo-700 text-gray-900 min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//           <span className="text-2xl font-bold">My Portfolio</span>
//           <ul className="hidden md:flex space-x-6">
//             {["home", "about", "education", "skills", "projects", "cv", "domain", "business", "contact"].map(section => (
//               <li key={section}>
//                 <ScrollLink
//                   to={section}
//                   smooth
//                   duration={500}
//                   className="cursor-pointer text-white font-semibold hover:text-yellow-300 transition-colors"
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 pt-24 pb-12">
//         <Banner />
//         <div className="w-full h-72 md:h-96 mt-8 bg-transparent">
//           {/* Simplified Canvas setup */}
//           <div style={{ width: '50%', height: '100%', margin: '0 auto' }}>
//             <Canvas 
//               camera={{ position: [0, 0, 5], fov: 45 }}
//               dpr={[1, 2]}
//               legacy={false}
//             >
//               <color attach="background" args={['transparent']} />
//               <ambientLight intensity={0.6} />
//               <directionalLight position={[0, 0, 5]} intensity={0.5} />
//               <Model />
//               <OrbitControls 
//                 enableZoom={false}
//                 enablePan={false}
//                 minPolarAngle={Math.PI / 4}
//                 maxPolarAngle={Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-10">
//         <SectionCard title="About Me">
//           I am a passionate developer with a love for creating intuitive user experiences.
//           I specialize in front-end development and constantly strive to learn new technologies.
//         </SectionCard>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-10">
//         <SectionCard title="Education">
//           {educationDetails.map((education, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="text-2xl font-bold text-blue-600">{education.degree}</h3>
//               <p className="text-lg text-gray-700">{education.institution}</p>
//               <p className="text-gray-600">{education.year} - {education.grade}</p>
//             </div>
//           ))}
//         </SectionCard>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-10">
//         <SectionCard title="Skills">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-blue-50 p-3 rounded-lg text-center text-blue-700 font-semibold">
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </SectionCard>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-10">
//         <SectionCard title="Projects">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </SectionCard>
//       </section>

//       {/* CV Section */}
//       <section id="cv" className="py-10">
//         <SectionCard title="CV">
//           <div className="flex flex-col space-y-4">
//             <p>📧 <a href="mailto:ikishankulkarni16@gmail.com" className="underline text-indigo-600">ikishankulkarni16@gmail.com</a></p>
//             <p>🔗 <a href="https://www.linkedin.com/in/ishan-kulkarni-42361832a/" className="underline text-indigo-600" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
//             <a href="/ishan_cv.pdf" download className="bg-indigo-600 text-white px-6 py-2 w-fit rounded-lg shadow hover:bg-indigo-700 transition">Download My CV</a>
//           </div>
//         </SectionCard>
//       </section>

//       {/* Dream Company Section */}
//       <section id="domain" className="py-10">
//         <SectionCard title="Dream Company">
//           My dream is to work at Adobe and contribute to creative software products used by millions worldwide.
//         </SectionCard>
//       </section>

//       {/* Business Ideas Section */}
//       <section id="business" className="py-10">
//         <SectionCard title="Innovative Business Ideas">
//           I am constantly exploring new tech-based ideas in healthtech, edtech, and AI-driven productivity tools.
//         </SectionCard>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-10">
//         <SectionCard title="Contact">
//           <div className="flex flex-col space-y-4">
//             <p>Email: <a href="mailto:ikishankulkarni16@gmail.com" className="underline text-indigo-600">ikishankulkarni16@gmail.com</a></p>
//             <p>LinkedIn: <a href="https://www.linkedin.com/in/ishan-kulkarni-42361832a/" className="underline text-indigo-600" target="_blank" rel="noreferrer">ishan-kulkarni-42361832a</a></p>
//           </div>
//         </SectionCard>
//       </section>

//       {/* Footer */}
//       <footer className="bg-indigo-700 text-white py-6 text-center">
//         <p className="text-sm">© {new Date().getFullYear()} Ishan Kulkarni. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;