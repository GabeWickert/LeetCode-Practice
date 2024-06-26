class Solution(object):
    def lengthOfLongestSubstring(self, s):
        n = len(s)
        max_len = 0
        left, right = 0, 0
        seen = set()

        while right < n:
            if s[right] not in seen:
                seen.add(s[right])
                max_len = max(max_len, right - left + 1)
                right += 1
            else:
                seen.remove(s[left])
                left += 1

        return max_len
        