function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    return collection[head.next]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index-1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let currNode = headNode(linkedList, collection)
    let currIdx = 0

    while (currNode !== node) {
        currNode = next(currNode, collection)
        currIdx++
    }
    return currIdx
}


// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let newNode = {name: 'jill', next: ''}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode, ajhsak: newNode}
// let linkedList = 'whana'
function insertNodeAt(index, newAddress, linkedList, collection) {
    let prevNode = nodeAt(index-1, linkedList, collection)
    let nextNode = nodeAt(index, linkedList, collection)

    let nextNodeIdx = indexAt(nextNode, collection, linkedList)
    let nextAddress = addressAt(nextNodeIdx, linkedList, collection)

    prevNode.next = newAddress
    collection[newAddress].next = nextAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let prevNode = nodeAt(index-1, linkedList, collection)
    let nextNode = nodeAt(index+1, linkedList, collection)

    let nextNodeIdx = indexAt(nextNode, collection, linkedList)
    let nextAddress = addressAt(nextNodeIdx, linkedList, collection)

    prevNode.next = nextAddress
}