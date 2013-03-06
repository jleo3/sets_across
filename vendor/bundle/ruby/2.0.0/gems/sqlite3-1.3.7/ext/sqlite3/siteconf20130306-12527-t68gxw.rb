require 'rbconfig'
dest_path = "/home/joe/dev/sets_across/vendor/bundle/ruby/2.0.0/gems/sqlite3-1.3.7/lib"
RbConfig::MAKEFILE_CONFIG['sitearchdir'] = dest_path
RbConfig::CONFIG['sitearchdir'] = dest_path
RbConfig::MAKEFILE_CONFIG['sitelibdir'] = dest_path
RbConfig::CONFIG['sitelibdir'] = dest_path
