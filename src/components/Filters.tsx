import * as React from 'react';

type FiltersProps = {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Filters({ filters, setFilters }: FiltersProps): JSX.Element {
    return (
        <div className="mx-5 mb-10 -mt-10 p-5 bg-white rounded-lg shadow-lg flex items-center justify-between gap-4 ">
            <div className="flex flex-wrap gap-4">
                {filters.map(f => (
                    <div key={f} className="flex">
                        <span className="relative text-desaturated-dark-cyan font-bold bg-light-grayish-cyan-ft rounded-l-md px-2.5 py-1">
                            {f}
                        </span>
                        <button
                            type="button"
                            className="bg-desaturated-dark-cyan text-white px-2.5 rounded-r-md font-bold  transition-all duration-300 hover:bg-very-dark-grayish-cyan"
                            onClick={() =>
                                setFilters(prev => prev.filter(pf => pf !== f))
                            }
                        >
                            <img
                                src="/assets/svgs/icon-remove.svg"
                                alt="Icon remove"
                            />
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="font-bold text-dark-grayish-cyan transition-all duration-300 hover:text-desaturated-dark-cyan hover:underline"
                onClick={() => setFilters([])}
            >
                Clear
            </button>
        </div>
    );
}
