'use strict'

function User() {
  this.name = '';
  this.showGreeting = false;
  this.friends = [
    {name: 'derek'}, 
    {name: 'greg'}, 
    {name: 'jen'} 
  ];
};

User.prototype.showGreet = function() {
  if (this.showGreeting) {
    this.showGreeting = false;
  } else {
    this.showGreeting = true;
  }
};
