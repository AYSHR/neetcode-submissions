class Solution:
    def isValid(self, s: str) -> bool:
        store = [];
        map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        for char in s :
            if char in map:
                top_element = store.pop() if store else '#'
            
                if map[char] != top_element:
                    return False
            else:
                store.append(char)
        return not store
        