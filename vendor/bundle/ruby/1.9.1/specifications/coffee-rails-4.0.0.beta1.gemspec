# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "coffee-rails"
  s.version = "4.0.0.beta1"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1") if s.respond_to? :required_rubygems_version=
  s.authors = ["Santiago Pastorino"]
  s.date = "2013-02-25"
  s.description = "CoffeeScript adapter for the Rails asset pipeline."
  s.email = ["santiago@wyeworks.com"]
  s.homepage = "https://github.com/rails/coffee-rails"
  s.require_paths = ["lib"]
  s.rubyforge_project = "coffee-rails"
  s.rubygems_version = "1.8.25"
  s.summary = "CoffeeScript adapter for the Rails asset pipeline."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<coffee-script>, [">= 2.2.0"])
      s.add_runtime_dependency(%q<railties>, ["< 5.0", ">= 4.0.0.beta"])
    else
      s.add_dependency(%q<coffee-script>, [">= 2.2.0"])
      s.add_dependency(%q<railties>, ["< 5.0", ">= 4.0.0.beta"])
    end
  else
    s.add_dependency(%q<coffee-script>, [">= 2.2.0"])
    s.add_dependency(%q<railties>, ["< 5.0", ">= 4.0.0.beta"])
  end
end
