const SocialLink = ({ icon, label, light }) => {
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
        light
          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      aria-label={label || "Social link"}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
