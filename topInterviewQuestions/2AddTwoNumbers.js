function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function ListNumber(val) {
    this.val = (val===undefined ? 0 : val);

    this.que = Math.floor(this.val/10);
    this.rem = this.val%10;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var a1 = readList(l1);
    var a2 = readList(l2);

    var len = a1.length>a2.length? a1.length : a2.length;

    var res = [];
    var rem = 0;
    for (i=0; i<len; i++) {
        var x = i<a1.length? a1[i] : 0;
        var y = i<a2.length? a2[i] : 0;
        var r = x + y + rem;
        r = new ListNumber(r);
        
        res.push(r.rem);
        rem = r.que;
    }

    while (rem) {
        var r = new ListNumber(rem);
        res.push(r.rem);
        rem = r.que;
    }

    return writeList(res);
};

function readList(l) {
    var res = [];

    while (l) {
        res.push(l.val);
        l = l.next;
    }

    return res;
}

function writeList(a) {
    
    var head, cur;

    for(let i=0; i<a.length; i++) {

        if (i===0) {
            head = cur = new ListNode(a[0]);
        } else {
            cur.next = new ListNode(a[i]);
            cur = cur.next;
        }
    }

    return head;
}

var l1 = new ListNode(2
            , new ListNode(4
                , new ListNode(3)));

var l2 = new ListNode(5
            , new ListNode(6
                , new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

var l1 = new ListNode(0);
var l2 = new ListNode(0);

console.log(addTwoNumbers(l1, l2));


var l1 = new ListNode(9
            , new ListNode(9
                , new ListNode(9
                    , new ListNode(9
                        , new ListNode(9
                            , new ListNode(9
                                , new ListNode(9)))))));

var l2 = new ListNode(9
            , new ListNode(9
                , new ListNode(9
                    , new ListNode(9))));

console.log(addTwoNumbers(l1, l2));