// Given the head of a singly linked list, return the middle node of the linked list.

var middleNode = function(head) {
     let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
    
};
