
function Card(props) {

    return (
        <>
            <div className="bg-gray-900 p-6 rounded-xl relative m-5">
                <h1 id="note" className="text-white text-2xl mb-3">{props.Notes}</h1>
                <h2 id="detail" className="text-white text-xl">{props.details}</h2>
                <button onClick={() => props.onDelete(props.id)} className="px-6 py-2 bg-purple-700 text-white rounded-md overflow-hidden absolute bottom-0 right-0 m-5">
                <span className="relative z-10">Delete</span>
                <span className="absolute inset-0 bg-cyan-400/20 blur-xl "></span>
            </button>
        </div >

        </>
    )
}

export default Card