import React from "react";

function Message() {
    let src = "/profile-pic.png";
    return (
        <div className="bg-gray-700 flex justify-center items-center text-white min-h-screen">
            <div className="max-w-lg">
                <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                    <img
                        src={src}
                        className="w-10 mr-4 rounded-full h-10"
                        alt=""
                    />
                    <div>
                        <p className="flex items-baseline">
                            <span className="text-green-500 mr-2 text-sm  font-medium">
                                talhazaryab
                            </span>
                            <span className="text-xs   text-gray-500">
                                10/03/2023
                            </span>
                        </p>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repellat necessitatibus animi eius assumenda
                            quo perspiciatis, molestias deleniti id atque
                            quibusdam.
                        </p>
                    </div>
                </div>

                <div className="mt-1  hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                    <p className="text-gray-300 pl-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat necessitatibus animi eius assumenda quo
                        perspiciatis, molestias deleniti id atque quibusdam.
                    </p>
                </div>
                <div className="mt-1  hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                    <p className="text-gray-300 pl-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat necessitatibus animi eius assumenda quo
                        perspiciatis, molestias deleniti id atque quibusdam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Message;
