var head;
var tail;

/* Doubly-Linked list Node */
    class DCNode
        {
        constructor(value)
        {
            this.data = value;
            this.prev;
            this.next;
        }
    }

    /* inserts a node at the head */    
function addDCNode(new_data) 
{
    if (head == null)
    {
        head = new DCNode(new_data);
        tail = head;
        head.prev = tail;
        head.next = tail;
        return;
    }

    let node = new DCNode(new_data);
    tail.next = node;
    node.prev = tail;
    node.next = head;
    head.prev = node;
    head = node;
}

    /* removes a node from any position */
function removeDCNode(node)
{
    // it can delete anyhting, we need to check if it is the head, if it is the head
    if (node == head)
    {
        // if it is the head but not the last and only thing to delete, watch closely to how we fix this.
        if (head!=tail)
        {
            head = head.next;
            head.prev = tail;
            tail.next = head;
            return;
        }
        // else, it is the head and the tail, delete the whole list
        head = null
        tail = null;
        return;
    }

    // if it is not the head, but not the tail, just chain
    if (node != tail)
    {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return;
    }

   
    // if it is the tail, and there are still nodes to be fixed, i.e heads next and tail's prev
    if (node == tail)
    {
        node.prev.next = head;
        tail = tail.prev;
        head.prev = tail;
        return;
    }
}

    /* inserts a doubly-linked node after specified */
function insertDCNodeAfter(prev_node, new_data)
{
    
    let node = new DCNode(new_data);

    // if it added to the head
    if (prev_node == head)
    {
        // THERE ARE ONLY TWO NODES, THIS AND THE HEAD.if there is only one node, set the tail
        if (head == tail)
        {
            tail = node;
            tail.next = head;
            tail.prev = head;
            head.prev = tail;
            head.next = tail;
            return;
        }
        // else, theres a tail already, we're in the middle just chain
        node.next = prev_node.next;
        node.prev = prev_node;
        prev_node.next = node;
        return;
    }

    // if it added to the tail
    if (prev_node == tail)
    {
        node.next = head;
        head.prev = node;
        node.prev = prev_node;
        prev_node.next = node;
        tail = node;
        return;
    }
    
    // else, it is added to the middle, just chain
    node.next = prev_node.next;
    node.prev = prev_node;
    prev_node.next = node;
}

function printDCLinkedList()
{
    console.log(head.data + "");
    let node = head.next;
    while (node != head)
    {
        console.log(node.data + "");
        node = node.next;
    }
    console.log(head);
}

// Driver Code

addDCNode(1);
insertDCNodeAfter(head, 2);
insertDCNodeAfter(head.next, 3);
//console.log(head.data + " this is the head");
//console.log(tail.data + " this is the tail");

// Test
printDCLinkedList();


import {detectLoop} from "./tricks/floyds-algorithm.js"
console.log(detectLoop(head));
