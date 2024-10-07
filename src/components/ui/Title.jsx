function Title({ children, id, className }) {
  return (
    <h1 id={id && id} className={className}>
      {children}
    </h1>
  );
}

export default Title;
