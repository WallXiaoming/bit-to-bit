radio.set_group(0)

def on_forever():
    if input.button_is_pressed(Button.A):
        
        radio.send_number(1)
        basic.pause(300)
    if input.button_is_pressed(Button.B):
        radio.send_number(2)
        basic.pause(300)
basic.forever(on_forever)
