import random

random_num = random.randrange (0,100)
while (random_num != 15):
    print (random_num)
    random_num = random.randrange(0,100)
i = 0;

while(i <= 50):
    if(i%2 == 0):
        print(i)
    elif(i == 30):
        break
    else:
        i += 1
        continue
    i += 1
