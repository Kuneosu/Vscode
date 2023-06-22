answer= []
c = 'Programmers'
for i in range(ord('A'),ord('z')+1):
    if i >= 91 and i<= 96:
        continue
    answer.append(c.count(chr(i)))

print(answer)