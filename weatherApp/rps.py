import random

choices = ['rock','paper','scissors']

tie = True
while tie:

    # validate user input
    player = None 
    while player not in choices:
        player = input('Enter rock or paper or scissors: ').lower()
        
    computer = random.choice(choices) 
    print(f'You chose {player}')
    print(f'Computer chose {computer}')

    if player == computer: 
        print('It\'s a tie')  
    else: # not a tie - exit loop 
        tie = False 
        if player == 'rock': 
            if computer == 'scissors': 
                print('You win!')
            else: 
                print('You lose!')
        elif player == 'paper':
            if computer == 'rock': 
                print('You win!')
            else: 
                print('You lose!')
        else: # player is scissors
            if computer == 'paper': 
                print('You win!')
            else: 
                print('You lose!')
    





