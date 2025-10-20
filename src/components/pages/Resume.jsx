import React from 'react';
import { faFireFlameCurved, faGraduationCap, faUserTie, faGears} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ResumeCard from '../content-display/ResumeCard';
import '../../styles/shared.css';
const Resume = () => {
  const summary = {
    location: 'Minneapolis, MN',
    blurb: 'Software developer with a track record of shipping large-scale scheduling platforms, analytics dashboards, and clinician-facing tooling across automotive, healthcare, and financial industries. Reach out via the contact form for collaboration or questions.',
  };

  const education = [
    {
      school: 'University of Minnesota',
      location: 'Minneapolis, MN',
      items: [
        { title: 'M.S. in Computer Science', detail: 'Anticipated December 2025' },
        { title: 'B.S. in Computer Science and Mathematics', detail: 'December 2019' },
      ],
    },
  ];

  const experience = [
    {
      company: 'Blain’s Farm and Fleet',
      location: 'Janesville, WI',
      role: 'Software Developer',
      dates: 'January 2022 – June 2023',
      achievements: [
        'Led development of a new automotive services scheduling system and customer-facing website that enabled over 300,000 appointments in one year.',
        'Managed deployment to AWS with an Azure DevOps pipeline and Docker-based infrastructure.',
        'Integrated the automotive system with existing store software to streamline in-store checkout workflows.',
        'Enhanced internal call center tooling to speed up vehicle order scheduling and customer support.',
        'Modernized intranet error handling with Microsoft Power Automate for precise alerting.',
      ],
      skills: ['C#', '.NET', 'JavaScript', 'React', 'Redux', 'Redux Toolkit', 'RTK Query', 'Docker', 'Entity Framework', 'SQL'],
    },
    {
      company: 'Epic Systems',
      location: 'Madison, WI',
      role: 'Software Developer',
      dates: 'February 2020 – December 2021',
      achievements: [
        'Migrated high-impact clinician-facing workflows to a modern web client, including reusable form infrastructure.',
        'Designed and implemented performance testing processes to safeguard new releases.',
        'Delivered multi-form viewing capabilities so clinicians could compare patient records side by side.',
        'Resolved hundreds of bugs spanning accessibility fixes and critical time-sensitive issues.',
      ],
      skills: ['C#', 'JavaScript', 'TypeScript', 'MUMPS', 'Fiddler', 'Visual Studio Profiler'],
    },
    {
      company: 'TCF Bank',
      location: 'Plymouth, MN',
      role: 'IT Digital Intern',
      dates: 'May 2018 – August 2018',
      achievements: [
        'Built DevOps dashboards that visualized deployment pipelines for the web platform team.',
        'Connected to Jenkins, Octopus, and VersionOne APIs via C#/.NET to centralize release status data in SQLite.',
      ],
      skills: ['C#', 'JavaScript', 'jQuery', 'VersionOne'],
    },
    {
      company: 'Optum',
      location: 'Minnetonka, MN',
      role: 'IT Digital Intern',
      dates: 'June 2017 – August 2017',
      achievements: [
        'Developed Splunk dashboards that clarified data management health for operations teams.',
        'Performed Python-based feature engineering to identify repeat callers in support center analytics.',
      ],
      skills: ['Python', 'Splunk'],
    },
  ];

  const technicalSkills = {
    languages: ['C#', 'JavaScript / HTML / CSS', 'SQL', 'TypeScript', 'MUMPS', 'Python'],
    frameworks: ['React', 'Redux', 'Redux Toolkit', 'RTK Query', 'jQuery', '.NET', 'Entity Framework', 'Fluent API'],
    tools: ['Git', 'Docker', 'AWS', 'Fiddler', 'Postman', 'Jira', 'CI/CD', 'Microsoft Power Automate'],
  };

  const cards = [
    {
      header: "Summary",
      icon: faFireFlameCurved,
      fragment: (
        <div className="resume-summary">
          <p>{summary.blurb}</p>
          <div className="resume-summary-contact">
            <span>{summary.location}</span>
            <span><a href="/contact">Contact form</a></span>
          </div>
        </div>
      ),
    },
    {
      header: "Education",
      icon: faGraduationCap,
      fragment: (
        <div className="resume-section">
          {education.map((entry) => (
            <div className="resume-entry" key={entry.school}>
              <div className="resume-entry-header">
                <h3>{entry.school}</h3>
                <span>{entry.location}</span>
              </div>
              <ul>
                {entry.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      header: "Work Experience",
      icon: faUserTie,
      fragment: (
        <div className="resume-section">
          {experience.map((role) => (
            <div className="resume-entry" key={`${role.company}-${role.role}`}>
              <div className="resume-entry-header">
                <h3>{role.company}</h3>
                <span>{role.location}</span>
              </div>
              <div className="resume-entry-meta">
                <strong>{role.role}</strong>
                <span>{role.dates}</span>
              </div>
              <ul>
                {role.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="resume-entry-skills">
                <span>Tools & Tech:</span>
                <span>{role.skills.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      header: "Technical Skills",
      icon: faGears,
      fragment: (
        <div className="resume-section resume-skills">
          <div>
            <h4>Languages</h4>
            <p>{technicalSkills.languages.join(', ')}</p>
          </div>
          <div>
            <h4>Frameworks</h4>
            <p>{technicalSkills.frameworks.join(', ')}</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>{technicalSkills.tools.join(', ')}</p>
          </div>
        </div>
      ),
    }
  ];
  return (
    <>
      <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <div className="content-container">
        <h1>
          Resume
        </h1>
        <div className="cards-container">
          {cards.map((c) => {
            return (
              <ResumeCard
                key={c.header}
                header={c.header}
                icon={c.icon}
                fragment={c.fragment}
              />
            );
          })}
        </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Resume;
