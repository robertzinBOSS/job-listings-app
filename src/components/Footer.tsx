import * as React from 'react';

export function Footer(): JSX.Element {
    return (
        <footer>
            <div className="text-desaturated-dark-cyan text-center py-10">
                <p>Challenge by Frontend Mentor.</p>
                <a
                    href="https://www.frontendmentor.io/profile/robertzinBOSS"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Coded by <em className="underline">Roberto Llontop</em>
                </a>
            </div>
        </footer>
    );
}
