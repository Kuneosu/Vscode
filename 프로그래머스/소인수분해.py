def solution(n):
    answer = []
    d = 2
    while(d<=n):
        if n%d == 0:
            answer.append(d)
            print(f"append : {d}")
            n = n/d
        else:
            d += 1
            print(f"d+1 : {d}")
            
    answer = set(answer)
    return answer

print(solution(420))