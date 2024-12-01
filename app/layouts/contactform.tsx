import React, { useState,type ChangeEvent, type FormEvent } from 'react';
import CloseIcon from '../svgs/close-icon';
import { useModal } from '../contexts/contactmodalprovider';
import Button from '../components/button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const { close } = useModal();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    console.log("Form data submitted: ", formData);
    close();
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <>
    <div id="form-header" className="flex justify-between items-center px-[24px] py-[16px] border-b border-[#E3E3E3]">
      <h3 className="text-[16px] text-[#3b343b] font-bold">Contact the Seller</h3>
      <CloseIcon className="cursor-pointer" width="24" height="24" onClick={close} />
    </div>
    <form className="contact-form px-[24px] py-[16px]" onSubmit={handleSubmit}>
      <p className="text-[14px] leading-[18px] mb-[8px] font-bold">Your message</p>
      <textarea
        name="message"
        className="text-[14px] leading-[20px] w-full border border-[#3b343b] rounded-[4px] h-[115px] px-[10px] py-[12px] mb-[24px]"
        value={formData.message}
        onChange={handleInputChange}
        required
      />

      <p className="text-[14px] leading-[18px] mb-[8px] font-bold">Name</p>
      <input
        type="text"
        name="name"
        className="text-[14px] leading-[20px] w-full border border-[#3b343b] rounded-[4px] px-[10px] py-[12px] mb-[24px]"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <p className="text-[14px] leading-[18px] mb-[8px] font-bold">Email</p>
      <input
        type="email"
        name="email"
        className="text-[14px] leading-[20px] w-full border border-[#3b343b] rounded-[4px] px-[10px] py-[12px] mb-[24px]"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <div className="flex justify-center">
        <Button className="px-[58px]" background='primary' text="Send" type="submit"/>
      </div>
    </form>
    </>
  );
};

export default ContactForm;