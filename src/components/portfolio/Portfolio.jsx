import { portfolioItems } from "@data/portfolio";
import PortfolioItem from "@components/portfolio/PortfolioItem";
import Title from "@components/ui/Title";

function Portfolio() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto relative'>
        <div className='py-1 absolute top-0 w-full'>
          <Title
            id='portfolio'
            className={
              "text-2xl font-bold underline underline-offset-8 decoration-4 w-9/12 mx-auto"
            }
          >
            Projects
          </Title>
        </div>
        <div className='w-9/12 mt-1'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
            {portfolioItems.map((project, index) => (
              <PortfolioItem
                title={project.title}
                imgUrl={project.imgUrl}
                stack={project.stack}
                techSkills={project.techSkills}
                link={project.link}
                description={project.description}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
