#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo -e "\nEnter your username:"
read USERNAME
USER=$($PSQL "SELECT username FROM users WHERE username = '$USERNAME'")

if [[ -z $USER ]] 
then 
  echo -e "Welcome, $USERNAME! It looks like this is your first time here."
  NEW_USER=$($PSQL "INSERT INTO users(username, games_played) VALUES('$USERNAME', 0)")
else
  GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username = '$USERNAME'")
  BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username = '$USERNAME'")
  echo -e "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi 

NUMBER=$(( RANDOM % 1000 + 1 ))
echo -e "\nGuess the secret number between 1 and 1000:"
read GUESS
GUESSES=1

GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username = '$USERNAME'")
(( GAMES_PLAYED++ ))
GAMES_PLAYED_UPDATED=$($PSQL "UPDATE users SET games_played=$GAMES_PLAYED WHERE username = '$USERNAME'")

while [[ $GUESS != $NUMBER ]]
do
  if [[ ! $GUESS =~ ^[0-9]+$ ]]
  then
    echo -e "\nThat is not an integer, guess again:"
    read GUESS
    continue
  fi

  if (( GUESS > NUMBER ))
  then
    echo -e "\nIt's lower than that, guess again:"
    read GUESS
    (( GUESSES++ ))
  else
    echo -e "\nIt's higher than that, guess again:"
    read GUESS
    (( GUESSES++ ))
  fi
done

BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username = '$USERNAME'")
if [[ -z $BEST_GAME ]] || (( GUESSES < BEST_GAME ))
then
  NEW_BEST=$($PSQL "UPDATE users SET best_game=$GUESSES WHERE username = '$USERNAME'")
fi

echo -e "\nYou guessed it in $GUESSES tries. The secret number was $NUMBER. Nice job!"
exit 0
