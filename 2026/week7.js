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

const mergeTwoLists = (list1, list2) => {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }
        if (list1.val <= list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    }

const removeNthFromEnd = (head, n) => {
        const nodes = [];
        let cur = head;
        while (cur) {
            nodes.push(cur);
            cur = cur.next;
        }

        const removeIndex = nodes.length - n;
        if (removeIndex === 0) {
            return head.next;
        }

        nodes[removeIndex - 1].next = nodes[removeIndex].next;
        return head;
    }

const reorderList = (head) => {
       let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        let prev = (slow.next = null);
        while (second !== null) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        let first = head;
        second = prev;
        while (second !== null) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }

const reverseList = (head) => {
        if (!head) {
            return null;
        }

        let newHead = head;
        if (head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;

        return newHead;
    }

