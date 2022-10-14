/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {

    let len = head.length;

    for (let i=0; i<=len/2; i++) {
        if (head[i] != head[len-i-1]) return false;
    }

    return true;
};

console.log(isPalindrome([1,2,2,1]));
console.log(isPalindrome([1,2]));