function User() {
  this.name = 'jhon';
  this.greetLabel = 'show greeting';
  this.showGreeting = false;
  this.friends = [
    {name: 'derek'}, 
    {name: 'greg'}, 
    {name: 'jen'} 
  ];

  // this.greet = function greet() {
  //   if (this.showGreeting) {
  //     this.showGreeting = false;
  //     this.greetLabel = 'show greeting';
  //   } else {
  //     this.showGreeting = true;
  //     this.greetLabel = 'hide greeting';
  //   }
  // }
};

User.prototype.greet = function() {
  if (this.showGreeting) {
    this.showGreeting = false;
    this.greetLabel = 'show greeting';
  } else {
    this.showGreeting = true;
    this.greetLabel = 'hide greeting';
  }
};
