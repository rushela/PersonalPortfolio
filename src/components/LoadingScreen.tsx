import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
          className="mb-6 sm:mb-8"
        >
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            Gavindu Rushela
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl mt-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-1.5 sm:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: 'var(--text-muted)' }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};