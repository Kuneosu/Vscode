'''
1. 대소문자를 구분하지 않기 때문에 문자를 대문자로 통일합니다.
2. 반복문을 통해 문자열에 A~Z 까지의 알파벳이 몇개씩 있는지 찾고 리스트에 저장합니다.
3. 리스트의 최대값을 찾고 리스트에 최대값과 같은 값을 가진 인덱스가 있는지 체크합니다.
4. 최대값을 가진 인덱스가 하나라면 해당 인덱스의 알파벳을 출력 아니라면 물음표를 출력합니다.
'''

s = input()
s = s.upper()
alph_list = []

for i in range(26):
    sum = 0
    for j in s:
        if j == chr(65+i):
            sum += 1
    alph_list.append(sum)
            
m = max(alph_list)
c = alph_list.count(m)
if c >= 2 :
    print("?")
else :
    print(chr(65+alph_list.index(m)))