import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";

export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>Youtube Shortcut  | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Youtube Shortcut" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">Youtube Shortcuts</h2>

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
                                        <kbd className="p-1 border border-gray-700">Spacebar </kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Play/Pause when the seek bar is selected.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">K</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Play/Pause when the video player is in focus.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">↑</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Increase volume 5% when the volume menu is in focus.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">↓</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Decrease volume 5% when the volume menu is in focus.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">←</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Seek backward 5 seconds when the seek bar is selected.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">→</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Seek forward 5 seconds when the seek bar is selected.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">J</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Seek backward 10 seconds when the video player is in focus.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left font-bold">
                                        <kbd className="p-1 border border-gray-700">L</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Seek forward 10 seconds when the video player is in focus.
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
                                    <div className="text-left font-medium "> Seek to the beginning of the video when the seek bar is selected.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left">
                                        <kbd className="p-1 border border-gray-700">End</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium "> Seek to the end of the video when the seek bar is selected.
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="text-left">
                                        <kbd className="p-1 border border-gray-700">f</kbd>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-left font-medium ">Activate full screen. If full screen mode is enabled, activate F again or press escape to exit full screen mode.

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