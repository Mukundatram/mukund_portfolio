
import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

const ContactFooter: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon className="w-7 h-7" />,
      url: 'https://github.com/mukund-v-atram',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon className="w-7 h-7" />,
      url: 'https://www.linkedin.com/in/mukund-atram/',
    },
     {
      name: 'Email',
      icon: <MailIcon className="w-7 h-7" />,
      url: 'mailto:mukundvatram@gmail.com',
    },
  ];

  return (
    <footer id="contact" className="bg-slate-950/50 border-t border-slate-800 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to connect, or call me at +91 9356803605!
        </p>
        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-cyan-400 transition-transform duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Mukund V. Atram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
