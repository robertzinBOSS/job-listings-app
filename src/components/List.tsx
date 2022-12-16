import * as React from 'react';
import { Job } from '../db';
import { Card } from './Card';

type ListProps = {
    jobs: Job[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export function List({ jobs, setFilters }: ListProps): JSX.Element {
    return (
        <div className="m-5 grid gap-10 py-5 lg:my-10 lg:py-10">
            {jobs.map(j => (
                <Card key={j.id} job={j as Job} setFilters={setFilters} />
            ))}
        </div>
    );
}
