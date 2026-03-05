"""
Created by: Illia
Created on: MAR 2026
This program: Temperature
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        display.scroll(temperature() + "C")

