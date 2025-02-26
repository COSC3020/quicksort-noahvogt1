# Quicksort
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I will be absolutely 1000% honest. This was difficult. I did an entire version on my own but couldn't work out this one huge bug so I turned to the internet. That is where I found the idea of using the stacks was from the online AI that google provides. I then tried to
impliment it to the best of my ability but had to look back at the example a few times. After going through it a few more times I completely understand why and how it works and why it fixed the problem I was having, but that is all I used.

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

To me it seems that the worst case runtime for this is $T(n) \in \Theta$(n^2)$  
because if the every single time, the pivot happened to be the smallest number,
the function would have to iterate over the entire list and then the sublists
would be n - 1. This would give us a total complexity of $\Theta$(n^2)$.
