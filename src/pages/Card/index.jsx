import './Card.css'

function Card(props) {
    return (
        <>
            <div className="task-area">
                <label htmlFor="task" className="task">{props.task}</label>
                <input type="checkbox" className='chacBoxSize' id="task" />
            </div>

        </>
    )
}

export default Card