import React from 'react';

import TodoApp from './UberComplexTodoApp';
import TasksApp from './simpleTodoApp';

const App = () => {
    const appStyle = {
        div: {'display': 'flex', 'flex-direction': 'row', 'margin-top': '5vh'},
        todoSection: {'display': 'flex', 'flex-direction': 'column', 'margin-right': '5vw'},
        taskSection: {'display': 'flex', 'flex-direction': 'column', 'margin': '5.5vh 0px 0px 5vw'}
    }

    return (
        <div style={appStyle.div}>  
            <section style={appStyle.todoSection}>      
                <TodoApp /> 
            </section>
            <section style={appStyle.taskSection}>  
                <TasksApp /> 
            </section>
        </div>
    );
};
export default App;