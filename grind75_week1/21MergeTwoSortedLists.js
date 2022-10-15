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

function compare(list1, list2) {
    return list1.val - list2.val;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;

    if (compare(list1, list2) <= 0) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        return mergeTwoLists(list2, list1);
    }
};

var list1 = new ListNode(1
                , new ListNode(2
                    , new ListNode(4)));
var list2 = new ListNode(1
                , new ListNode(3
                    , new ListNode(4)));
console.log(mergeTwoLists(list1, list2));

var list1 = undefined;
var list2 = undefined;
console.log(mergeTwoLists(list1, list2));

var list1 = undefined;
var list2 = new ListNode(0);
console.log(mergeTwoLists(list1, list2));