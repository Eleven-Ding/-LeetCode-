/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const len1 = headA.length;
  const len2 = headB.length;

  const len = len1 < len2 ? len1 : len2;

  for (let i = 0; i < len; i++) {
    if (len1[i] === len2[i]) {
      return `Intersected at '${len1[i]}'`;
    }
  }

  return null;
};
