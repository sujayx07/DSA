window.SOLUTION_NOTES = {
    rotatedSortedArray: {
        title: 'Binary Search on a Rotated Sorted Array',
        overview: 'The main idea is to use binary search, not a full scan. In a rotated sorted array, one half will always be sorted. We use that fact to decide which side to keep and which side to throw away.',
        approach: 'Keep two pointers, left and right. Find the middle element. If the middle part is sorted, compare the target or boundary values and move to the side where the answer can still exist. Repeat until the search space becomes small enough.',
        variables: ['left', 'right', 'mid', 'nums[mid]', 'nums[right]'],
        steps: [
            'Set left at the start and right at the end.',
            'Check the middle element.',
            'See which half is sorted.',
            'Use the sorted half to decide where the answer can live.',
            'Move the left or right pointer and repeat.'
        ],
        pseudoCode: [
            'left = 0, right = n - 1',
            'while left <= right:',
            '    mid = left + (right - left) // 2',
            '    if nums[mid] is in the sorted half:',
            '        move left or right using the sorted boundary',
            '    else:',
            '        move to the other half'
        ],
        why: 'This is the best optimized approach because each step removes half of the array. That gives logarithmic time instead of linear time.',
        complexity: 'Time: O(log n) | Space: O(1)',
        interviewTip: 'Say clearly that the rotation does not break the sorted property completely. One half is still sorted, and that is why binary search still works.'
    },
    minMax: {
        title: 'Single Pass for Min / Max',
        overview: 'For smallest, largest, second smallest, or second largest questions, the cleanest method is a single scan. You only keep a few variables and update them while reading the array once.',
        approach: 'Start with the first element as the current answer. For each new element, compare it with the current best value. If needed, update the best value. For second best problems, keep two trackers and update both in order.',
        variables: ['currentMin', 'currentMax', 'secondMin', 'secondMax', 'value'],
        steps: [
            'Take the first value as the current minimum or maximum.',
            'Move through the array one time.',
            'Compare each value with the stored answer.',
            'Update the answer when a better value is found.',
            'For second smallest or second largest, also maintain a second tracker.'
        ],
        pseudoCode: [
            'currentMin = nums[0]',
            'for value in nums:',
            '    if value < currentMin:',
            '        currentMin = value',
            'For second smallest, keep a second variable and update it after the first comparison.'
        ],
        why: 'This avoids sorting the whole array. That saves time and keeps the solution easy to explain.',
        complexity: 'Time: O(n) | Space: O(1)',
        interviewTip: 'Do not sort unless the question truly needs sorted order. A single pass is often enough.'
    },
    runningSum: {
        title: 'Running Total / Prefix Sum',
        overview: 'Use a running total when the problem asks for sum, cumulative sum, or average. The idea is simple: keep adding the current value to a total as you move forward.',
        approach: 'Create a variable called sum or total. Add every element into it. If the question asks for prefix sum, store the total at each step. If it asks for average, divide the final total by the number of elements.',
        variables: ['total', 'prefix[i]', 'count', 'sum'],
        steps: [
            'Start total at zero.',
            'Read each number once.',
            'Add it to the running total.',
            'Store the current total if prefix output is needed.',
            'At the end, calculate average if required.'
        ],
        pseudoCode: [
            'total = 0',
            'for i from 0 to n - 1:',
            '    total += nums[i]',
            '    prefix[i] = total',
            'if average needed:',
            '    average = total / count'
        ],
        why: 'The running total avoids repeated work. You never count the same element again, so the solution stays fast and clean.',
        complexity: 'Time: O(n) | Space: O(1)',
        interviewTip: 'When you see sum, total, prefix, or average, think running total first.'
    },
    palindrome: {
        title: 'Two Pointer Palindrome Check',
        overview: 'Palindrome problems are best solved with two pointers. One pointer starts from the left side and the other starts from the right side. You compare them and move inward.',
        approach: 'Set one pointer at the beginning and one at the end. Compare both characters or values. If they match, move inward. If they do not match, the answer is false. If they all match until the pointers cross, the answer is true.',
        variables: ['left', 'right', 's[left]', 's[right]'],
        steps: [
            'Place one pointer at the start and another at the end.',
            'Compare the values at both ends.',
            'If they are equal, move both pointers inward.',
            'Stop if a mismatch is found.',
            'If all pairs match, the string or array is a palindrome.'
        ],
        pseudoCode: [
            'left = 0, right = n - 1',
            'while left < right:',
            '    if s[left] != s[right]:',
            '        return false',
            '    left += 1',
            '    right -= 1',
            'return true'
        ],
        why: 'This is the simplest and fastest way because you only need one pass from both sides.',
        complexity: 'Time: O(n) | Space: O(1)',
        interviewTip: 'Explain that the logic works because a palindrome must read the same from the left and from the right.'
    },
    hashMapCount: {
        title: 'Hash Map / Set Counting',
        overview: 'When the question talks about duplicates, frequency, anagrams, repeated items, or common values, a hash map or set is usually the best tool. It helps you remember what you have already seen.',
        approach: 'Scan the input one time. Use a set if you only need to know whether something appeared before. Use a map if you need counts or character frequency. Update the data structure as you scan.',
        variables: ['freqMap', 'seenSet', 'count', 'key', 'value'],
        steps: [
            'Choose set or map based on the requirement.',
            'Read the input once.',
            'Store the current value or count it.',
            'Use the stored data to decide the answer quickly.',
            'Avoid nested loops unless the problem really needs them.'
        ],
        pseudoCode: [
            'freqMap = {}',
            'for value in input:',
            '    freqMap[value] += 1',
            'if freqMap[value] > 1:',
            '    answer = true or update result'
        ],
        why: 'Hash lookup is fast, so this method removes repeated checking and keeps the time low.',
        complexity: 'Time: O(n) | Space: O(n)',
        interviewTip: 'Say that the extra memory is used to gain speed and avoid brute force comparisons.'
    },
    sortPattern: {
        title: 'Sorting with the Right Strategy',
        overview: 'Sorting is not always the answer by itself. First decide whether you really need sorted order. If yes, choose the best sort idea for the situation, such as built-in sort, counting, merge sort, or quick sort.',
        approach: 'Check the problem rules. If the task is only to arrange elements, sort directly. If the task also needs counts or custom ordering, combine a frequency map with sorting. Keep the solution simple and avoid sorting more than once unless it is necessary.',
        variables: ['arr', 'freqMap', 'sortedArr', 'index'],
        steps: [
            'Read the order requirement carefully.',
            'Decide whether normal sorting is enough.',
            'Use counting or hashing if the order depends on frequency or custom rules.',
            'Apply the sort step only once when possible.',
            'Check the final arrangement against the condition.'
        ],
        pseudoCode: [
            'freqMap = count elements',
            'sort array if required',
            'if custom order needed:',
            '    place elements using freqMap and a sorted rule',
            'return final arrangement'
        ],
        why: 'The best solution is often not the most complex one. A clear sorting plan is easier to maintain and explain.',
        complexity: 'Time: usually O(n log n) | Space: depends on the method used',
        interviewTip: 'If the question asks for sorted order, first ask whether you need comparison sorting or counting-based ordering.'
    },
    inPlaceArray: {
        title: 'In-place Array Movement',
        overview: 'For rotation, reversing, or rearranging an array, try to do the work in place. That means changing the original array without making many extra copies.',
        approach: 'Use pointer swapping, reverse sections, or move elements in cycles. For rotation, the reverse-three-times trick is a classic method: reverse the whole array, reverse the first part, then reverse the second part.',
        variables: ['left', 'right', 'start', 'end', 'k'],
        steps: [
            'Understand how the positions must change.',
            'Pick an in-place method if possible.',
            'Use reverse or swap logic instead of building a new array.',
            'Check boundaries carefully.',
            'Confirm the final order matches the target.'
        ],
        pseudoCode: [
            'reverse(nums, 0, n - 1)',
            'reverse(nums, 0, k - 1)',
            'reverse(nums, k, n - 1)',
            'This moves the array in place without extra space.'
        ],
        why: 'In-place work saves memory and is usually the most optimized practical approach.',
        complexity: 'Time: O(n) | Space: O(1)',
        interviewTip: 'Mention that in-place changes are better when the question asks for an optimized solution with less memory.'
    },
    binarySearch: {
        title: 'Classic Binary Search',
        overview: 'If the array or list is sorted, binary search is the first thing to think about. It works by cutting the search space in half again and again.',
        approach: 'Compare the middle value with the target. If the target is smaller, move the right pointer left. If it is larger, move the left pointer right. Continue until the target is found or the pointers cross.',
        variables: ['left', 'right', 'mid', 'target', 'nums[mid]'],
        steps: [
            'Set left and right pointer values.',
            'Find the middle element.',
            'Compare middle with target.',
            'Move left or right based on the comparison.',
            'Repeat until the answer is found or the range is empty.'
        ],
        pseudoCode: [
            'left = 0, right = n - 1',
            'while left <= right:',
            '    mid = left + (right - left) // 2',
            '    if nums[mid] == target: return mid',
            '    if nums[mid] < target: left = mid + 1',
            '    else: right = mid - 1'
        ],
        why: 'This is much faster than linear search because each loop removes half of the remaining space.',
        complexity: 'Time: O(log n) | Space: O(1)',
        interviewTip: 'Always say that binary search only works when the data has sorted order or sorted substructure.'
    },
    mathPattern: {
        title: 'Math-Based Number Logic',
        overview: 'For prime, factor, GCD, LCM, Fibonacci, power, and similar questions, math rules are usually the best path. The key is to use formulas, divisibility, or early stopping instead of brute force.',
        approach: 'Write the formula or rule first. Then use a small loop only where needed. For example, test divisors up to the square root for prime checks, use repeated multiplication for factorial or power, and use Euclid’s method for GCD.',
        variables: ['num', 'i', 'divisor', 'count', 'result'],
        steps: [
            'Identify the math rule behind the question.',
            'Look for a direct formula or shortcut.',
            'Add early stop conditions when possible.',
            'Avoid checking every number if the rule allows better pruning.',
            'Verify the answer with a small example.'
        ],
        pseudoCode: [
            'for i from 1 to sqrt(num):',
            '    if num % i == 0:',
            '        process factor pair or check condition',
            'For GCD:',
            '    repeat until second number becomes 0'
        ],
        why: 'Mathematical shortcuts reduce work and make the solution more efficient than brute force.',
        complexity: 'Time: depends on the rule, often better than O(n) | Space: O(1)',
        interviewTip: 'Before coding, ask yourself if the problem has a formula, a pattern, or a divisibility rule.'
    },
    stringPattern: {
        title: 'One Pass String Processing',
        overview: 'String problems are often easiest when you scan once and keep only the information you need. That may be a counter, a frequency map, or two pointers.',
        approach: 'Move through the string from left to right. Use conditions for vowels, letters, spaces, or punctuation. If counting is needed, use a map. If both ends matter, use two pointers.',
        variables: ['i', 'char', 'left', 'right', 'freqMap'],
        steps: [
            'Read the problem and choose scan, map, or two pointers.',
            'Process the string one character at a time.',
            'Update the answer or counters as you go.',
            'Build the output only if needed.',
            'Check the final string against the condition.'
        ],
        pseudoCode: [
            'for each char in string:',
            '    if char is valid:',
            '        update count or append to answer',
            'if using two pointers:',
            '    move left and right inward'
        ],
        why: 'One pass is easier to understand and usually faster than repeatedly rebuilding the string.',
        complexity: 'Time: O(n) | Space: O(1) or O(n) depending on the task',
        interviewTip: 'Explain what each character means in the algorithm. That makes your answer easy to follow in an interview.'
    },
    default: {
        title: 'General Optimized Thinking',
        overview: 'Start with the smallest amount of work that can solve the problem. Then improve the method only if the problem requires it.',
        approach: 'Think about the input type, what must be checked, and whether fast lookup or ordered movement is needed. Then choose scanning, hashing, pointers, binary search, or math rules.',
        variables: ['left', 'right', 'mid', 'count', 'result'],
        steps: [
            'Read the question slowly.',
            'Identify the input pattern.',
            'Pick the simplest efficient technique.',
            'Write the solution in a few clear steps.',
            'Check time and space complexity.'
        ],
        pseudoCode: [
            'read input',
            'choose technique based on pattern',
            'execute core loop',
            'return result'
        ],
        why: 'A clean plan is easier to revise, easier to code, and easier to explain.',
        complexity: 'Time and space depend on the chosen method',
        interviewTip: 'Always connect the technique to the problem pattern before writing code.'
    }
};

