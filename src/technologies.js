const technologies = [
  // Please maintain alphabetical order when you add a technology :)
  // Remember that months are zero-indexed in javascript date objects
  { name: "ABAP", released: new Date(1983, 0, 1), icon: "abap" },
  { name: "Ada", released: new Date(1980, 0, 1) },
  { name: "Airflow (Apache)", released: new Date(2017, 3, 19) },
  { name: "Amazon Web Services", released: new Date(2004, 2, 15) },
  { name: "Android", released: new Date(2008, 8, 23), icon: "android" },
  { name: "Angular", released: new Date(2016, 8, 14), icon: "angular" },
  { name: "AngularJS", released: new Date(2010, 9, 20), icon: "angular" },
  { name: "Ansible", released: new Date(2012, 2, 20) },
  { name: "Assembly", released: new Date(1949, 0, 1), icon: "asm" },
  { name: "Babbage Assembly", released: new Date(1971, 0, 1) },
  { name: "Babel", released: new Date(2014, 8, 28) },
  { name: "BackBoneJS", released: new Date(2010, 9, 13), icon: "backbone" },
  { name: "Bash", released: new Date(1989, 5, 8) },
  { name: "BASIC", released: new Date(1964, 4, 1) },
  { name: "Bootstrap 4", released: new Date(2018, 0, 18), icon: "bootstrap" },
  { name: "C", released: new Date(1972, 0, 1), icon: "c" },
  { name: "C#", released: new Date(2001, 11, 1), icon: "cSharp" },
  { name: "C++", released: new Date(1985, 9, 1), icon: "cPlusPlus" },
  { name: "CakePHP", released: new Date(2005, 3, 1), icon: "cakePHP" },
  { name: "Clojure", released: new Date(2007, 9, 16) },
  { name: "CodeIgniter", released: new Date(2006, 2, 28), icon: "codeIgniter" },
  { name: "CouchDB", released: new Date(2005, 2, 1) },
  { name: "Crystal", released: new Date(2014, 6, 18) },
  { name: "CSS", released: new Date(1996, 11, 17), icon: "css" },
  { name: "Dart", released: new Date(2011, 10, 10) },
  { name: "Direct3D", released: new Date(1996, 5, 2) },
  { name: "Django", released: new Date(2005, 6, 15), icon: "django" },
  { name: "Docker", released: new Date(2013, 2, 13), icon: "docker" },
  { name: "Drupal", released: new Date(2000, 4, 18), icon: "drupal" },
  { name: "D3", released: new Date(2010, 8, 27) },
  { name: "Electron", released: new Date(2013, 3, 12) },
  { name: "Elixir", released: new Date(2011, 0, 1) },
  { name: "Elm", released: new Date(2012, 3, 1) },
  { name: "Ember.js", released: new Date(2011, 11, 8) },
  { name: "Erlang", released: new Date(1986, 0, 1), icon: "erlang" },
  { name: "F#", released: new Date(2005, 5, 21) },
  { name: "Flask", released: new Date(2010, 3, 1) },
  { name: "Flutter", released: new Date(2017, 5, 12) },
  { name: "Fortran", released: new Date(1956, 9, 15) },
  { name: "fsl", released: new Date(2017, 7, 26) },
  { name: "Gatsby", released: new Date(2017, 7, 6), icon: "gatsby" },
  { name: "Gensim", released: new Date(2009, 7, 31) },
  { name: "Git", released: new Date(2005, 3, 3), icon: "git" },
  { name: "Go", released: new Date(2009, 9, 10), icon: "go" },
  { name: "Grafana", released: new Date(2013, 11, 11), icon: "grafana" },
  { name: "GraphQL", released: new Date(2015, 6, 2), icon: "graphQL" },
  { name: "Groovy", released: new Date(2007, 0, 2), icon: "groovy"},
  { name: "Hadoop (Apache)", released: new Date(2011, 12, 10) },
  { name: "HANA", released: new Date(2010, 5, 18), icon: "hana" },
  { name: "Haskell", released: new Date(1990, 0, 1), icon: "haskell" },
  { name: "Haxe", released: new Date(2005, 0, 1) },
  { name: "Hive (Apache)", released: new Date(2015, 9, 22) },
  { name: "HTML", released: new Date(1993, 5, 1), icon: "html" },
  { name: "Hugo", released: new Date(2013, 5, 5) },
  { name: "Hyper-V", released: new Date(2008, 5, 26) },
  { name: "IBM Notes", released: new Date(1989, 11, 7) },
  { name: "Java", released: new Date(1996, 9, 10), icon: "java" },
  { name: "JavaScript", released: new Date(1995, 11, 4), icon: "javaScript"},
  { name: "Jekyll", released: new Date(2008, 10, 17), icon: "jekyll" },
  { name: "jQuery", released: new Date(2006, 7, 26), icon: "jquery" },
  { name: "jssm", released: new Date(2017, 4, 3) },
  { name: "Kafka (Apache)", released: new Date(2011, 7, 15), icon: "kafka" },
  { name: "Karaf", released: new Date(2010, 7, 23) },
  { name: "Keras", released: new Date(2015, 3, 27) },
  { name: "Knockout", released: new Date(2010, 7, 5) },
  { name: "Kotlin", released: new Date(2016, 1, 15) },
  { name: "Kubernetes", released: new Date(2014, 6, 7) },
  { name: "Laravel", released: new Date(2011, 8, 9), icon: "laravel" },
  { name: "Laravel 4", released: new Date(2013, 5, 28), icon: "laravel" },
  { name: "Laravel 5", released: new Date(2015, 2, 4), icon: "laravel" },
  { name: "Lisp", released: new Date(1958, 7, 1) },
  { name: "Lua", released: new Date(1993, 6, 28), icon: "lua" },
  { name: "Maven", released: new Date(2004, 7, 13) },
  { name: "Mesos (Apache)", released: new Date(2016, 7, 27) },
  { name: "Metal", released: new Date(2014, 5, 2) },
  { name: "MIPS", released: new Date(1985, 1, 1) },
  { name: "MongoDB", released: new Date(2009, 1, 11), icon: "mongoDB" },
  { name: "MS-DOS", released: new Date(1981, 7, 12) },
  { name: "MySQL", released: new Date(1995, 4, 23), icon: "mySQL" },
  { name: "Node.js", released: new Date(2009, 4, 27), icon: "nodeJs" },
  { name: "Numpy", released: new Date(2006, 7, 26) },
  { name: "Objective-C", released: new Date(1984, 0, 1) },
  { name: "OCaml", released: new Date(1996, 0, 1) },
  { name: "OpenGL", released: new Date(1992, 5, 30) },
  { name: "OpenStack", released: new Date(2010, 9, 21), icon: "openstack" },
  { name: "pandas", released: new Date(2008, 1, 11) },
  { name: "Perl", released: new Date(1987, 12, 18) },
  { name: "PHP", released: new Date(1995, 5, 8), icon: "php" },
  { name: "Polymer", released: new Date(2015, 5, 2) },
  { name: "PostgreSQL", released: new Date(1996, 6, 8) },
  { name: "Preact", released: new Date(2015, 8, 11) },
  { name: "Prometheus", released: new Date(2012, 10, 24), icon: "prometheus" },
  { name: "Protovis", released: new Date(2007, 9, 7) },
  { name: "Python 1", released: new Date(1991, 1, 20), icon: "python" },
  { name: "Python 2", released: new Date(2000, 10, 16), icon: "python" },
  { name: "Python 3", released: new Date(2008, 11, 3), icon: "python" },
  { name: "PyTorch", released: new Date(2016, 7, 26) },
  { name: "Ramda", released: new Date(2013, 4, 29), icon: "react" },
  { name: "React", released: new Date(2013, 4, 29), icon: "react" },
  { name: "React Native", released: new Date(2016, 2, 24), icon: "react" },
  { name: "Redis", released: new Date(2009, 5, 10) },
  { name: "Rollup", released: new Date(2015, 4, 15) },
  { name: "Ruby", released: new Date(1995, 11, 21), icon:"ruby" },
  { name: "Ruby on Rails", released: new Date(2005, 11, 21), icon:"rails" },
  { name: "Rust", released: new Date(2015, 5, 5), icon:"rust" },
  { name: "Sass", released: new Date(2006, 10, 28), icon:"sass" },
  { name: "Scala", released: new Date(2004, 1, 20) },
  { name: "Scheme", released: new Date(1975, 11, 1) },
  { name: "scikit-learn", released: new Date(2007, 5, 1) },
  { name: "Smalltalk", released: new Date(1980, 0, 1)},
  { name: "Spark (Apache)", released: new Date(2014, 5, 26) },
  { name: "Spring", released: new Date(2002, 9, 1) },
  { name: "Swift", released: new Date(2014, 5, 2), icon: "swift" },
  { name: "Symfony 2", released: new Date(2011, 6, 0), icon: "symfony" },
  { name: "Tensorflow", released: new Date(2015, 11, 9) },
  { name: "Terraform", released: new Date(2014, 7, 28) },
  { name: "The World Wide Web", released: new Date(1990, 11, 25), icon: "www" },
  { name: "This project", released: new Date(2018, 9, 25) },
  { name: "TypeScript", released: new Date(2012, 9, 1), icon: "typeScript" },
  { name: "Vue", released: new Date(2014, 1, 1), icon: "vue" },
  { name: "Vulkan", released: new Date(2016, 1, 16) },
  { name: "Webpack", released: new Date(2012, 2, 10) },
  { name: "Windows 10", released: new Date(2015, 6, 29), icon: "windows" },
  { name: "WordPress", released: new Date(2003, 4, 27), icon: "wordpress" },
  { name: "WPF", released: new Date(2006, 11, 21) },
  { name: "Xamarin Forms", released: new Date(2014, 4, 28) },
  { name: "XAML", released: new Date(2008, 6, 1) },
  { name: "XML", released: new Date(1998,1,10), icon: "xml" },
  { name: "Yaml", released: new Date(2001, 5, 11) },
];

export default technologies;
