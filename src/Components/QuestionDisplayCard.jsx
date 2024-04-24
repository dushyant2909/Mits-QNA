import React from 'react';

function QuestionDisplayCard({ question }) {
  console.log("card::", question);

  const htmlString = question.description;

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const formattedText = doc.body.textContent; // Extract text content without HTML tags

  return (
    <div className='border border-black/40 shadow-md grid grid-cols-8 p-3 px-4 rounded-md'>
      <div className="col-span-1 flex flex-col items-center gap-2 justify-center text-gray-700">
        <div className="">{question.voteCount} Votes</div>
        <div className="">{question.viewCount} Answers</div>
      </div>
      <div className="col-span-7 flex flex-col gap-4 bg-yellow-50 rounded-xl border-[0.1px] border-gray-200 p-2 pl-3 cursor-pointer">
        <div className="font-medium text-lg text-blue-800 hover:text-blue-950 transition-all">{formattedText}</div>
        <div className="flex items-center justify-between">
          {/* Show all tags */}
          <div className="flex gap-2">
            {question.tags.map(tag => (
              <div key={tag._id} className="bg-gray-200 py-1 px-3 flex items-center justify-center rounded-lg">{tag.tagName}</div>
            ))}
          </div>
          <div className="text-sm pr-3 text-gray-700 hover:text-gray-800">{question.publishedBy.enrollmentNumber}</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDisplayCard;
