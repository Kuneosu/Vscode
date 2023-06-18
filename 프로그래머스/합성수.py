def solution(n):
    answer = 0
    count=0
    if n<4:
        return 0
    else:
        for i in range (1,n+1):
            for j in range(1,i+1):
                if i % j == 0 :
                    count += 1
            if count >= 3 :
                answer += 1
            count = 0
            
    return answer