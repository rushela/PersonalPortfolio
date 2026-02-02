export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full py-8 border-t" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)', borderColor: 'var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p>© {currentYear} Gavindu Rushela Ekanayaka. All rights reserved.</p>
      </div>
    </footer>;
};