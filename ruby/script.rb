# Welcome to Ruby!
puts "irb"

Dir.glob('/path/*') do |fileName|
 #file = File.new(fileName)
 if File.directory?("#{fileName}") then
   puts "#{fileName} is a directory"
 end
end

=begin
files = Dir.glob("/path").select {|f| File.directory? f}
Dir.chdir("/home/carlospatinos/Development/config_tools")
Dir.foreach(".") {|x| puts "Got #{x}" }
=end