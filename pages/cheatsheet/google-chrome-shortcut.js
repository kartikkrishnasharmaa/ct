import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";

export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>Google Chrome Shortcut  | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Google Chrome Shortcut" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Google Chrome Shortcuts</h2>
                    <p className="mt-7">These cheatsheets serve as quick guides that programmers can refer to when they need a rapid reminder or clarification on specific coding concepts, functions, or techniques. </p>

                    <h2 className=" text-blue-700 text-xl mt-5 text-center sm:text-xl  xl:text-2xl dark:text-blue">Tab and Window</h2>
                    <table className="table-fixed w-full mt-10">
                        <thead className="text-xs font-semibold uppercase text-white bg-blue-700">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Key</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base divide-y">
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">N</kbd>
                                    </div>
                                </td>
                                <td className="p-2 ">
                                    <div className="text-left font-medium ">Open a new window
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Shift</kbd>
                                        <kbd className="p-1 border border-gray-700">N</kbd>

                                    </div>
                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Open a new window in Incognito mode
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">T</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Open a new tab, and jump to it
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Shift</kbd>
                                        <kbd className="p-1 border border-gray-700">T</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Reopen the last closed tab, and jump to it
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">1</kbd>
                                        <kbd className="p-1 border border-gray-700">9</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Jump to a specific tab
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Tab</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Jump to the next open tab
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Shift</kbd>
                                        <kbd className="p-1 border border-gray-700">Tab</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Jump to the previous open tab
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">W</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Close the current tab or pop-up
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="text-left font-bold">

                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Shift</kbd>
                                        <kbd className="p-1 border border-gray-700">W</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="text-left font-medium ">Close the current window
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 ">
                                    <div className="font-bold">
                                        <kbd className="p-1 m-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">Shift</kbd>
                                        <kbd className="p-1 border border-gray-700">Q</kbd>
                                    </div>

                                </td>
                                <td className="p-1 ">
                                    <div className="font-medium ">Quit Google Chrome
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <h2 className=" text-blue-700 text-xl mt-5 text-center sm:text-xl  xl:text-2xl dark:text-blue">Webpage Shortcut</h2>
                    <table className="table-fixed w-full mt-10">
                        <thead className="text-xs font-semibold uppercase text-white bg-blue-700">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Key</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base divide-y">
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">P</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Print your current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">S</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">open option to save your current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">R</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Reload current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">shift</kbd>
                                        <kbd className="p-1 border border-gray-700">R</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Reload current page, ignoring cached content
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">Esc</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Stop the page loading
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">F</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Open the find bar to search the current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">Tab</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Browse clickable items moving forward
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">shift</kbd>
                                        <kbd className="p-1 border border-gray-700">Tab</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Browse clickable items moving backward
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">O</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Open a file from your computer in Google Chrome
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">U</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">View a page’s source code of current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">D</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Bookmark your current webpage
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">F11</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Print your current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">+</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Zoom in your current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">-</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Zoom out your current page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">space</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Scroll down the web page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">shift</kbd>
                                        <kbd className="p-1 border border-gray-700">space</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Scroll up the web page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">Home</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Go to the top of the page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">End</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Go to the bottom of the page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">alt</kbd>
                                        <kbd className="p-1 border border-gray-700">Home</kbd>

                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Open your homepage in the current tab
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className=" text-blue-700 text-xl mt-5 text-center sm:text-xl  xl:text-2xl dark:text-blue">Address Bar Shortcut</h2>
                    <table className="table-fixed w-full mt-10">
                        <thead className="text-xs font-semibold uppercase text-white bg-blue-700">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Key</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base divide-y">
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">k</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Search from anywhere on the page
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">l</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">jump to address bar
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">ctrl</kbd>
                                        <kbd className="p-1 border border-gray-700">F5</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Move cursor to the address bar
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </Cheatlayout>;
};