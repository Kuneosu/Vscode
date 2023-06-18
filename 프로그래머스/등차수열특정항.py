a = 7
d = 1
included = [False, False, False, True, False, False, False]
nums = []
for i in range(a,len(included)*d+a,d):
    nums.append(i)
    
print(nums)