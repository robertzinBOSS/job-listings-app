import * as React from 'react';

export function Header(): JSX.Element {
    return (
        <header>
            <div className="bg-desaturated-dark-cyan bg-[url(/assets/svgs/bg-header-mobile.svg)] xl:bg-[url(/assets/svgs/bg-header-desktop.svg)] h-[156px] bg-bottom bg-cover" />
        </header>
    );
}
