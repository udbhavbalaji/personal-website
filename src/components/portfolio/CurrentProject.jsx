import Title from "@components/ui/Title";
import { currentProject } from "@data/portfolio";

function CurrentProject() {
  let skills = currentProject.newSkills.join(", ");

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto mt-5 relative'>
      <div className='mt-8 py-1 absolute top-0 w-full'>
        <Title className='text-2xl font-bold underline underline-offset-8 decoration-4 w-9/12 mx-auto'>
          I'm Currently Working On...
        </Title>
      </div>

      <div className='flex flex-col md:flex-row justify-start my-20 mb-10 w-9/12 bg-stone-50 dark:bg-gray-800 border-stone-100 dark:border-stone-900 rounded-md'>
        <img
          src={currentProject.imgUrl}
          className='border-2 border-stone-200 dark:border-black h-50 md:h-100 w-1/2 m-5 object-cover overflow-hidden'
        />

        <div className='flex flex-wrap flex-row w-full m-5'>
          <h3 className='flex text-lg font-semibold w-full mb-2'>
            {currentProject.title}
          </h3>
          <p className='flex gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3 w-full'>
            {currentProject.stack.map((item, index) => (
              <span
                key={index}
                className='inline-block px-2 py-1 font-semibold border-2 dark:border border-stone-900 dark:border-stone-100 rounded-md'
              >
                {item}
              </span>
            ))}
          </p>
          <p className='w-full text-sm md:text-md font-bold mb-3 mx-auto'>
            I'm doing this project to learn
            {` ${skills}`}
          </p>
          {currentProject.description.map((item, index) => (
            <p key={index} className='w-full text-xs md:text-sm mb-3'>
              {item}
            </p>
          ))}

          <a
            href={currentProject.link}
            className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 font-semibold'
          >
            Check out the Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentProject;
