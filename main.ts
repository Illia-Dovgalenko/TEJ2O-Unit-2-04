/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: MAR 2026
 * This program: Temperature
*/

let temperature = 0


basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
    temperature + input.temperature()

    basic.showString('The temperature is :' + temperature + ' C')
})

