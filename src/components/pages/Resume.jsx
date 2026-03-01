import React from 'react';
import { faFireFlameCurved, faGraduationCap, faUserTie, faGears} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ResumeCard from '../content-display/ResumeCard';
import '../../styles/shared.css';
const Resume = () => {
  const summary = {
    blurb: 'Software Engineer with 5+ years of experience designing and modernizing full-stack systems in retail, healthcare, and workforce management domains. Strong background in C#/.NET, React, and Azure DevOps with experience in microservice architecture, CI/CD modernization, and cloud deployment strategy.',
  };

  const education = [
    {
      school: 'University of Minnesota',
      location: 'Minneapolis, MN',
      items: [
        { title: 'M.S. in Computer Science', detail: 'December 2026' },
        { title: 'B.S. in Computer Science and Mathematics', detail: 'December 2019' },
      ],
    },
  ];

  const experience = [
    {
      company: 'TempWorks Software',
      location: 'Bloomington, MN',
      role: 'Software Engineer',
      dates: 'July 2024 – Present',
      achievements: [
        'Designed and implemented a microservice integrating TempWorks’ core platform with a third-party banking partner to enable earned wage access for temporary workers.',
        'Migrated classic Azure DevOps pipelines to YAML-based CI/CD workflows, enabling automated deployments to Azure App Services and improving release reliability.',
        'Led performance testing during cloud migration initiative, identifying latency increases when decoupling API services from database infrastructure and influencing infrastructure deployment strategy.',
      ],
    },
    {
      company: 'Blain’s Farm and Fleet',
      location: 'Janesville, WI',
      role: 'Software Developer',
      dates: 'January 2022 – June 2023',
      achievements: [
        'Led full-stack development of automotive services scheduling platform (C#/.NET, React), enabling 300,000+ customer appointments in the first year.',
        'Integrated platform with legacy store systems to streamline in-store checkout workflows.',
        'Automated AWS deployments using Docker and Azure DevOps pipelines.',
        'Modernized intranet error handling and alerting using Power Automate.',
      ],
    },
    {
      company: 'Epic Systems',
      location: 'Madison, WI',
      role: 'Software Developer',
      dates: 'February 2020 – December 2021',
      achievements: [
        'Oversaw migration of clinical forms to modern web client, building reusable infrastructure for patient data entry workflows.',
        'Designed performance testing framework to prevent regressions and ensure feature reliability.',
        'Improved reliability and accessibility of large-scale healthcare application by resolving high-priority defects.',
      ],
    },
  ];

  const technicalSkills = {
    coreLanguages: ['C#', 'JavaScript and TypeScript', 'SQL'],
    backend: ['.NET', 'Entity Framework', 'REST APIs'],
    frontend: ['React', 'Redux', 'RTK Query'],
    cloudAndDevOps: ['Azure', 'Azure DevOps (YAML)', 'Docker'],
  };

  const cards = [
    {
      header: "Summary",
      icon: faFireFlameCurved,
      fragment: (
        <div className="resume-summary">
          <p>{summary.blurb}</p>
          <div className="resume-summary-contact">
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
              {role.achievements.length > 0 && (
                <ul>
                  {role.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
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
            <h4>Core Languages</h4>
            <p>{technicalSkills.coreLanguages.join(', ')}</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>{technicalSkills.backend.join(', ')}</p>
          </div>
          <div>
            <h4>Frontend</h4>
            <p>{technicalSkills.frontend.join(', ')}</p>
          </div>
          <div>
            <h4>Cloud and DevOps</h4>
            <p>{technicalSkills.cloudAndDevOps.join(', ')}</p>
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
