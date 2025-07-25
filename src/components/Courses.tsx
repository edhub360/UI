import React from 'react';
import { ExternalLink, DollarSign, Briefcase, Scale } from 'lucide-react';

const Courses = () => {
  const technologyCourses = [
    {
      title: "Mastering Data Structures in Python: From Fundamentals to Advanced Applications",
      description: "",
      image: "/course_image.jpg",
      url: "https://edhub360.trainercentralsite.com/course/mastering-data-structures-in-python-from-fundamentals-to-advanced-applications"
    }
  ];

  const financeCourses = [
    {
      title: "Financial Analysis & Modeling",
      description: "Learn advanced Excel, financial statements analysis, and valuation techniques",
      icon: DollarSign,
      url: "#"
    }
  ];

  const legalCourses = [
    {
      title: "Bootcamp for Practice: Decoding Law",
      description: "Turning Legal Theory into Real-World Expertise.",
      image: "/law_course_image.jpg",
      url: "https://edhub360.trainercentralsite.com/course/bootcamp-for-practice"
    }
  ];

  const CourseCard = ({ course, index, hasImage = false }: { course: any; index: number; hasImage?: boolean }) => (
    <div 
      key={index} 
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-[#009C9F] transform hover:-translate-y-2"
    >
      {course.image ? (
        <div className="mb-6">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#009C9F] to-[#00446E] text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
        {/* Optional: Fallback text or placeholder */}
        <span className="text-lg font-bold">No Image</span>
      </div>
    )}
      
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 group-hover:text-[#009C9F] transition-colors line-clamp-2">
        {course.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
        {course.description}
      </p>

      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold hover:from-[#00446E] hover:to-[#009C9F] transition-all duration-300 group/btn text-sm lg:text-base"
      >
        Enroll Now
        <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  );

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive course catalog designed to accelerate your career and expand your expertise
          </p>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#00446E] mb-4">Technology</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master cutting-edge technologies and build the skills that drive innovation in today's digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {technologyCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} hasImage={true} />
            ))}
          </div>
        </div>

        {/* Finance Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#00446E] mb-4">Finance</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop expertise in financial markets, analysis, and strategic decision-making for career advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {financeCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#00446E] mb-4">Legal</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build essential legal knowledge for business, compliance, and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {legalCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Join thousands of professionals who have transformed their careers with our expert-led courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#BEA260] text-[#00446E] px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Browse All Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00446E] transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;