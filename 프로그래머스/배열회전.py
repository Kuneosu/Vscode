n = [1, 2, 3]	
d = "left"
answer=[]
temp = ""
if d == "right":
    answer.append(n[-1])
    for item in n:
        answer.append(item)
    del answer[-1]
elif d == "left":
    temp = n[0]
    del n[0]
    for item in n:
        answer.append(item)
    answer.append(temp)

print(answer)