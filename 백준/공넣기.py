n,m = map(int,input().split())

basket = []

for i in range(n):
    basket.append(0)

for x in range(m):
    i,j,k = map(int,input().split())
    for y in range(i-1,j):
        basket[y] = k

for item in basket:
    print(item,end=" ")