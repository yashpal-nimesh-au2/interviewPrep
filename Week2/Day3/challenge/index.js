
var rotateRight = function(head, k) {
    let array_nodes = [];
    let last = head;
    
    array_nodes.push(last);
    
    if (last === null || last.next === null) {
        return head;
    }
    
    while (last.next !== null) {
        last = last.next;
        array_nodes.push(last);        
    }
    if (array_nodes.length > k+1) {
        let size = array_nodes.length;
        array_nodes.splice(0, size - 1 - k);
    }
    
    k = (k % (array_nodes.length));
    
    let last_id = array_nodes.length - 1;
    
    for (let i = 0; i < k; i++) {
        head = rotateListWithArray(head, array_nodes, last_id);
        last_id--;
    }

    return head;
};

var rotateListWithArray = function(head, array_nodes, last_id) {
    let penultimate = array_nodes[last_id-1];
    let last        = array_nodes[last_id];
    
    penultimate.next = null;
    last.next = head;
    
    return last;
};