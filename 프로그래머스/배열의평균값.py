numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
def solution(numbers):
    sum = 0
    count = 0
    for i in numbers:
        sum += i
        count += 1
    answer = sum/count
    return answer