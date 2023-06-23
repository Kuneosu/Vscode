dots =[[4, 1], [4, 1], [2, 4], [5, 10]]	
slopes = set()
slope_list = []
for i in range(3):
    x1 = dots[i][0]
    y1 = dots[i][1]
    for j in range(i+1,4):
        print(f"i = {i}")
        print(f"j = {j}")
        x2 = dots[j][0]
        y2 = dots[j][1]
        if x1==x2 and y1==y2:
            slope = f"{i}{j}"
        else:
            slope = (y1-y2)/(x1-x2)
        slopes.add(slope)
        slope_list.append(slope)

answer = 1 if len(slopes) == 6 else 0     
print(answer)