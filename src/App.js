import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! �� ' },
        { id: 2, title: 'We love Easy Frontend! �� ' },
        { id: 3, title: 'They love Easy Frontend! �� ' },
    ]);

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });

    try {
        useEffect(() => {
            async function fetchPostList() {
                //param string    _limit=2&page=1
                const paramString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log(responseJSON);

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            };
            fetchPostList();
        }, [filters]);
    } catch (error) {
        console.log('Failed to fecth post list', error.message);
    }

    function handlePageChange(newPage) {
        console.log('new page', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });

    }

    function handleTodoClick(todo) {
        const newTodoList = [...todoList];
        const index = newTodoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleFormSubmit(formValues) {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <div className='app' >
            <h1>React Hooks - Todo List - Post List</h1>
            {<PostList posts={postList} />}
            {<Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />}
            {<ColorBox />}
            {<TodoForm onSubmit={handleFormSubmit} />}
            {<TodoList todos={todoList} onTodoClick={handleTodoClick} />}
        </div>
    );
}

export default App;
