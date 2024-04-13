import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const JobOffers = () => {
    const jobs =  useLoaderData();
    return (
        <div className='min-h-screen'>
            {
                jobs.map(job => <Job job={job}/>)
            }
        </div>
    );
};

export default JobOffers;