import TodoItems from "./TodoItems";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       {
         todos.map(todo => {
           return(<TodoItems todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList; 