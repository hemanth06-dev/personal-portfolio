import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-3  text-green-500 rounded-2xl mb-6">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Let's Work Together</h2>
            <p className=" text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
                 px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                Send Email
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
                 px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                View Resume
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};