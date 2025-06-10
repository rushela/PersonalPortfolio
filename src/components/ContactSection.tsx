import { Phone, Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  // replace your useState + action/form attributes with the hook
  const [state, handleSubmit] = useForm('xjkwwaov');

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+94 76 690 2338</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">rushelbit17@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <a
                  href="https://github.com/rushela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rushela-ekanayaka-357072345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2"
          >
            {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-green-500/20 rounded-xl border border-green-500/30"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Your message..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
