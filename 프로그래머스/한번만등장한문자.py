s = "hello"	
n = []
answer = []
for i in s:
    if i in answer and i not in n:
        n.append(i)
        answer.remove(i)
    if i not in n:
        answer.append(i)

answer = sorted(answer)
answer = ''.join(answer)
print(answer)        