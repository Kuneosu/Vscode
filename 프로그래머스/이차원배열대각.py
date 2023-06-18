a = [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	

print(len(a))
print(len(a[0]))
print(a[0][2])
k=2
answer = 0
for i in range(len(a)):
    for j in range(len(a[0])):
        if i+j <= k:
            answer += a[i][j]
            
print(answer)