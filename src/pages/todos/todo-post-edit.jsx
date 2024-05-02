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
                <h1 className='topic-h1-headline'>{todo.title}</h1>
                <div>
                    <span>
                        <label>Title</label>
                        <input type="text" placeholder={todo.title}></input>
                    </span>
                </div>
                <div>
                    <span>
                        <label>Timestamp</label>
                        <input type="text" placeholder={todo.timestamp}></input>
                    </span>
                </div>
                <div>
                    <span>
                        <label>Description</label>
                        <input type="text" placeholder={todo.description}></input>
                    </span>
                </div>
                <div>
                    <span>
                        <label>Status</label>
                        <input type="text" placeholder={todo.status}></input>
                    </span>
                </div>
            </form>
        </div>
  )
}

export default TodoPostEdit