from collections import Counter
def longest_subarray(arr):
    count = Counter(arr)
    max_len = 0
    for num in count:
        current = count[num] + count.get(num + 1, 0)
        max_len = max(max_len, current)
    return max_len