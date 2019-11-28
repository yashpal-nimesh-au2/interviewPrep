var rotateRight = function(head, k) {
    let array_nodes = [];
    let last = head;
    
    array_nodes.push(last);
    
    //Se a lista for nula ou com apenas um elemento
    if (last === null || last.next === null) {
        return head;
    }
    
    //Itera sobre a lista até achar o ultimo elemento
    while (last.next !== null) {
        last = last.next;
        //Adiciona cada elemento no array 
        array_nodes.push(last);        
    }
    
    /* É preciso de k+1 elementos da lista para se fazer k rotações,
    * então se o array dos elementos for maior que isso é melhor cortar-lo
    */
    if (array_nodes.length > k+1) {
        let size = array_nodes.length;
        array_nodes.splice(0, size - 1 - k);
    }
    
    //Sendo t = tamanho da lista, a cada t rotações a lista volta ao normal.
    //Então fazer 4 rotações em uma lista com t = 5 obtem o mesmo resultado que
    //fazer 14,19,24,29... rotações  
    k = (k % (array_nodes.length));
    
    // Identifica no array qual o ultimo elemento na lista
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