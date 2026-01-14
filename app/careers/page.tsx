"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";

const jobs = [
  {
    title: 'Senior Researcher',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5+ years in market research',
    qualification: 'Master’s degree in relevant field',
    about: 'As a Senior Researcher, you will lead multiple research projects from inception to completion, ensuring the highest standards of data quality and insight generation. You will collaborate with cross-functional teams, mentor junior researchers, and present findings to clients. Your expertise will drive innovation in research methodologies and contribute to the strategic direction of the company. You will also be responsible for maintaining client relationships and ensuring project deliverables are met on time and within budget. This role requires a proactive approach to problem-solving and a passion for uncovering actionable insights.',
    responsibilities: 'Lead end-to-end research projects, including planning, execution, and reporting. Coordinate with clients to understand their objectives and tailor research methodologies accordingly. Oversee data collection, analysis, and interpretation, ensuring accuracy and relevance of findings. Mentor and train junior team members, fostering a culture of continuous learning and improvement. Prepare and deliver presentations to clients, translating complex data into clear, actionable recommendations. Stay updated on industry trends and incorporate best practices into research processes. Manage project timelines and budgets, ensuring efficient resource allocation. Collaborate with other departments to integrate research insights into broader business strategies. Develop and refine research tools and techniques to enhance data quality and efficiency. Participate in business development activities, including proposal writing and client pitches. Ensure compliance with ethical standards and data privacy regulations throughout all research activities. Proactively identify potential challenges in projects and develop contingency plans. Foster strong relationships with external partners and vendors as needed. Contribute to the company’s thought leadership by publishing articles and presenting at industry conferences.',
    ideal: 'The ideal candidate is a strategic thinker with a strong background in market research and data analysis. You possess excellent leadership and communication skills, with a proven ability to manage complex projects and deliver results under tight deadlines. You are detail-oriented, highly organized, and adept at problem-solving. Experience in mentoring and developing junior staff is essential. You thrive in a collaborative environment and are comfortable presenting to senior stakeholders. Advanced proficiency in research tools and statistical software is required. A passion for continuous learning and staying ahead of industry trends will set you apart.',
    why: 'At FieldNet, you will have the opportunity to work with leading clients across diverse industries, tackling challenging and impactful projects. We offer a collaborative and inclusive work culture that values innovation and professional growth. Our team is dedicated to supporting your career development through ongoing training and mentorship. You will have access to state-of-the-art research tools and resources, and your contributions will directly influence business decisions. Join us to be part of a forward-thinking company that values your expertise and encourages you to reach your full potential.',
    apply: '#',
  },
  {
    title: 'Field Supervisor',
    location: 'Pan-India',
    type: 'Contract',
    experience: '2+ years in fieldwork supervision',
    qualification: 'Bachelor’s degree preferred',
    about: 'As a Field Supervisor, you will oversee the daily operations of field teams conducting research across various locations. Your primary responsibility is to ensure that data collection is carried out efficiently, accurately, and in accordance with established protocols. You will coordinate logistics, manage field staff, and troubleshoot any issues that arise during the research process. Your leadership will be crucial in maintaining high standards of data integrity and ensuring that project milestones are achieved. This role requires excellent organizational skills and the ability to adapt to dynamic field environments.',
    responsibilities: 'Supervise and coordinate field teams, ensuring all members are trained and equipped for their tasks. Develop and implement fieldwork schedules, monitor progress, and adjust plans as needed to meet project deadlines. Conduct regular quality checks on data collected, providing feedback and support to team members. Liaise with project managers and clients to communicate fieldwork status and resolve any challenges. Ensure compliance with safety and ethical guidelines at all times. Maintain accurate records of field activities and report on key metrics. Address logistical issues, such as transportation and equipment needs, to facilitate smooth operations. Foster a positive team environment, encouraging collaboration and open communication. Identify opportunities for process improvements and implement best practices in fieldwork. Handle conflict resolution and provide guidance to team members facing difficulties. Participate in recruitment and training of new field staff as required. Ensure all fieldwork documentation is complete and up to date. Represent the company professionally when interacting with clients, respondents, and external partners. Support the overall success of research projects by proactively addressing potential risks and challenges.',
    ideal: 'The ideal candidate is highly organized, with strong people management and communication skills. You have experience supervising teams in a research or fieldwork setting and are adept at handling logistical challenges. Attention to detail and a commitment to data quality are essential. You are proactive, adaptable, and able to make decisions under pressure. A collaborative mindset and the ability to motivate others are key to success in this role. Familiarity with research protocols and ethical standards is required. A passion for continuous improvement and learning is highly valued.',
    why: 'FieldNet offers a dynamic and supportive work environment where your contributions are valued. You will have the opportunity to work on a variety of projects, gaining exposure to different industries and research methodologies. Our flexible work arrangements and commitment to employee well-being set us apart. We invest in your professional growth through training and development programs. Join our team to be part of a company that values innovation, teamwork, and excellence in research. Your work will make a meaningful impact on our clients and the communities we serve.',
    apply: '#',
  },
  {
    title: 'Data Analyst',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years in data analysis',
    qualification: 'Bachelor’s in statistics or related field',
    about: 'As a Data Analyst, you will play a key role in transforming raw data into meaningful insights that drive business decisions. You will be responsible for cleaning, processing, and analyzing large datasets using advanced statistical techniques. Your work will support research teams in developing actionable recommendations for clients. You will also create data visualizations and reports that effectively communicate findings to both technical and non-technical audiences. This role requires strong analytical skills, attention to detail, and the ability to work independently. You will collaborate closely with other researchers and contribute to the continuous improvement of data processes.',
    responsibilities: 'Clean, validate, and process large datasets to ensure accuracy and consistency. Apply statistical methods to analyze data and identify trends, patterns, and correlations. Develop and maintain dashboards and data visualizations to present findings clearly. Collaborate with research teams to understand project objectives and tailor analyses accordingly. Prepare comprehensive reports that translate complex data into actionable insights. Ensure data privacy and security protocols are followed at all times. Continuously seek ways to improve data quality and analysis processes. Stay current with advancements in data analytics tools and methodologies. Provide training and support to team members on data-related tasks. Participate in client meetings to present findings and answer questions. Troubleshoot data issues and develop solutions to overcome challenges. Document all analysis procedures and maintain organized records. Contribute to the development of best practices for data management and analysis. Support the company’s thought leadership by sharing insights and participating in industry forums.',
    ideal: 'The ideal candidate has a strong background in data analysis and is proficient in statistical software such as Excel, SPSS, or R. You are detail-oriented, analytical, and possess excellent problem-solving skills. Experience with data visualization tools and techniques is essential. You are comfortable working with large datasets and can communicate findings effectively to diverse audiences. A proactive approach to learning and staying updated on industry trends is important. You thrive in a collaborative environment and are committed to delivering high-quality work. Strong organizational and documentation skills are a must.',
    why: 'At FieldNet, you will be part of an innovative team that values data-driven decision-making. We offer remote work options, flexible schedules, and opportunities for continuous learning. Our projects span a wide range of industries, providing you with diverse and challenging experiences. We support your professional growth through mentorship and access to the latest tools and technologies. Join us to make a real impact with your analytical skills and contribute to the success of our clients and organization.',
    apply: '#',
  },
];

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Careers</h1>
            <p className="text-lg text-slate-600">Join our team — explore current openings and apply.</p>
          </div>
          <div>
            {jobs.map((job, idx) => {
              const expanded = openIndex === idx;
              return (
                <div key={job.title}>
                  <div
                    className={
                      `flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3 md:py-6 cursor-pointer rounded-md transition-colors ${expanded ? 'bg-gray-50' : 'hover:bg-gray-50'}`
                    }
                    onClick={() => setOpenIndex(expanded ? null : idx)}
                    aria-expanded={expanded}
                    aria-controls={`job-details-${idx}`}
                    tabIndex={0}
                    role="button"
                  >
                    <div className="ml-4 md:ml-8">
                      <div className="text-xl font-semibold text-slate-900">{job.title}</div>
                      <div className="text-sm text-slate-600">{job.location} • {job.type}</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      {!expanded && (
                        <span
                          className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-base bg-white border border-gray-300 rounded-md text-black font-normal transition-colors select-none mr-4 md:mr-8"
                        >
                          Read More
                        </span>
                      )}
                    </div>
                  </div>
                  {expanded && (
                    <div id={`job-details-${idx}`} className="mb-6 mt-6 flex flex-col gap-4 animate-fade-in mx-2 sm:mx-2 md:mx-4 lg:mx-8">
                      <div className="mb-1"><span className="font-semibold">Experience:</span> {job.experience}</div>
                      <div className="mb-1"><span className="font-semibold">Qualification:</span> {job.qualification}</div>
                      <div className="mb-1">
                        <div className="font-semibold">About the Role:</div>
                        <div className="text-justify">{job.about}</div>
                      </div>
                      <div className="mb-1">
                        <div className="font-semibold">Key Responsibilities:</div>
                        <div className="text-justify">{job.responsibilities}</div>
                      </div>
                      <div className="mb-1">
                        <div className="font-semibold">Ideal Candidate Profile:</div>
                        <div className="text-justify">{job.ideal}</div>
                      </div>
                      <div className="mb-1">
                        <div className="font-semibold">Why FieldNet?</div>
                        <div className="text-justify">{job.why}</div>
                      </div>
                      <div className="flex justify-end">
                        <a
                          href={`mailto:info@fieldnetglobal.com?subject=Application for ${encodeURIComponent(job.title)}`}
                          className="mt-4 inline-flex items-center px-2 py-1 text-xs md:px-4 md:py-2 md:text-base bg-cyan-600 text-white font-medium rounded hover:bg-cyan-700 w-max mr-4 md:mr-8"
                        >
                          Apply
                        </a>
                      </div>
                    </div>
                  )}
                  {idx !== jobs.length - 1 && (
                    <hr className="border-0 border-t border-dashed border-gray-300" />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
