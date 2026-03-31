interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`scroll-mt-20 py-12 md:py-20 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
