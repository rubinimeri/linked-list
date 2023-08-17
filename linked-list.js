class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
    }

    append(value, listItem = this.head) {
        if(listItem.nextNode === null) {
            listItem.nextNode = new Node(value);
            this.tail = listItem.nextNode;
        } else {
            this.append(value, listItem.nextNode);
        }
    }

    prepend(value) {
        const newHead = new Node(value, this.head);
        this.head = newHead;
    }

    size() {
        return Node.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index, listItem = this.head, i = 1) {
        if(i === index) return listItem;
        return this.at(index, listItem.nextNode, ++i);
    }

    pop() {
        Node.size--;
        let changeTail = this.at(Node.size);
        changeTail.nextNode = null;
        this.tail = changeTail;
    }

    contains(value, listItem = this.head) {
        if(listItem.value === value) return true;
        else if(listItem.nextNode === null) return false;
        else return this.contains(value, listItem.nextNode);
    }

    find(value, listItem = this.head, index = 1) {
        if(listItem.value === value) return index;
        else if(listItem.nextNode === null) return null;
        else return this.find(value, listItem.nextNode, ++index)
    }

    toString(listItem, string, index = 1) {
        string = string || "";
        listItem = listItem || this.head;
        if(index > Node.size) {
            return string += ` ${null}`
        }
        else {
            index++;
            string += `( ${listItem.value} ) -> `;
            return this.toString(listItem.nextNode, string, index);
        }
    }

    insertAt(value, index) {
        if(index > 1){
            const newNode = new Node(value, this.at(index));
            const nodeBeforeIndex = this.at(index-1);
            nodeBeforeIndex.nextNode = newNode;
        }
        else {
            const oldHead = this.head;
            this.head = new Node(value, oldHead)
            this.tail = this.head;
        }
    }

}

class Node {
    static size = 0;

    constructor(value, nextNode) {
        value = value || null;
        nextNode = nextNode || null;
        Node.size++;
        this.value = value,
        this.nextNode = nextNode
    }
}
