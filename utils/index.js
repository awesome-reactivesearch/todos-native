class Utils {
  static mergeTodos(todos, streamData) {
    // generate an array of ids of streamData
    const streamDataIds = streamData.map(todo => todo._id);

    return todos
      // consider streamData as the source of truth
      // first take existing todos which are not present in stream data
      .filter(({ _id }) => !streamDataIds.includes(_id))
      // then add todos from stream data
      .concat(streamData)
      // remove todos which are deleted in stream data
      .filter(todo => !todo._deleted)
      // finally sort on the basis of creation timestamp
      .sort((a, b) => a.createdAt - b.createdAt);
  }
}

export default Utils;
