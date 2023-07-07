const Section: React.FC<SectionProps> = ({ sectionId, title, children }) => (
  <section
    className="py-32 mx-auto max-w-7xl border-b border-dashed lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl"
    id={sectionId}
  >
    <div className="h-full">
      <div className="flex justify-center mb-16">
        <h2 className="font-bold relative text-4xl title md:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
