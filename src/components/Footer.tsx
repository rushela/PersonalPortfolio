export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full py-8 bg-gray-900 dark:bg-gray-950 text-gray-400 border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p>© {currentYear} Gavindu Rushela Ekanayaka. All rights reserved.</p>
      </div>
    </footer>;
};