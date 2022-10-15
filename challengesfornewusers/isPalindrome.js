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

    while(fast && fast.next) {
        fast = fast.next.next? fast.next.next : fast.next;
        slow = slow.next;
    }

    var tail;
    while(slow && slow.next) {
        // save current node
        var temp = slow;
        
        // move forward
        slow = slow.next;
        
        // swap
        temp.next = tail;
        tail = temp;
    }

    slow.next = tail;
    tail = slow;

    // console.log(head, tail);

    while(head && tail) {
        if (head.val !== tail.val) return false;
        head = head.next;
        tail = tail.next;
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

var list = new ListNode(1
    , new ListNode(1
        , new ListNode(2
            , new ListNode(1))));
console.log(isPalindrome(list));