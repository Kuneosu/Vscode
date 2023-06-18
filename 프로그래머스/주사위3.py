def solution(a, b, c, d):
    answer = 0
    nums = sorted([a,b,c,d])
    same_count = 0
    # 동일한 주사위 수 파악
    for n in nums:
        if nums.count(n) > same_count:
            same_count = nums.count(n)
    
    if same_count == 4 :
        answer = nums[0] * 1111
    elif same_count == 3 :
        p = nums[1]
        q = nums[0] if nums[0] != nums[1] else nums[3]
        answer = (10*p+q)**2
    elif same_count == 2:
        check = set(nums)
        if len(check) == 2:
            print("case2-1")
            p = nums[1]
            q = nums[2]
            answer = (p+q)*abs(p-q)
        else:
            print("case2-2")
            for num in nums:
                c = nums.count(num)
                if c == 2 :
                    nums.remove(num)
                    nums.remove(num)
            answer = nums[0]*nums[1]
    else:
        answer = nums[0]
        
    return answer

a=2
b=5
c=2
d=6

print(solution(a,b,c,d))