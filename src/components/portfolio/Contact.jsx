import Title from "@components/ui/Title";
import { contactItems } from "@data/portfolio";
import ContactItem from "@components/portfolio/ContactItem";

function Contact() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto my-16 relative'>
        <div className='py-1 absolute top-0 w-full'>
          <Title
            id='contact'
            className={
              "text-2xl font-bold underline underline-offset-8 decoration-4 w-9/12 mx-auto"
            }
          >
            Contact
          </Title>
        </div>
        <div className='inline-grid grid-cols-3 w-9/12 items-center justify-between my-24'>
          {contactItems.map((item, index) => (
            <ContactItem
              title={item.title}
              link={item.link}
              type={item.type}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
