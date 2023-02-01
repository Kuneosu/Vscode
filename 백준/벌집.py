n = int(input())

house = 1
cnt = 1
while n > house :
    house += 6 * cnt
    cnt +=1 
print(cnt)