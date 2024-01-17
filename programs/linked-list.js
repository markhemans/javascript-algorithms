var head;

/* Linked list Node */
	class Node
	{
		constructor(value) {
			this.data = value;
			this.next = null;
		}
	}

    /* inserts a node at the head */
function addNode(new_data) 
{
    if (head == null)
    {
        head = new Node(new_data);
        return;
    }
    let node = new Node(new_data);
    node.next = head;
    head = node;
}

    /* deletes the head node */
function deleteNode(node)
{
    head = head.next;
}

    /* inserts a node after specified */
function insertNodeAfter(prev_node, new_data)
{
    let node = new Node(new_data);
    node.next = prev_node.next;
    prev_node.next = node;
}
    /* deletes a node after specified */
function deleteNextNode(node)
{
    node.next = node.next.next;
}

function printLinkedList()
{
    let node = head;
    while (node != null)
    {
        console.log(node.data + "");
        node = node.next;
    }
    console.log(head);
}

 // Driver code
    addNode(1); 
   // addHead(5);
   // addHead(6);

 // Test
    countNumberOfNodes(head);
    findData(head, 2);
    findData(head, 1);
    printLinkedList();

 
// Additional functions

    /* add a new element to the end of the linked list */
function pushEnd(new_data)
{
    /* create new node */
    let new_node = new Node(new_data);
  
    /* if list is empty, the end is the head */
    if (head == null)
    {
        head = new Node(new_data);
        return;
    }
    
    /* find last node starting at head */
    let last = head; 
    while (last.next != null)
    {
        last = last.next;
    }
    
    /* change the next property of the last node found to new node */
    last.next = new_node;
    return;
}

function countNumberOfNodes(node)
{
    let count = 0;
    while (node != null)
    {
        count++;
        node = node.next;
    }
    console.log("the number of nodes counted: " +count);
}

function findData(node, data)
{
    while (node != null)
    {
        if (node.data == data)
        {
            console.log("Found data: " + node.data);
        }
        node = node.next;
    }
}



