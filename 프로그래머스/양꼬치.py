import math

def solution(n,k):
    lag = n * 12000 
    drink = k * 2000
    service = math.trunc(n/10) * 2000
    answer = lag + drink - service
    return answer

print(solution(10,3))
