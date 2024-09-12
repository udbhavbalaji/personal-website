function Title({ children, id, className }) {
  return (
    <h1
      id={id && id}
      className={className}
      // className='text-2xl font-bold underline underline-offset-8 decoration-4 w-9/12 mx-auto'
    >
      {children}
    </h1>
  );
}

export default Title;
