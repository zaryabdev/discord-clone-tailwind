import React from "react";

function Message() {
    let src = "/profile-pic.png";
    return (
        <div className="flex items-center justify-center min-h-screen text-white bg-gray-700">
            <div className="max-w-lg">
                <div className="flex px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
                    <img
                        src={src}
                        className="w-10 h-10 mr-4 rounded-full"
                        alt=""
                    />
                    <div>
                        <p className="flex items-baseline">
                            <span className="mr-2 text-sm font-medium text-green-500">
                                talhazaryab
                            </span>
                            <span className="text-xs text-gray-500">
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

                <div className="px-4 py-1 mt-1 hover:bg-gray-800 hover:bg-opacity-30">
                    <p className="text-gray-300 pl-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat necessitatibus animi eius assumenda quo
                        perspiciatis, molestias deleniti id atque quibusdam.
                    </p>
                </div>
                <div className="px-4 py-1 my-3 mt-1 hover:bg-gray-800 hover:bg-opacity-30">
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
