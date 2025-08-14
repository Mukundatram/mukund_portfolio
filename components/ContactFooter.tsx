import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import './StarsBackground.css';
const ContactFooter: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const socialLinks = [
    { name: 'GitHub', icon: <GitHubIcon className="w-7 h-7" />, url: 'https://github.com/mukund-v-atram' },
    { name: 'LinkedIn', icon: <LinkedInIcon className="w-7 h-7" />, url: 'https://www.linkedin.com/in/mukund-atram/' },
    { name: 'Email', icon: <MailIcon className="w-7 h-7" />, url: 'mailto:mukundvatram@gmail.com' },
  ];
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('sending');
      setMessage('');

      const formData = new FormData(event.currentTarget);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            setStatus('success');
            setMessage('Your message has been sent successfully!');
            (event.target as HTMLFormElement).reset();
        } else {
            setStatus('error');
            setMessage(result.message || 'An error occurred. Please try again.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred. Please check your connection and try again.');
      }
  };

  return (
    <footer id="contact" className="bg-slate-950/50 border-t border-slate-800 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities. Fill out the form below or find me on social media. My phone is +91 9356803605.
        </p>
        
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit}>
                {/* IMPORTANT: Replace with your own access key from web3forms.com */}
                <input type="hidden" name="access_key" value="2403f1f7-6532-4dbe-ac1e-21b27fd548f4" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                <input type="checkbox" name="botcheck" className="hidden" />


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required className="form-input" />

                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required className="form-input" />
                </div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows={5} required className="form-textarea mb-4"></textarea>
                <button type="submit" disabled={status === 'sending'} className="form-btn">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {status === 'success' && <p className="form-success mt-4">{message}</p>}
            {status === 'error' && <p className="form-error mt-4">{message}</p>}
        </div>

        <div className="flex justify-center items-center gap-6 mt-12 mb-8">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-400 hover:text-cyan-400 transition-transform duration-300 transform hover:scale-110">
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