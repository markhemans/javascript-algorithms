var head;

/* Doubly-Linked list Node */
    class DNode
        {
        constructor(value)
        {
            this.data = value;
            this.prev = null;
            this.next = null;
        }
    }

    /* inserts a node at the head */    
function addDNode(new_data) 
{
    // if list is empty
    if (head == null)
    {
        head = new DNode(new_data);
        return;
    }
    
    let node = new DNode(new_data);
    node.next = head;
    head.prev = node;
    head = node;
}

    /* removes a node from any position */
function removeDNode(node)
{
    // if it is the head
    if (node == head)
    {
        // if it is the head but not the last
        if (node.next!=null)
        {
            head = head.next;
            head.prev = null;
            return;
        }
        // it is the head and the last
        head = null;
        return;
    }

    // if it is not the head, but not the last
    if (node.next != null)
    {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return;
    }

   
    // if it is the last, and not the head
    if (node.next == null)
    {
        node.prev.next = null;
        return;
    }
}

    /* inserts a doubly-linked node after specified */
function insertDNodeAfter(prev_node, new_data)
{
    let node = new DNode(new_data);
    node.next = prev_node.next;
    node.prev = prev_node;
    prev_node.next = node;
}

function printDLinkedList()
{
    let node = head;
    while (node != null)
    {
        console.log(node.data + "");
        node = node.next;
    }
    console.log(head);
}

// Driver Code
addDNode(1);
addDNode(2);
insertDNodeAfter(head, 3)

// Test
printDLinkedList();



