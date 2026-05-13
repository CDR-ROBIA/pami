input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    couleur = 1
})
function envoie_ordre() {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    if (1 == couleur) {
        radio.sendString("grok_bleu")
    } else if (2 == couleur) {
        radio.sendString("grok_jaune")
    } else {
        basic.showString("echec envoie")
    }
    
    basic.showIcon(IconNames.Yes)
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    envoie_ordre()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    couleur = 2
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    envoie_ordre()
})
let couleur = 0
couleur = 0
while (0 == couleur) {
    basic.showIcon(IconNames.No)
}
if (1 == couleur) {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
} else if (2 == couleur) {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
} else {
    while (false) {
        basic.showString("error grok")
    }
}

