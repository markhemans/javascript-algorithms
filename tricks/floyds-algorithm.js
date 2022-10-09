/**
 * @param {Node} node - starting point node of the linked list.
 * @return {boolean} - true if there is a loop, false otherwise.
 * Floyd's algorithms uses a fast & slow pointer to track if there is a loop.
 */

export function detectLoop(node)

{

    var slow = node;
    var fast = node;
    
    while (fast != null && fast.next!= null)
    {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast)
        {
            return true;
        }
        
    }

    return false;

}

