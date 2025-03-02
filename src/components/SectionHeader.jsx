const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
      <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeader;
