import { journeyItems } from "@data/portfolio";
import JourneyItem from "@components/portfolio/JourneyItem";
import Title from "@components/ui/Title";

function Journey() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto mt-5 relative'>
        <div className='mt-8 py-1 absolute top-0 w-full'>
          <Title
            className={
              "text-2xl font-bold underline underline-offset-8 decoration-4 w-9/12 mx-auto"
            }
          >
            My Technical Journey
          </Title>
        </div>
        <div className='flex flex-col md:flex-row justify-start my-20 mb-10 w-9/12 bg-stone-50 dark:bg-gray-800 border border-stone-100 dark:border-gray-900 rounded-md'>
          <div className='w-full'>
            <ol className='flex flex-wrap'>
              {journeyItems.map((item, index) => (
                <JourneyItem
                  title={item.title}
                  year={item.year}
                  type={item.type}
                  details={item.details}
                  techStack={item.techStack}
                  index={index}
                  key={index}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
