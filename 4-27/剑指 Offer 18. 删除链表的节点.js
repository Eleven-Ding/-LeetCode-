/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    if(!head) return null;
    let p = new ListNode;
    p.next = head;
    while(p){
        if(p.next.val == val){
            let temp = p.next.next;
            delete(p.next);
            p.next = temp;
            if(head.val == val) head = head.next;
            return head;
        }
        p = p.next;
    }
    return head;
};