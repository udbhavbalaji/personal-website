function JourneyItem({ index, title, year, type, details, techStack }) {
  return (
    <li key={index} className='w-full mb-6 mx-4 mt-6'>
      <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
        <div className='my-1 text-sm font-normal leading-none'>{year}</div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <span
          className={`inline-block px-2 py-1 text-sm rounded-md ${
            type === "Class"
              ? "class-styles"
              : type === "Project"
              ? "project-styles"
              : "assignment-styles"
          }`}
        >
          {type}
        </span>
      </div>
      <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
        {techStack.map((item, index) => (
          <span
            key={index}
            className='inline-block px-2 py-1 font-semibold border-2 dark:border border-stone-900 dark:border-stone-100 rounded-md my-3'
          >
            {item}
          </span>
        ))}
      </p>
      <p className='my-2 text-base font-normal'>{details}</p>
    </li>
  );
}

export default JourneyItem;
