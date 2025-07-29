const Card = ({ event }) => {
    return (
        <div className="w-[25vw] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 p-4">
            <img src={event.src} alt={event.title} className="w-full h-40 object-cover rounded-[.3rem]" />
            <div className="p-1 flex flex-col gap-2">
                <div className="container flex justify-between">
                    <p className="text-sm bg-[#FEE2E2] w-fit p-[.3rem] rounded-[.3rem]">{event.mode}</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="size-6 stroke-gray-500 fill-transparent hover:stroke-black hover:fill-black transition"
                        strokeWidth="1.5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                <p className="text-sm">{event.content}</p>
                <div className="text-sm space-y-1">
                    <p className="font-bold"><span className="font-medium">Start: </span> {event.start}</p>
                    <p className="font-bold"><span className="font-medium">Duration: </span> {event.duration}</p>
                    <p className="font-bold"><span className="font-medium">Prize Pool: </span> {event.prize}</p>
                </div>
                <button className="mt-3 bg-[#EB5B00] text-white px-4 py-2 rounded-lg hover:text-white hover:bg-black transition">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Card;