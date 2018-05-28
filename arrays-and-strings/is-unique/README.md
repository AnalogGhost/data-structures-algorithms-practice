#isUnique

An algorithm to determine if a sting has all unique characters.

## Questions

1. Is it an ascii or unicode string?

## Solutions

1. Create an array of boolean values where the flag at index i indicates whether character i in the alphabet is contained in the string  The second time you see this character return false.

1. We can immediatly return false if the string length exceeds the number of unique characters in the alphabet.