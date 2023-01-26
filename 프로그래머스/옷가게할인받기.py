def solution(price):
    if price >= 500000:
        price *= 0.8
    elif price >= 300000:
        price *= 0.9
    elif price >= 100000:
        price *= 0.95
    else : pass
    return int(price)

print(solution(150000))
print(solution(580000))

