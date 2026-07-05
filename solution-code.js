window.JAVA_SOLUTION_CODES = {
    rotatedSortedArrayMin: {
        title: 'Rotated Sorted Array Minimum',
        code: `public class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}`
    },
    binarySearchTarget: {
        title: 'Binary Search',
        code: `public class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}`
    },
    minMaxSinglePass: {
        title: 'Single Pass Min / Max',
        code: `public class Solution {
    public int findMinimum(int[] nums) {
        int currentMin = nums[0];

        for (int value : nums) {
            if (value < currentMin) {
                currentMin = value;
            }
        }

        return currentMin;
    }

    public int findMaximum(int[] nums) {
        int currentMax = nums[0];

        for (int value : nums) {
            if (value > currentMax) {
                currentMax = value;
            }
        }

        return currentMax;
    }
}`
    },
    secondMinMax: {
        title: 'Second Smallest / Second Largest',
        code: `public class Solution {
    public int[] findSecondExtremes(int[] nums) {
        int smallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int value : nums) {
            if (value < smallest) {
                secondSmallest = smallest;
                smallest = value;
            } else if (value > smallest && value < secondSmallest) {
                secondSmallest = value;
            }

            if (value > largest) {
                secondLargest = largest;
                largest = value;
            } else if (value < largest && value > secondLargest) {
                secondLargest = value;
            }
        }

        return new int[] { secondSmallest, secondLargest };
    }
}`
    },
    runningSum: {
        title: 'Running Sum / Prefix Sum',
        code: `public class Solution {
    public int[] runningSum(int[] nums) {
        int[] prefixSum = new int[nums.length];
        int total = 0;

        for (int index = 0; index < nums.length; index++) {
            total += nums[index];
            prefixSum[index] = total;
        }

        return prefixSum;
    }
}`
    },
    reverseArray: {
        title: 'Reverse Array In Place',
        code: `public class Solution {
    public void reverseArray(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
}`
    },
    rotateArray: {
        title: 'Rotate Array In Place',
        code: `public class Solution {
    public void rotate(int[] nums, int k) {
        int length = nums.length;
        k = k % length;

        reverse(nums, 0, length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, length - 1);
    }

    private void reverse(int[] nums, int left, int right) {
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
}`
    },
    palindromeString: {
        title: 'Palindrome Check Using Two Pointers',
        code: `public class Solution {
    public boolean isPalindrome(String text) {
        int left = 0;
        int right = text.length() - 1;

        while (left < right) {
            if (text.charAt(left) != text.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}`
    },
    palindromeNumber: {
        title: 'Palindrome Number',
        code: `public class Solution {
    public boolean isPalindrome(int number) {
        if (number < 0) {
            return false;
        }

        int originalNumber = number;
        int reversedNumber = 0;

        while (number > 0) {
            int digit = number % 10;
            reversedNumber = reversedNumber * 10 + digit;
            number /= 10;
        }

        return originalNumber == reversedNumber;
    }
}`
    },
    hashMapCount: {
        title: 'Hash Map / Set Counting',
        code: `import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> seenValues = new HashSet<>();

        for (int value : nums) {
            if (seenValues.contains(value)) {
                return true;
            }
            seenValues.add(value);
        }

        return false;
    }

    public boolean areAnagrams(String firstText, String secondText) {
        if (firstText.length() != secondText.length()) {
            return false;
        }

        Map<Character, Integer> frequencyMap = new HashMap<>();

        for (int index = 0; index < firstText.length(); index++) {
            char firstChar = firstText.charAt(index);
            char secondChar = secondText.charAt(index);

            frequencyMap.put(firstChar, frequencyMap.getOrDefault(firstChar, 0) + 1);
            frequencyMap.put(secondChar, frequencyMap.getOrDefault(secondChar, 0) - 1);
        }

        for (int count : frequencyMap.values()) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}`
    },
    pivotIndex: {
        title: 'Equilibrium / Pivot Index',
        code: `public class Solution {
    public int pivotIndex(int[] nums) {
        int totalSum = 0;

        for (int value : nums) {
            totalSum += value;
        }

        int leftSum = 0;

        for (int index = 0; index < nums.length; index++) {
            int rightSum = totalSum - leftSum - nums[index];

            if (leftSum == rightSum) {
                return index;
            }

            leftSum += nums[index];
        }

        return -1;
    }
}`
    },
    twoSum: {
        title: 'Two Sum',
        code: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> indexMap = new HashMap<>();

        for (int index = 0; index < nums.length; index++) {
            int neededValue = target - nums[index];

            if (indexMap.containsKey(neededValue)) {
                return new int[] { indexMap.get(neededValue), index };
            }

            indexMap.put(nums[index], index);
        }

        return new int[] { -1, -1 };
    }
}`
    },
    primeCheck: {
        title: 'Prime Number Check',
        code: `public class Solution {
    public boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }

        for (int divisor = 2; divisor * divisor <= number; divisor++) {
            if (number % divisor == 0) {
                return false;
            }
        }

        return true;
    }
}`
    },
    gcdLcm: {
        title: 'GCD and LCM',
        code: `public class Solution {
    public int gcd(int firstNumber, int secondNumber) {
        while (secondNumber != 0) {
            int remainder = firstNumber % secondNumber;
            firstNumber = secondNumber;
            secondNumber = remainder;
        }

        return firstNumber;
    }

    public int lcm(int firstNumber, int secondNumber) {
        return (firstNumber / gcd(firstNumber, secondNumber)) * secondNumber;
    }
}`
    },
    power: {
        title: 'Power Function',
        code: `public class Solution {
    public double myPow(double base, int exponent) {
        long power = exponent;

        if (power < 0) {
            base = 1.0 / base;
            power = -power;
        }

        double result = 1.0;

        while (power > 0) {
            if ((power & 1) == 1) {
                result *= base;
            }
            base *= base;
            power >>= 1;
        }

        return result;
    }
}`
    },
    fibonacci: {
        title: 'Fibonacci Number',
        code: `public class Solution {
    public int fib(int n) {
        if (n <= 1) {
            return n;
        }

        int previous = 0;
        int current = 1;

        for (int index = 2; index <= n; index++) {
            int nextValue = previous + current;
            previous = current;
            current = nextValue;
        }

        return current;
    }
}`
    },
    reverseWords: {
        title: 'Reverse Words in a String',
        code: `public class Solution {
    public String reverseWords(String text) {
        String[] words = text.trim().split("\\s+");
        StringBuilder builder = new StringBuilder();

        for (int index = words.length - 1; index >= 0; index--) {
            builder.append(words[index]);
            if (index > 0) {
                builder.append(' ');
            }
        }

        return builder.toString();
    }
}`
    },
    reverseString: {
        title: 'Reverse String',
        code: `public class Solution {
    public void reverseString(char[] text) {
        int left = 0;
        int right = text.length - 1;

        while (left < right) {
            char temp = text[left];
            text[left] = text[right];
            text[right] = temp;
            left++;
            right--;
        }
    }
}`
    },
    lowerCase: {
        title: 'Convert to Lower Case',
        code: `public class Solution {
    public String toLowerCase(String text) {
        return text.toLowerCase();
    }
}`
    },
    removeVowels: {
        title: 'Remove Vowels from a String',
        code: `public class Solution {
    public String removeVowels(String text) {
        StringBuilder builder = new StringBuilder();

        for (int index = 0; index < text.length(); index++) {
            char currentChar = text.charAt(index);
            if (!isVowel(currentChar)) {
                builder.append(currentChar);
            }
        }

        return builder.toString();
    }

    private boolean isVowel(char currentChar) {
        return currentChar == 'a' || currentChar == 'e' || currentChar == 'i' || currentChar == 'o' || currentChar == 'u'
            || currentChar == 'A' || currentChar == 'E' || currentChar == 'I' || currentChar == 'O' || currentChar == 'U';
    }
}`
    },
    countWords: {
        title: 'Count Words in a String',
        code: `public class Solution {
    public int countWords(String text) {
        String trimmedText = text.trim();

        if (trimmedText.isEmpty()) {
            return 0;
        }

        return trimmedText.split("\\s+").length;
    }
}`
    },
    substringSearch: {
        title: 'Substring Search Using KMP',
        code: `public class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) {
            return 0;
        }

        int[] longestPrefixSuffix = buildLps(needle);
        int textIndex = 0;
        int patternIndex = 0;

        while (textIndex < haystack.length()) {
            if (haystack.charAt(textIndex) == needle.charAt(patternIndex)) {
                textIndex++;
                patternIndex++;

                if (patternIndex == needle.length()) {
                    return textIndex - patternIndex;
                }
            } else if (patternIndex > 0) {
                patternIndex = longestPrefixSuffix[patternIndex - 1];
            } else {
                textIndex++;
            }
        }

        return -1;
    }

    private int[] buildLps(String pattern) {
        int[] lps = new int[pattern.length()];
        int length = 0;
        int index = 1;

        while (index < pattern.length()) {
            if (pattern.charAt(index) == pattern.charAt(length)) {
                length++;
                lps[index] = length;
                index++;
            } else if (length > 0) {
                length = lps[length - 1];
            } else {
                lps[index] = 0;
                index++;
            }
        }

        return lps;
    }
}`
    },
    sortBubble: {
        title: 'Bubble Sort',
        code: `public class Solution {
    public void bubbleSort(int[] nums) {
        int n = nums.length;

        for (int pass = 0; pass < n - 1; pass++) {
            boolean swapped = false;

            for (int index = 0; index < n - pass - 1; index++) {
                if (nums[index] > nums[index + 1]) {
                    int temp = nums[index];
                    nums[index] = nums[index + 1];
                    nums[index + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }
    }
}`
    },
    sortSelection: {
        title: 'Selection Sort',
        code: `public class Solution {
    public void selectionSort(int[] nums) {
        int n = nums.length;

        for (int start = 0; start < n - 1; start++) {
            int smallestIndex = start;

            for (int index = start + 1; index < n; index++) {
                if (nums[index] < nums[smallestIndex]) {
                    smallestIndex = index;
                }
            }

            int temp = nums[start];
            nums[start] = nums[smallestIndex];
            nums[smallestIndex] = temp;
        }
    }
}`
    },
    sortInsertion: {
        title: 'Insertion Sort',
        code: `public class Solution {
    public void insertionSort(int[] nums) {
        for (int index = 1; index < nums.length; index++) {
            int currentValue = nums[index];
            int position = index - 1;

            while (position >= 0 && nums[position] > currentValue) {
                nums[position + 1] = nums[position];
                position--;
            }

            nums[position + 1] = currentValue;
        }
    }
}`
    },
    sortQuick: {
        title: 'Quick Sort',
        code: `public class Solution {
    public void quickSort(int[] nums) {
        sort(nums, 0, nums.length - 1);
    }

    private void sort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }

        int pivotIndex = partition(nums, left, right);
        sort(nums, left, pivotIndex - 1);
        sort(nums, pivotIndex + 1, right);
    }

    private int partition(int[] nums, int left, int right) {
        int pivot = nums[right];
        int smallerIndex = left;

        for (int index = left; index < right; index++) {
            if (nums[index] <= pivot) {
                int temp = nums[smallerIndex];
                nums[smallerIndex] = nums[index];
                nums[index] = temp;
                smallerIndex++;
            }
        }

        int temp = nums[smallerIndex];
        nums[smallerIndex] = nums[right];
        nums[right] = temp;

        return smallerIndex;
    }
}`
    },
    sortMerge: {
        title: 'Merge Sort',
        code: `public class Solution {
    public void mergeSort(int[] nums) {
        if (nums.length <= 1) {
            return;
        }

        int[] helper = new int[nums.length];
        sort(nums, helper, 0, nums.length - 1);
    }

    private void sort(int[] nums, int[] helper, int left, int right) {
        if (left >= right) {
            return;
        }

        int mid = left + (right - left) / 2;
        sort(nums, helper, left, mid);
        sort(nums, helper, mid + 1, right);
        merge(nums, helper, left, mid, right);
    }

    private void merge(int[] nums, int[] helper, int left, int mid, int right) {
        for (int index = left; index <= right; index++) {
            helper[index] = nums[index];
        }

        int leftIndex = left;
        int rightIndex = mid + 1;
        int currentIndex = left;

        while (leftIndex <= mid && rightIndex <= right) {
            if (helper[leftIndex] <= helper[rightIndex]) {
                nums[currentIndex++] = helper[leftIndex++];
            } else {
                nums[currentIndex++] = helper[rightIndex++];
            }
        }

        while (leftIndex <= mid) {
            nums[currentIndex++] = helper[leftIndex++];
        }
    }
}`
    },
    default: {
        title: 'General Java Solution',
        code: `public class Solution {
    public int solve(int[] nums) {
        int result = 0;

        for (int value : nums) {
            result += value;
        }

        return result;
    }
}`
    }
};

window.getJavaSolutionCode = function (question) {
    const name = `${question.name} ${question.lcName}`.toLowerCase();

    if (name.includes('rotated sorted array') && name.includes('smallest')) {
        return window.JAVA_SOLUTION_CODES.rotatedSortedArrayMin;
    }

    if (name.includes('binary search') || (name.includes('search') && name.includes('array'))) {
        return window.JAVA_SOLUTION_CODES.binarySearchTarget;
    }

    if (name.includes('second smallest') || name.includes('second largest')) {
        return window.JAVA_SOLUTION_CODES.secondMinMax;
    }

    if (name.includes('smallest') || name.includes('minimum') || name.includes('largest') || name.includes('maximum')) {
        return window.JAVA_SOLUTION_CODES.minMaxSinglePass;
    }

    if (name.includes('running sum') || name.includes('sum of') || name.includes('average')) {
        return window.JAVA_SOLUTION_CODES.runningSum;
    }

    if (name.includes('reverse words')) {
        return window.JAVA_SOLUTION_CODES.reverseWords;
    }

    if (name.includes('reverse a given array') || name.includes('reverse array')) {
        return window.JAVA_SOLUTION_CODES.reverseArray;
    }

    if (name.includes('rotate array') || name.includes('rotation of elements') || name.includes('circular rotation')) {
        return window.JAVA_SOLUTION_CODES.rotateArray;
    }

    if (name.includes('palindrome') && name.includes('number')) {
        return window.JAVA_SOLUTION_CODES.palindromeNumber;
    }

    if (name.includes('palindrome')) {
        return window.JAVA_SOLUTION_CODES.palindromeString;
    }

    if (name.includes('duplicate') || name.includes('frequency') || name.includes('anagram') || name.includes('common') || name.includes('repeating') || name.includes('non-repeating') || name.includes('subset') || name.includes('symmetric')) {
        return window.JAVA_SOLUTION_CODES.hashMapCount;
    }

    if (name.includes('pivot') || name.includes('equilibrium')) {
        return window.JAVA_SOLUTION_CODES.pivotIndex;
    }

    if (name.includes('two sum')) {
        return window.JAVA_SOLUTION_CODES.twoSum;
    }

    if (name.includes('prime')) {
        return window.JAVA_SOLUTION_CODES.primeCheck;
    }

    if (name.includes('gcd') || name.includes('lcm')) {
        return window.JAVA_SOLUTION_CODES.gcdLcm;
    }

    if (name.includes('power')) {
        return window.JAVA_SOLUTION_CODES.power;
    }

    if (name.includes('fibonacci')) {
        return window.JAVA_SOLUTION_CODES.fibonacci;
    }

    if (name.includes('reverse string')) {
        return window.JAVA_SOLUTION_CODES.reverseString;
    }

    if (name.includes('lower case') || name.includes('change case')) {
        return window.JAVA_SOLUTION_CODES.lowerCase;
    }

    if (name.includes('remove vowels')) {
        return window.JAVA_SOLUTION_CODES.removeVowels;
    }

    if (name.includes('number of words') || name.includes('count number of words')) {
        return window.JAVA_SOLUTION_CODES.countWords;
    }

    if (name.includes('substring') || name.includes('first occurrence')) {
        return window.JAVA_SOLUTION_CODES.substringSearch;
    }

    if (name.includes('bubble sort')) {
        return window.JAVA_SOLUTION_CODES.sortBubble;
    }

    if (name.includes('selection sort')) {
        return window.JAVA_SOLUTION_CODES.sortSelection;
    }

    if (name.includes('insertion sort')) {
        return window.JAVA_SOLUTION_CODES.sortInsertion;
    }

    if (name.includes('quick sort')) {
        return window.JAVA_SOLUTION_CODES.sortQuick;
    }

    if (name.includes('merge sort')) {
        return window.JAVA_SOLUTION_CODES.sortMerge;
    }

    return window.JAVA_SOLUTION_CODES.default;
};