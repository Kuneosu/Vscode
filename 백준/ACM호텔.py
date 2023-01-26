# H = 층수, W = 각 층당 방 수, N = 몇 번째 손님인지

# Case 1. 6 12 10
# 12개짜리 방이 6층까지 있다, 10번째 손님이므로
# 101, 201, 301, 401, 501, 601, 102, 202, 302, 402
# 402 번 방에 배정된다.

def room(h,w,n):
    floor = 0
    number = 1
    for i in range(n):
        floor += 1
        if floor > h :
            floor = 1
            number += 1
    floor *= 100
    room = floor + number
    return room

t = int(input())
case = []
for i in range(t):
    h,w,n = map(int,input().split())
    case.append(room(h,w,n))
for r in case:
    print(r)