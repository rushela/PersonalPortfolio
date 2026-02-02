import { Phone, Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Editorial Style */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p 
            className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Contact
          </p>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic mb-4 sm:mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            Get in touch
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg max-w-xl mx-auto px-4"
            style={{ color: 'var(--text-body)' }}
          >
            Have a question or want to work together? Feel free to reach out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 
                className="text-xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: 'var(--text-heading)',
                  fontWeight: 'normal'
                }}
              >
                Let's connect
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <a href="tel:+94766902338" className="flex items-center gap-3 sm:gap-4 hover:opacity-70 transition-opacity">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                  <span className="text-sm sm:text-base" style={{ color: 'var(--text-body)' }}>+94 76 690 2338</span>
                </a>
                
                <a href="mailto:gavindurushel@gmail.com" className="flex items-center gap-3 sm:gap-4 hover:opacity-70 transition-opacity">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                  <span className="text-sm sm:text-base break-all" style={{ color: 'var(--text-body)' }}>gavindurushel@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                  <span className="text-sm sm:text-base" style={{ color: 'var(--text-body)' }}>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6" style={{ borderTop: '1px solid var(--border-light)' }}>
              <h4 
                className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6"
                style={{ color: 'var(--text-muted)' }}
              >
                Follow me
              </h4>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="https://github.com/rushela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm transition-opacity hover:opacity-60"
                  style={{ color: 'var(--text-heading)' }}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rushela-ekanayaka-357072345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm transition-opacity hover:opacity-60"
                  style={{ color: 'var(--text-heading)' }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSuccess ? (
              <div 
                className="text-center py-12 px-8"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <h3 
                  className="text-2xl italic mb-4"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    color: 'var(--text-heading)',
                    fontWeight: 'normal'
                  }}
                >
                  Message sent!
                </h3>
                <p style={{ color: 'var(--text-body)' }}>
                  Thank you for your message. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 text-red-600 bg-red-50 rounded" style={{ border: '1px solid #fecaca' }}>
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm tracking-wide mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-transparent transition-all duration-300 focus:outline-none"
                      style={{ 
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-heading)',
                        borderRadius: '2px'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm tracking-wide mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-transparent transition-all duration-300 focus:outline-none"
                      style={{ 
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-heading)',
                        borderRadius: '2px'
                      }}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm tracking-wide mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-transparent transition-all duration-300 focus:outline-none"
                    style={{ 
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-heading)',
                      borderRadius: '2px'
                    }}
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm tracking-wide mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-transparent transition-all duration-300 focus:outline-none resize-none"
                    style={{ 
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-heading)',
                      borderRadius: '2px'
                    }}
                    placeholder="Your message..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-8 py-3 text-sm tracking-wide transition-all duration-300 hover:opacity-80 disabled:opacity-50"
                    style={{ 
                      backgroundColor: 'var(--text-heading)',
                      color: 'var(--bg-main)',
                      borderRadius: '2px'
                    }}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
