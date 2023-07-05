const Section: React.FC<SectionProps> = ({ sectionId, title, children }) => (
  <section className="py-32 mx-auto max-w-7xl border-b border-dashed" id={sectionId}>
    <div className="h-full">
      <div className="flex justify-center mb-16">
        <h2 className="font-bold text-5xl relative title">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
