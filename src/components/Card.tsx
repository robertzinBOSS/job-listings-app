import * as React from 'react';
import { Job } from '../db';

type Props = {
    job: Job;
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

function CardButtons({ job, setFilters }: Props): JSX.Element {
    return (
        <div className="flex flex-wrap gap-4 lg:ml-auto">
            {[job.role, job.level, ...job.languages, ...job.tools].map(l => (
                <button
                    type="button"
                    key={l}
                    className="text-desaturated-dark-cyan font-bold bg-light-grayish-cyan-ft rounded-md py-1 px-2 transition-all duration-300 hover:bg-desaturated-dark-cyan hover:text-white"
                    onClick={() =>
                        setFilters(prev =>
                            prev.includes(l) ? prev : [...prev, l],
                        )
                    }
                >
                    {l}
                </button>
            ))}
        </div>
    );
}

export function Card({ job, setFilters }: Props): JSX.Element {
    return (
        <div
            className={`rounded-lg shadow-lg p-5 bg-white flex flex-col lg:flex-row lg:items-center gap-4 ${
                job.new &&
                job.featured &&
                'border-l-4 border-l-desaturated-dark-cyan'
            }`}
        >
            <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 lg:w-20 lg:h-20 -mt-10 lg:m-0"
            />
            <div className="flex flex-col gap-3 lg:ml-4">
                <div className="flex items-center gap-6 font-bold">
                    <p className="text-desaturated-dark-cyan lg:text-lg">
                        {job.company}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                        {job.new && (
                            <span className="bg-desaturated-dark-cyan text-white uppercase rounded-full px-2 pt-1">
                                New!
                            </span>
                        )}
                        {job.featured && (
                            <span className="bg-very-dark-grayish-cyan text-white uppercase rounded-full px-2 pt-1">
                                Featured
                            </span>
                        )}
                    </div>
                </div>
                <h1 className="font-bold lg:text-xl transition-all duration-300 hover:text-desaturated-dark-cyan cursor-pointer">
                    {job.position}
                </h1>
                <div className="flex items-center gap-3 text-dark-grayish-cyan">
                    <p>{job.postedAt}</p>
                    <p>&bull;</p>
                    <p>{job.contract}</p>
                    <p>&bull;</p>
                    <p>{job.location}</p>
                </div>
            </div>
            <span className="border-b border-b-dark-grayish-cyan opacity-50 lg:hidden" />
            <CardButtons job={job} setFilters={setFilters} />
        </div>
    );
}
