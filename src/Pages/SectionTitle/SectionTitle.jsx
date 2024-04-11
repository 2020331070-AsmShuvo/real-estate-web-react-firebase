import React from 'react';

const SectionTitle = (title="no title", description="no description") => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-gray-600 text-center'>{title}</h2>
            <h4 className='text-lg font-bold text-gray-600 text-center'>{description}</h4>
        </div>
    );
};

export default SectionTitle;