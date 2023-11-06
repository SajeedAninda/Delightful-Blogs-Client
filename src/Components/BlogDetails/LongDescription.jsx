import React from 'react';

function LongDescription({ longDescription }) {
  const paragraphs = longDescription?.split('\n\n');

  return (
    <div>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className='text-xl text-[#1b1f20] font-medium' style={{ marginBottom: '1.5rem' }}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default LongDescription;
