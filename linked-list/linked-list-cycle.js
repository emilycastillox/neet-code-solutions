const hasCycle = (head) => {
    let visited = new Map();
    let current = head;

    while (current) {
        // if this node was seen before, we found a cycle
        if (visited.has(current)) {
            return true;
        }

        // mark this node as visited
        visited.set(current, true);

        // move to next node
        current = current.next;
    }

    // reached the end (no cycle)
    return false;
};
