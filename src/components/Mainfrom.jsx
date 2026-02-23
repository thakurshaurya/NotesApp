import { useState } from "react";


function Mainfrom({ task, setTask }) {

    const [detail, setDetail] = useState('');
    const [notes, setNotes] = useState('');

    const submitHandeler = (e) => {
        e.preventDefault();

        const newTask = [
            ...task,
            {
                id: Date.now(),  
                notes,
                detail
            }
        ];
        setTask(newTask);

        setNotes('');
        setDetail('');
    };
    return (
        <>
            <form onSubmit={(e) => {
                submitHandeler(e);
            }}>
                <div className="p-px rounded-xl bg-linear-to-r from-cyan-500 to-fuchsia-500 backdrop-blur-md">
                    <h1 className="text-5xl text-black m-5 font-bold">ADD NOTES</h1>
                    <div className="bg-black p-6 rounded-xl relative h-100">
                        <input type="text" onChange={(e) => {
                            setNotes(e.target.value)
                        }} value={notes} placeholder="Enter Your Notes Heading" className="text-white h-5 w-full p-5 bg-gray-950 mb-2" />
                        <textarea onChange={(e) => {
                            setDetail(e.target.value)
                        }} value={detail} name="" id="" placeholder="Enter Details " className="text-white h-60 w-full p-5 bg-gray-950"></textarea>
                        <button className="px-6 py-2 bg-purple-700 text-white rounded-md overflow-hidden absolute bottom-0 right-0 m-5">
                            <span className="relative z-10">Save</span>
                            <span className="absolute inset-0 bg-cyan-400/20 blur-xl "></span>
                        </button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default Mainfrom