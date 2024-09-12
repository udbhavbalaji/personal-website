import Form from "./Form";

export default function FormSection() {
  return (
    <div className='flex-grow'>
      <div className='container flex flex-wrap items-center justify-center mx-auto relative my-20 w-9/12 bg-gray-800 rounded-lg'>
        <h2 className='text-4xl font-semibold my-10 w-full mx-auto text-center'>
          Predict
        </h2>
        <Form className='w-2/3 mx-auto p-4' />
      </div>
    </div>
  );
}
