var root;

class Node
{
    constructor(item)
    {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

function addNode(item)
{
    if(root == null)
    {
        root = new Node(item);
    }
    else
    {
        addLeaves(root, item);
    }
}

function addLeaves(node, item)
{
    if(item < node.key)
    {
        if(node.left == null)
        {
            node.left = new Node(item);
        }
        else
        {
            addLeaves(node.left, item);
        }
    }
    else
    {
        if(node.right == null)
        {
            node.right = new Node(item);
        }
        else
        {
            addLeaves(node.right, item);
        }
    }
}


// Driver Code
addNode(10);
addNode(20);
addNode(30);
console.log(root);



