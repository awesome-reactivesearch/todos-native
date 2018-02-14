class Utils {
  // [source] https://gist.github.com/lmfresneda/9158e06a93a819a78b30cc175573a8d3
  static removeDuplicates = (arr, prop) => {
    const obj = {};
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
    }
    const newArr = [];
    for (const key in obj) newArr.push(obj[key]); // eslint-disable-line
    return newArr;
  };

  static mergeTodos(todos, streamData) {
    // note: don't judge for the logic
    let todosData = todos;
    if (todosData.length > 0 || streamData.length > 0) {
      todosData = todosData.map((todo) => {
        let todoToReturn = todo;
        for (let i = 0; i < streamData.length; i++) {
          // variable to track untouched todos after checking with all todosData iems
          streamData[i].touched = false; // eslint-disable-line
          // [case]: todo data is updated
          if (todo._id === streamData[i]._id) {
            todoToReturn = streamData[i];
            streamData[i].touched = true; // eslint-disable-line
          }
        }
        return todoToReturn;
      });
      // [case]: new todo is added
      // collect untouched todos || the newly added streamed todos
      const newTodos = streamData.filter(todo => !todo.touched);
      // merge the new streaming data with updated streaming data
      if (newTodos.length > 0) todosData = todosData.concat(newTodos);
      // clean unpredictable duplicates
      todosData = this.removeDuplicates(todosData, '_id');
      // clean deleted todos
      todosData = todosData.filter(todo => !todo._deleted);
    }
    // sorting todos based on creation time
    todosData = todosData.sort((a, b) => a.createdAt - b.createdAt);

    return todosData;
  }
}

export default Utils;
