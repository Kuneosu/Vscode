n=3
answer= [[0 for _ in range(n)] for _ in range(n)]
for i in range(3):
    for j in range(3):
        if i == j:
            answer[i][j] = 1
print(answer)