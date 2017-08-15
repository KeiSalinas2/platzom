# Platzom

Words translation to Platzom language.

## Language Description

- If the word ends with "ar", those two letters are removed.
- If the word starts with 'Z', 'pe' is added at the end.
- If the translated word has 10 or  more letters, it must split in half and join with a half dash
- Finally, if the original word is a palindrome, no previous rules count and returns the word capitalized.

## Install

```
npm i platzom
```

## Use

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Licencia

[MIT](https://opensource.org/licenses/MIT)
