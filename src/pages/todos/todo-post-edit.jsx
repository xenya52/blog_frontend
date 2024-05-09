import todoContent from '../../assets/todo-content.json'
import { useParams } from 'wouter';

function TodoPostEdit() {
    let { slug } = useParams();
    const todo = todoContent[slug]
    console.log("used todoPostEdit")
    if (!todoContent) {
        return <div>Blogpost not found!</div>;
    }
    return(
        <div className="edit-todo-post-container content-container">
            <form>
                <h1 className='topic-h1-headline'>Edit Menu [{slug}]</h1>
                <div className='todo-edit-container'>
                    <label>Title</label>
                    <input type="text" placeholder={todo.title}></input>
                    <label>Timestamp</label>
                    <input type="text" placeholder={todo.timestamp}></input>
                    <label>Description</label>
                    <input type="text" placeholder={todo.description}></input>
                    <label>Status</label>
                    <input type="text" placeholder={todo.status}></input>
                </div>
                <button className='button-default' style={{marginLeft:"13%"}}>←</button>
            </form>
        </div>
  )
}

export default TodoPostEdit