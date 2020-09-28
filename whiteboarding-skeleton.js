// PROBLEM 1 - Two Sum
// https://leetcode.com/problems/two-sum/
// ============================================================================
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input = INT: []
// Output = indices: []

function twoSum(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
}

const twoSumFaster = function (nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
};

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// PROBLEM 2 - Reverse a linked list
// ============================================================================
// Amazon and Microsoft ask you to show an algorithm that will reverse a singly-linked
// list, that is, a list that is made of nodes between which there is a unidirectional
// association as in the following image.

//Input = Singly-linked list
//Output => Singly-linked list
//reverse(linkedList})

function reverse(ll) {
    //create a new list which you will return
    let reversed = new LinkedList();
    let current = this.head;
    while (ll.length > 1) {
        while (current.next !== this.tail) {
            current = current.next;
        }
        let removedTail = ll.removeFromTail();
        this.tail = current;
        current.next = null;
        reversed.addToTail(removedTail);
    }
    reversed.addToTail(this.head);
    return reversed;

    //Traverse through linked list updating pointer
}

var reverseList = function (head) {
    prev = null;
    curr = head;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// Time: O(n ^ 2);
// Space: O(1);

// PROBLEM 3 - The missing value
// ============================================================================
// Amazon and Microsoft ask you to derive an algorithm that will inspect an
// array of numbers that contains the values between 0 and the length of the
// list, inclusive, and find the missing value. For example, you may be given an
// array that of length 6 that contains
// [0, 2, 3, 4, 5, 6]
// It is your job to determine that the missing value from the array is 1.

//input = Ordered Array
//output = integer
//missingValue([0,2,4]) => 3
//missingValue([0,1,3,4,5,6]) => 2
function missingValue(array) {
    //Iterate through array starting at 0
    for (let i = 0; i < array.length; i++) {
        //value current element is the value of the next element - 1
        if (array[i] === array[i + 1] - 1) {
            continue;
        } else {
            return array[i + 1] - 1;
        }
    }

    return null;
}

// Time: O(n);
// Space: O(1);

// PROBLEM 4 - Stack min
// ============================================================================
// Google and Apple ask you to design a stack that, in addition to the push and
// pop functions, has a function min that returns the minimum element in the stack
// without removing it. All three functions push, pop, and min should operate in
// O(1) time.

// PROBLEM 5 - Test a retractable ballpoint pen
// ============================================================================

//Facebook asks you to write the tests cases for testing a ballpoint pen.
// What would you consider to be good tests for the pen?
// Try to be as exhaustive as possible.

// 1. It should have a constructor that sets properties, retracted = false
// 2. It should have a method retract
// 3. The method retract sets the retracted variable to true
// 4. it should have a method called write
// 5. This method sets the retracted variable to false
// 6. Any other methods (writeSomething) rely on retracted === false;

// PROBLEM 6 - OOParking Lot
// ============================================================================

// Amazon and Microsoft ask you to specify the classes that it would take to write
// software to manage a paid parking lot. It should know where cars are parked,
// be able to identify the cars, know where the keys are hanging, how many cars
// are in the lot, what time the cars come and go, and how much it costs someone
// when they leave the parking lot based on the following schedule:

// Time	       -> Rate per hour
// 8pm - 6am	    $3
// 6am - noon	    $10
// noon - 6pm	    $8
// 6pm - 8pm	    $6

// PROBLEM 7 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// ============================================================================

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
