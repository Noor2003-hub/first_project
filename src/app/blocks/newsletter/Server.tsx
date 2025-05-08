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
    <section className={`py-10 px-6 text-white`} style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <h2 className="text-2xl font-bold max-w-md leading-tight">
          {heading}
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <input
          type="email"
          placeholder={placeholderText}
          className="px-4 py-2 rounded-md text-black bg-white w-full md:w-72"
        />

          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTAServer;
