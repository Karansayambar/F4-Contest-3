const Input = ({ type, state, setState, placeholder }) => {
  return (
    <>
      <input
        type={type}
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default Input;
