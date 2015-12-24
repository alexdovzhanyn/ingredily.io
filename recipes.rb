require 'sinatra'
require 'sinatra/reloader' if development?
require_relative 'server.rb'

match = Array.new
peanutButterJelly = ['peanut', 'butter', 'jelly']

#if ingredients == peanutButterJelly
#  match << gets.chomp
#end
