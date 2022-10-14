function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    var slow = head, fast = head;
    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};


var list = new ListNode(1
    , new ListNode(2
        , new ListNode(3
            , new ListNode(4
                , new ListNode(5)))));

var resNode = middleNode(list);
var resArr = [];
while(resNode) {
    resArr.push(resNode.val);
    resNode = resNode.next;
}

console.log(resArr);

var list = new ListNode(1
    , new ListNode(2
        , new ListNode(3
            , new ListNode(4
                , new ListNode(5
                    , new ListNode(6))))));

var resNode = middleNode(list);
var resArr = [];
while(resNode) {
    resArr.push(resNode.val);
    resNode = resNode.next;
}

console.log(resArr);