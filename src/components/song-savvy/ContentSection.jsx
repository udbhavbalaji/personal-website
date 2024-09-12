import Button from "@components/ui/Button";

export default function ContentSection({
  title,
  paraContent,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div className='flex-grow'>
      <div className='container flex flex-wrap items-center justify-center mx-auto relative my-20 w-7/12 bg-gray-800 rounded-lg'>
        <h2 className='text-4xl font-semibold mt-10 mb-4 w-full mx-auto text-center'>
          {title}
        </h2>
        {paraContent.map((para, index) => (
          <p
            key={index}
            className='text-stone-400 font-medium text-md px-6 py-3'
          >
            {para}
          </p>
        ))}
        <Button title={buttonTitle} link={buttonLink} />
      </div>
    </div>
  );
}
