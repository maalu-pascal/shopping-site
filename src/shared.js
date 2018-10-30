import { todos } from './data.js'
const selectedToDos = (catalogList) => {
    return (Object.entries(catalogList).filter((item) => {
        let found = (todos.find((name) => {
            if ((name.title == item[0]) && (name.done === true)) return name;
        }));
        if (found) {
            return item;
        }
    }));
};

export { selectedToDos};