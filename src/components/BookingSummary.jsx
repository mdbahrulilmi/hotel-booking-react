import React from 'react';
import Button from './Button';

function BookingSummary () 
{

  const summaryItems = [
    { label: 'Room Total (1 night)', value: '300.00' },
    { label: 'Extra Person', value: '0.00' },
    { label: 'Extras', value: '30.00' },
    { type: 'divider' },
    { label: 'SubTotal', value: '330.00' },
    { label: 'Discount', value: '-33.00 (10%)' },
    { label: 'Fixed Amount Taxes', value: '13.00' },
    { type: 'spacer' },
    { label: 'Total', value: '320.00', highlight: true }
  ];

  function handleClose () 
  {
    console.log('Close button clicked');
  };

  function handleCheckOut () 
  {
    console.log('Check Out button clicked');
  };

  return (
    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-medium mb-5">Booking Summary</h2>
      
      <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 mb-10">
        {summaryItems.map((item, index) => {
          if (item.type === 'divider') {
            return <hr key={`divider-${index}`} className="col-span-2 my-2" />;
          }
          
          if (item.type === 'spacer') {
            return <div key={`spacer-${index}`} className="col-span-2 h-4" />;
          }
          
          return (
            <React.Fragment key={index}>
              <p className={`font-medium ${item.highlight ? 'text-orange-600 text-lg' : ''}`}>
                {item.label}
              </p>
              <p className={`text-right ${item.highlight ? 'text-orange-600 font-bold text-2xl' : ''}`}>
                {item.value}
              </p>
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="flex justify-end gap-5">
        <Button 
          label="Close" 
          className="bg-white border border-gray-300 text-gray-700 hover:bg-neutral-2
          00"
          onClick={handleClose}
        />
        <Button 
          label="Check Out" 
          className="bg-orange-600 hover:bg-orange-700 text-white" 
          onClick={handleCheckOut}
        />
      </div>
    </div>
  );
};

export default BookingSummary;