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

    var slow = fast = head;
    var prev = temp = undefined;

    while(fast && fast.next) {
        // save slow to temp
        temp = slow;

        fast = fast.next.next? fast.next.next : fast.next;
        slow = slow.next;

        // swap 
        temp.next = prev;
        prev = temp;
    }

    while(slow && prev) {
        if (slow.val !== prev.val) return false;

        slow = slow.next;
        prev = prev.next;
    }

    return true;
};

var list = new ListNode(1
    , new ListNode(2
        , new ListNode(2
            , new ListNode(1))));
console.log(isPalindrome(list));

var list = new ListNode(1
    , new ListNode(2));
console.log(isPalindrome(list));

var list = new ListNode(1
    , new ListNode(0
        , new ListNode(1)));
console.log(isPalindrome(list));