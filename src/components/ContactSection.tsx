import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {
  // replace your useState + action/form attributes with the hook
  const [state, handleSubmit] = useForm('xjkwwaov');

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* form column */}
          <div className="w-full md:w-1/2">
            {state.succeeded ? (
              <div className="text-green-400 text-center text-lg font-semibold py-12">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="you@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white resize-none"
                    placeholder="Your message…"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors w-full disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* contact info column (unchanged) */}
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-gray-800 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+94 76 690 2338</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-gray-800 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">rushelbit17@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <a
                  href="https://github.com/rushela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rushela-ekanayaka-357072345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
