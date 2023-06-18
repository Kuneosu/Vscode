arr=[0, 1, 2, 4, 3]	
queries=[[0, 4, 2],[0, 3, 2],[0, 2, 2]]	
ans = []
answer=[]
for q in queries:
    s = q[0]
    e = q[1]
    k = q[2]
    for i in range(s,e+1):
        if arr[i]>k:
            ans.append(arr[i])
    if ans:
        answer.append(min(ans))
        ans = []
    else:
        answer.append(-1)
        
print(answer)