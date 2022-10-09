var tail;

    class CNode {        
        constructor(value)
        {         
            this.data = value;      
            this.next;       
        }       
    }
    
function addNode(new_data)
{        
    if (tail == null)
    {
        tail = new CNode(new_data);
        tail.next = tail;
        return;
    }

    let node = new CNode(new_data);
    node.next = tail.next;
    tail.next = node;
}

function deleteNextNode(node)
{
    if (node.next == tail)
    {
        tail = node;
    }
    node.next = node.next.next;
}

function addNodeAfter(prev_node, new_data)
{
    let node = new CNode(new_data);
    node.next = prev_node.next;
    prev_node.next = node;
}

function printCLinkedList()
{
    console.log(tail.data + "");
    let node = tail.next;
    while (node != tail)
    {
        console.log(node.data + "");
        node = node.next;
    }
    console.log(tail);
}    
     
   
// Driven code      
addNode(1);
addNode(2);
deleteNextNode(tail.next);


// Test
printCLinkedList();

// Additional functions


