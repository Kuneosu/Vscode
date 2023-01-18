t = int(input())
case_list = []
for i in range(t):
    case = input()
    case_list.append(case)

for i in range(len(case_list)):
    r = int(case_list[i][0])
    s = case_list[i][2:]
    for j in s:
        for x in range(r):
            print(j,end="")
    print("")
    
