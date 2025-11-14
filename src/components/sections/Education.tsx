const educations = [
  {
    degree: "Master's of Science",
    subject: "Computer Science & Engineering (CSE)",
    institute: "Rajshahi University",
    year: "Now",
  },
  {
    degree: "Bachelor of Science",
    subject: "Computer Science & Engineering (CSE)",
    institute: "North Bengal International University",
    year: "2021",
  },
  {
    degree: "Higher School Certificate (HSC)",
    subject: "Science",
    institute: "Rajshahi University School & College",
    year: "2016",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    subject: "Science",
    institute: "Rajshahi Adarsha High School",
    year: "2014",
  },
  {
    degree: "Junior School Certificate (JSC)",
    subject: "",
    institute: "Rajshahi Adarsha High School",
    year: "2011",
  }
];
export default function Education() {
  return (
    <section id="education" className="w-full py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-0">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-400 text-center py-6 mb-8">
          Education
        </h2>
        <ol className="relative border-s border-indigo-300 dark:border-zinc-600 ml-4">
          {educations.map((e, i) => (
            <li key={i} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-cyan-400 rounded-full -left-4 ring-2 ring-indigo-200 dark:ring-zinc-800">
                <span className="text-white font-bold text-base">{educations.length - i}</span>
              </span>
              <div className="pl-2">
                <h3 className="font-semibold text-lg text-indigo-600 dark:text-cyan-400">
                  {e.degree}
                </h3>
                <h4 className="text-md text-cyan-700 dark:text-cyan-300">
                  {e.subject}
                </h4>
                <h5 className="text-xs text-zinc-500 dark:text-zinc-300">
                  {e.institute}
                </h5>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{e.year}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
