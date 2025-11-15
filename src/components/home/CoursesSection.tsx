import Link from "next/link";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Advanced Astrology Course",
      certified: true,
      students: "500+ Students Enrolled",
      link: "/courses/astrology",
    },
    {
      id: 2,
      title: "Advanced Numerology Course",
      certified: true,
      students: "500+ students Enrolled",
      link: "/courses/numerology",
    },
    {
      id: 3,
      title: "Lal Kitab Course",
      certified: true,
      students: "500+ students Enrolled",
      link: "/courses/lal-kitab",
    },
    {
      id: 4,
      title: "Vastu Shastra Course",
      certified: true,
      students: "500+ students Enrolled",
      link: "/courses/vastu",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            Explore Our Courses
          </h2>
          <div className="w-20 h-1 bg-[#FF7B60] mx-auto rounded-full"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#333355]/10"
            >
              {/* Course Image Placeholder */}
              <div className="relative bg-gradient-to-br from-[#333355] to-[#4a4a6a] h-40 flex items-center justify-center p-4 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-3 right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/10 rounded-full"></div>

                <h3 className="relative text-white text-lg md:text-xl font-bold text-center leading-tight z-10">
                  {course.title}
                </h3>
              </div>

              {/* Course Info */}
              <div className="p-5">
                {/* Badges */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FF7B60]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#FF7B60]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm text-[#333355] font-semibold">
                      Certified Course
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#333355]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#333355]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm text-[#333355] font-semibold">
                      {course.students}
                    </span>
                  </div>
                </div>

                {/* Enroll Button */}
                <Link
                  href={course.link}
                  className="block w-full text-center bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-3 rounded-lg font-semibold text-sm hover:from-[#723A0F] hover:to-[#8B4513] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
