import React from "react";

const Footer = () => {
    return (
        <div className="flex">
            <footer className="footer p-10 bg-light-secondary-300 dark:bg-dark-primary-700 text-black dark:text-neutral-200 w-full justify-center items-baseline px-24">
                <aside>

                    <p>Get it done<br />Todolist that will be completed<br /><br />A project by:<br /><a href="https://github.com/thoiar" target="_blank" className="text-light-accent1-400 font-medium hover:uppercase">Tonio</a> - <a href="https://github.com/workingj" target="_blank" className="text-light-accent1-400 font-medium hover:uppercase">Joe</a> - <a href="https://github.com/Fern2023" target="_blank" className="text-light-accent1-400 font-medium hover:uppercase">Fernando</a> - <a href="https://github.com/Bepixeled" target="_blank" className="text-light-accent1-400 font-medium hover:uppercase">Christina</a></p>
                </aside>
                <nav>

                </nav>
            </footer></div>
    )
}

export default Footer;