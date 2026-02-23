import Card from "./Card"

function Maincard(props) {
    return (
        <>
            <div className="h-100 p-px rounded-xl bg-black/60 backdrop-blur-md border-b border-purple-900/40 overflow-y-scroll">
                <h1 className="text-5xl text-white m-5">Recent Notes</h1>
                {props.task?.map((elem) => (
                    <Card
                        key={elem.id}
                        id={elem.id}
                        Notes={elem.notes}
                        details={elem.detail}
                        onDelete={props.onDelete}
                    />
                ))}

            </div>
        </>
    )
}

export default Maincard