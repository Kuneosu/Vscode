n,m = map(int,input().split())

basket = []
temp = []

for i in range(n):
    basket.append(i+1)

for x in range(m):
    i,j = map(int,input().split())
    i = i-1
    j = j-1
    count = 0
    for y in range(j,i-1,-1):
        temp.append(basket[y])
    for y in range(i,j+1):
        basket[y] = temp[count]
        count += 1
    temp.clear()

for item in basket:
    print(item,end=" ")
    
    
    
