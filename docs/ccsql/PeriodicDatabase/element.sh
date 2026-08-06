#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ -z $1 ]]
then
    echo "Please provide an element as an argument."
    exit 0
elif [[ $1 =~ ^[0-9]+$ ]]
then
  SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number = $1")
  NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number = $1")

  if [[ -z $NAME ]]
  then
    echo "I could not find that element in the database."
    exit 0
  fi
  
  MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number = $1")
  MELT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number = $1")
  BOIL=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number = $1")
  TYPE_ID=$($PSQL "SELECT type_id FROM properties WHERE atomic_number = $1")
  TYPE=$($PSQL "SELECT type FROM types WHERE type_id = $TYPE_ID")
  echo "The element with atomic number $1 is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELT celsius and a boiling point of $BOIL celsius."

else
  INPUT=$(echo "$1" | sed 's/^./\U&/')
  SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE symbol='$INPUT' OR name='$INPUT'")
  NAME=$($PSQL "SELECT name FROM elements WHERE symbol='$INPUT' OR name='$INPUT'")
  NUM=$($PSQL "SELECT atomic_number FROM elements WHERE symbol='$INPUT' OR name='$INPUT'")
  
  if [[ -z $NUM ]]
  then
    echo "I could not find that element in the database."
    exit 0
  fi

  MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number = $NUM")
  MELT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number = $NUM")
  BOIL=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number = $NUM")
  TYPE_ID=$($PSQL "SELECT type_id FROM properties WHERE atomic_number = $NUM")
  TYPE=$($PSQL "SELECT type FROM types WHERE type_id = $TYPE_ID")
  echo "The element with atomic number $NUM is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELT celsius and a boiling point of $BOIL celsius."

fi



