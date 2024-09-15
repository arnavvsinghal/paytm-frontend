function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 text-white p-2 m-2.5 font-medium rounded-lg text-sm"
    >
      {label}
    </button>
  );
}

export default Button;
