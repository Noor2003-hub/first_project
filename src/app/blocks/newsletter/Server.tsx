import ButtonCustom from '@/app/(frontend)/components/ButtonCustom';
import CustomInput from '@/app/(frontend)/components/CustomInput';
import React from 'react';

type Props = {
  heading?: string;
  placeholderText?: string;
  buttonLabel?: string;
  backgroundColor?: string;
};

const NewsletterCTAServer: React.FC<Props> = ({
  heading,
  placeholderText,
  buttonLabel,
  backgroundColor,
}) => {
  console.log('Newsletter block props:', { heading, placeholderText, buttonLabel, backgroundColor });

  return (
    <section className="py-10 px-6 text-white w-[70%] mx-auto justify-center items-center rounded-4xl relative z-50 translate-y-20" style={{ backgroundColor }}>
      <div className="flex flex-col md:flex-row justify-center w-full items-center">
        {/* Green section takes 1/2 */}
        <h2 className="text-6xl flex-1 font-bold leading-tight">
          {heading}
        </h2>

        {/* Blue section takes the other 1/2 */}
        <div className="flex flex-col  gap-3 items-center space-y-2 flex-1">
          <div className='w-full md:w-2/3'>
          <CustomInput placeholder={placeholderText} style="" icon="/images/email.png" />
          <ButtonCustom title={buttonLabel} href='/' theme='light'/></div>
        </div>
      </div>
    </section>

  );
};

export default NewsletterCTAServer;
