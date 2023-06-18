quiz = ["3 - 4 = -3", "5 + 6 = 11"]
answer= []
for i in quiz :
    q = i.split()
    op = q[1]
    num1 = int(q[0])
    num2 = int(q[2])
    res = int(q[4])
    if op == '+':
        if num1 + num2 == res:
            answer.append("O")
        else:
            answer.append("X")
    elif op == '-':
        if num1 - num2 == res:
            answer.append("O")
        else:
            answer.append("X")