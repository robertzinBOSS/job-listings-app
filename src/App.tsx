import * as React from 'react';
import { Filters, Footer, Header, List } from './components';
import { Job } from './db';
import data from './db/data.json';

export default function App(): JSX.Element {
    const [filters, setFilters] = React.useState<string[]>([]);
    const jobs =
        filters.length > 0
            ? data.filter(j =>
                  filters.every(f =>
                      [j.role, j.level, ...j.languages, ...j.tools].includes(f),
                  ),
              )
            : data;

    return (
        <>
            <Header />
            <main>
                <div className="md:max-w-5xl md:mx-auto">
                    {filters.length > 0 && (
                        <Filters filters={filters} setFilters={setFilters} />
                    )}
                    <List jobs={jobs as Job[]} setFilters={setFilters} />
                </div>
            </main>
            <Footer />
        </>
    );
}
