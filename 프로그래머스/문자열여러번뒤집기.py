my_string ="rermgorpsam"	
queries = [[2, 3], [0, 7], [5, 9], [6, 10]]	
def solution(my_string, queries):
    my_string = list(my_string)
    for s,e in queries: 
        print(f"section s = {s}, e = {e}")
        if s>0 :
            print(f"if s > 0, s = {s}")
            change = my_string[e:s-1:-1]
            print(f"change = {change}")
            idx = s 
            for c in change:
                print(f"c = {c} , idx = {idx}")
                print(f"변경전 = {my_string}")
                my_string[idx] = c
                idx+=1
                print(f"변경후 = {my_string}")
            
        else:
            print("if s = 0 ")
            change = my_string[e::-1]
            print(f"change = {change}")
            idx=s
            for c in change:
                print(f"c = {c} , idx = {idx}")
                print(f"변경전 = {my_string}")
                my_string[idx] = c
                idx+=1
                print(f"변경후 = {my_string}")
        
    return ''.join(my_string)

print(solution(my_string,queries))