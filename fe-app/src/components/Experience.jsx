import React from 'react';

const experiences = [
  {
    title: 'Clerical',
    company: 'Spiegel and Barbato',
    location: '2622 E Tremont Ave, Bronx, NY 10461',
    duration: 'August 2021 – Current',
    description: [
      'Provide comprehensive administrative support to legal assistants and attorneys.',
      'Tasks include printing, scanning, typing, and delivering mail.',
      'Efforts reduce workload on legal staff and allow focus on higher-priority tasks.'
    ]
  },
  {
    title: 'Picker',
    company: 'Amazon',
    location: '7 W 34th St, New York, NY 10001',
    duration: 'June 2021 – August 2021',
    description: [
      'Accurately selected and prepared grocery orders within tight deadlines.',
      'Used handheld devices to efficiently locate items following inventory guidelines.',
      'Maintained productivity and ensured customer satisfaction.'
    ]
  },
  {
    title: 'Cashier & Customer Service',
    company: 'Kmart',
    location: '300 Baychester Ave, Bronx, NY 10475',
    duration: 'May 2018 – November 2021',
    description: [
      'Handled transactions, promoted credit cards, and signed up memberships.',
      'Managed customer service tasks like exchanges, refunds, and inquiries.',
      'Supported floor operations and ensured a clean, organized workspace.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-white inline-block mx-auto text-center">
          Experience
        </h2>
        <div className="space-y-10 mt-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
              <p className="text-gray-300 italic mb-1">
                {exp.company}, {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
