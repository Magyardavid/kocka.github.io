#def append_to_file(parameter):
#    with open("file.txt", "a") as file:
#        file.write(parameter + "\n")





import sys
number = sys.argv[1]

#append_to_file(number)


import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)

pins = [2,3,4,17,27,22,10,9,11,5,6,13,19,26,18,23,24,25,8,7]

if(number == "-1"):
        for i in range(0,20):
            GPIO.setup(pins[i], GPIO.OUT)
            GPIO.output(pins[i],GPIO.LOW)
        print("lekapcsolva")
elif(number != "-1" and number <20 and number > -1):
        GPIO.setup(pins[number], GPIO.OUT)
        GPIO.output(pins[number],GPIO.HIGH)
        print(f"felkapcsolva a {pins[number]}")
else:
       print("something went wrong")