window.getDetailedSolutionNotes = function (question) {
    const name = `${question.name} ${question.lcName}`.toLowerCase();

    if (name.includes('rotated sorted array')) {
        return window.SOLUTION_NOTES.rotatedSortedArray;
    }

    if (name.includes('smallest') || name.includes('minimum') || name.includes('largest') || name.includes('maximum') || name.includes('second smallest') || name.includes('second largest')) {
        return window.SOLUTION_NOTES.minMax;
    }

    if (name.includes('running sum') || name.includes('sum of') || name.includes('average')) {
        return window.SOLUTION_NOTES.runningSum;
    }

    if (name.includes('palindrome')) {
        return window.SOLUTION_NOTES.palindrome;
    }

    if (name.includes('duplicate') || name.includes('frequency') || name.includes('anagram') || name.includes('repeating') || name.includes('common')) {
        return window.SOLUTION_NOTES.hashMapCount;
    }

    if (name.includes('sort') || name.includes('ranking') || name.includes('relative sort') || name.includes('selection') || name.includes('bubble') || name.includes('insertion') || name.includes('merge') || name.includes('quick')) {
        return window.SOLUTION_NOTES.sortPattern;
    }

    if (name.includes('rotate') || name.includes('reverse array') || name.includes('rearrange')) {
        return window.SOLUTION_NOTES.inPlaceArray;
    }

    if (name.includes('binary search') || name.includes('search')) {
        return window.SOLUTION_NOTES.binarySearch;
    }

    if (name.includes('prime') || name.includes('factor') || name.includes('gcd') || name.includes('lcm') || name.includes('fibonacci') || name.includes('power') || name.includes('number')) {
        return window.SOLUTION_NOTES.mathPattern;
    }

    if (name.includes('string') || name.includes('words') || name.includes('vowels') || name.includes('character') || name.includes('alphabet') || name.includes('case')) {
        return window.SOLUTION_NOTES.stringPattern;
    }

    return window.SOLUTION_NOTES.default;
};

window.normalizeSolutionNotes = function (notes, question) {
    return {
        title: notes.title,
        overview: notes.overview,
        approach: notes.approach,
        variables: notes.variables || ['left', 'right', 'mid', 'count', 'result'],
        steps: notes.steps || [],
        pseudoCode: notes.pseudoCode || [],
        why: notes.why,
        complexity: notes.complexity,
        interviewTip: notes.interviewTip,
        summaryLine: `${question.lcName} · ${notes.title}`
    };
};