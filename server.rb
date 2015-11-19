require 'sinatra'
require 'sinatra/reloader' if development?

#empty variables
name = ""
ingredients = Array.new
ingredientNumber = ""
currentIngredient = 1


#get user's name
puts "What is your name?"
name = gets.chomp
puts "Hello, " + name + "."

#asks for number of ingredients
puts "How many ingredients do you have?"
ingredientNumber = gets.chomp.to_i

#asks for more ingredients
until currentIngredient == ingredientNumber do
  puts "What is an ingredient that you have?"
  ingredients << gets.chomp
  ingredients = ingredients
  currentIngredient = currentIngredient + 1
end

if currentIngredient == ingredientNumber
  puts "With " + ingredients.to_s + " you can make:"
end
