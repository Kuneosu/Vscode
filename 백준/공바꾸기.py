n,m = map(int,input().split())

basket = []
temp = 0

for i in range(n):
    basket.append(i+1)

for x in range(m):
    i,j = map(int,input().split())
    i = i-1
    j = j-1
    temp = basket[i]
    basket[i] = basket[j]
    basket[j] = temp

for item in basket:
    print(item,end=" ")