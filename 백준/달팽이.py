a,b,v = map(int,input().split())
snail = 0
day = 1
while v > snail :
    snail += a
    if snail < v :
        snail -= b
        day += 1
print(day)
    