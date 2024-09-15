function InputBox({onChange, label, placeholder }) {
  return (
    <div className="p-2.5">
      <div className="text-sm font-medium">{label}</div>
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full border rounded border-slate-200 p-1"
      />
    </div>
  );
}

export default InputBox;
