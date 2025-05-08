import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { Header } from './Header';

export const HeroSection = () => {
  return (
    <>
      <Header />
      <section id="home" className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Gavindu Rushela Ekanayaka
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-4">
              Undergraduate Software Engineering Student, SLIIT.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center">
                <a href="https://github.com/rushela" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </button>
              <a href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center">
                Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="/assets/rushela-cv.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors flex items-center">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
              <svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
                <defs>
                  <clipPath id="blobClip">
                    <path d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                {/* Blob background */}
                <path
                  d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z"
                  transform="translate(100 100)"
                  fill="#6366F1"
                  opacity="1"
                />
                {/* Clipped image */}
                <image
                  href="/assets/profile.png"
                  x="0"
                  y="0"
                  width="200"
                  height="180"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#blobClip)"
                />
                {/* Optional border */}
                <path
                  d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z"
                  transform="translate(100 100)"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
