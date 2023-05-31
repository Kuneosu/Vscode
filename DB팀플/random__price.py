import random

def generate_random_number():
    ranges = [(500000, 1000000, 100000),
              (1000000, 5000000, 500000),
              (5000000, 10000000, 1000000),
              (10000000, 50000000, 5000000),
              (50000000, 100000000, 10000000)]
    
    range_index = random.randint(0, len(ranges) - 1)
    min_value, max_value, step = ranges[range_index]
    
    number = random.randrange(min_value, max_value, step)
    
    return number
prices = []
for i in range(10):
    price = generate_random_number()
    prices.append(price)

print(prices)