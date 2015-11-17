require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  puts "What is your name?"
  name = gets
  name = name.chomp
  puts "Hello, " + name + ". How many ingredients do you have?"
  variables = gets.chomp
  puts "Which " + variables + " ingredients do you have, " + name + "?"
  puts "List your first ingredient."
  ingredient1 = gets.chomp
  puts "With " + ingredient1 + " you can make:"

end
