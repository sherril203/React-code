const CutsomButton = ({ className, type, buttonName, onClick }) => {
  return (
    <button
      className={`flex-1 px-4 py-2 rounded text-white ${className}`}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default CutsomButton;
