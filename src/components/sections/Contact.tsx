import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
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
            <div className="inline-block p-3 bg-black text-white rounded-2xl mb-6">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
                Send Email
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
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